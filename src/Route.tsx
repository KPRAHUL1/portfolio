import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home/Home";
import MainLayout from "./layout/layout";
import About from "./pages/About/About";
import Project from "./pages/Project/Project";
import Contact from "./pages/Contact/Contact"
import Projectdetails from "./pages/Project/components/Projectdetails";
import Blog from "./pages/Blog/Blog";
import BlogDetails from "./pages/Blog/blogDetails";
import Posts from "./pages/Posts/Post";
import CreatePost from "./pages/Posts/PostForm";
import NotFound from "./pages/NotFound/NotFound";
const AppRoutes = () => {
  return (
    <Router>
      <ScrollToTop />
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
           <Route path="/about" element={<About/>}/>
           <Route path="/projects" element={<Project/>}/>
           <Route path="/projects/:id" element={<Projectdetails/>}/>
           <Route path="/blog" element={<Blog/>}/>
           <Route path="/blog/:id" element={<BlogDetails />} />
           <Route path="/contact" element={<Contact/>}/>
           <Route path="/posts" element={<Posts/>}/>
           <Route path="/createPosts" element={<CreatePost/>}/>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </MainLayout>
    </Router>
  );
};

export default AppRoutes;
