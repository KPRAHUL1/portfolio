#!/usr/bin/env bash
#
# One-time setup for an Amazon Linux 2023 EC2 instance that will host
# kprahul/personal-site. Run once per instance; safe to re-run.
#
# After this, deploys are handled entirely by the GitHub Actions `deploy` job,
# which SSHes in and runs docker pull / docker run.
#
# Usage:
#   scp -i key.pem deploy/ec2-bootstrap.sh ec2-user@<IP>:~/
#   ssh -i key.pem ec2-user@<IP> 'bash ~/ec2-bootstrap.sh'

set -euo pipefail

if ! command -v docker >/dev/null 2>&1; then
  echo "==> Installing Docker"
  sudo dnf install -y docker
else
  echo "==> Docker already installed"
fi

# --now starts it immediately; enable makes it survive a reboot, which matters
# because the container itself uses --restart unless-stopped.
sudo systemctl enable --now docker

# Lets ec2-user run docker without sudo, which is what the CI SSH session does.
sudo usermod -aG docker ec2-user

echo
echo "==> Bootstrap complete"
sudo docker --version
echo
echo "Log out and back in for group membership to apply, then push to main."
