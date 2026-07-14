import Breadcrumb from "../components/Breadcrumb";
import CtaSection from "../components/sections/CtaSection";
import BlogListSection from "../components/ui/blog/BlogListSection";
import { blog } from "./data/blogs";

const Blog = () => {
  return(
    <>
      <Breadcrumb
        title="Health Insights & Medical Articles"
        subtitle="Stay informed with expert-written articles on preventive care, treatments, and healthy living from our medical team."
        imageSrc="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1480&q=80"
        currentPage="Blog"
        showSearch
        onSearch={() => {}}
     
     />

      <BlogListSection
        posts={blog}
        postsPerPage={4}
        onPostClick={() => {}}
      />

      <CtaSection
        title="Have a Health Question?"
        subtitle="Our medical experts are here to help. Book a consultation and get personalized advice today."
      />
    
    </>
  )
};

export default Blog;
