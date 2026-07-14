import React, { useMemo, useState } from "react";
import BlogCard, { type BlogPost } from "./BlogCard";
import BlogSidebar from "./BlogSidebar";

type BlogListSectionProps = {
  posts: BlogPost[];
  postsPerPage?: number;
  onPostClick?: (id: number) => void;
};

const BlogListSection: React.FC<BlogListSectionProps> = ({
  posts,
  postsPerPage = 4,
  onPostClick,
}) => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [page, setPage] = useState(1);

  const categories = useMemo(() => {
    const unique = Array.from(new Set(posts.map((p) => p.category)));
    return [
      { name: "All", count: posts.length },
      ...unique.map((name) => ({
        name,
        count: posts.filter((p) => p.category === name).length,
      })),
    ];
  }, [posts]);

  const filteredPosts = useMemo(() => {
    return posts.filter((p) => {
      const matchesCategory =
        activeCategory === "All" || p.category === activeCategory;
      const matchesSearch = p.title
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [posts, activeCategory, searchQuery]);

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const paginatedPosts = filteredPosts.slice(
    (page - 1) * postsPerPage,
    page * postsPerPage
  );

  const recentPosts = posts.slice(0, 3);

  return (
    <section className="bg-white px-[5vw] py-20">
      <div className="max-w-[1320px] mx-auto">
        {/* Category Filter Tabs */}
        <div className="flex flex-wrap gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.name}
              type="button"
              onClick={() => {
                setActiveCategory(cat.name);
                setPage(1);
              }}
              className={`px-5 py-2.5 rounded-full text-[13px] font-semibold border transition-colors duration-200 ${
                activeCategory === cat.name
                  ? "bg-[#0e7a8c] text-white border-[#0e7a8c]"
                  : "bg-white text-slate-600 border-slate-200 hover:border-[#1cb3c9] hover:text-[#0e7a8c]"
              }`}
            >
              {cat.name} ({cat.count})
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-10">
          {/* Main Grid */}
          <div>
            {paginatedPosts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {paginatedPosts.map((post) => (
                  <BlogCard key={post.id} post={post} onClick={onPostClick} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20 text-slate-400 text-[14px]">
                No articles found.
              </div>
            )}

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex items-center justify-center gap-2 mt-12">
                {Array.from({ length: totalPages }).map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setPage(i + 1)}
                    className={`w-10 h-10 rounded-full text-[13px] font-semibold transition-colors duration-200 ${
                      page === i + 1
                        ? "bg-[#0e7a8c] text-white"
                        : "bg-[#f6fafb] text-slate-600 hover:bg-[#eaf6f8]"
                    }`}
                  >
                    {i + 1}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Sidebar */}
          <BlogSidebar  
            categories={categories.filter((c) => c.name !== "All")}
            recentPosts={recentPosts}
            onSearch={setSearchQuery}
            onCategoryClick={(cat) => {
              setActiveCategory(cat);
              setPage(1);
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default BlogListSection;