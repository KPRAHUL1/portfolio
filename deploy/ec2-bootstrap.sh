#!/usr/bin/env bash
#
# One-time setup for an Amazon Linux 2023 EC2 instance that will host
# kprahul/personal-site. Run once per instance; safe to re-run.
#
# After this, deploys are handled by the GitHub Actions `deploy` job, which
# copies docker-compose.yml here and runs `docker compose up -d`.
#
# Usage:
#   scp -i key.pem deploy/ec2-bootstrap.sh ec2-user@<IP>:~/
#   ssh -i key.pem ec2-user@<IP> 'bash ~/ec2-bootstrap.sh'

set -euo pipefail

APP_DIR="/var/www/personal-site"

# --- Docker engine ----------------------------------------------------------
if ! command -v docker >/dev/null 2>&1; then
  echo "==> Installing Docker"
  sudo dnf install -y docker
else
  echo "==> Docker already installed"
fi

sudo systemctl enable --now docker

# Lets ec2-user (and so the CI SSH session) run docker without sudo.
sudo usermod -aG docker ec2-user

# --- Compose v2 plugin ------------------------------------------------------
# AL2023's docker package ships the engine only, with no compose plugin, so
# `docker compose` is unavailable until the binary is dropped in by hand.
PLUGIN_DIR="/usr/local/lib/docker/cli-plugins"
if ! docker compose version >/dev/null 2>&1; then
  echo "==> Installing Docker Compose plugin"
  sudo mkdir -p "$PLUGIN_DIR"
  sudo curl -fsSL \
    "https://github.com/docker/compose/releases/latest/download/docker-compose-linux-x86_64" \
    -o "$PLUGIN_DIR/docker-compose"
  sudo chmod +x "$PLUGIN_DIR/docker-compose"
else
  echo "==> Compose plugin already installed"
fi

# --- App directory ----------------------------------------------------------
# Owned by ec2-user so the deploy job can scp docker-compose.yml in without sudo.
echo "==> Preparing $APP_DIR"
sudo mkdir -p "$APP_DIR"
sudo chown -R ec2-user:ec2-user "$APP_DIR"

echo
echo "==> Bootstrap complete"
sudo docker --version
sudo docker compose version
echo
echo "Log out and back in for group membership to apply, then push to main."
