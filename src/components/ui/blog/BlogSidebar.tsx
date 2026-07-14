import React from "react";
import { FaSearch, FaArrowRight } from "react-icons/fa";
import type { BlogPost } from "./BlogCard";

type BlogSidebarProps = {
  categories: { name: string; count: number }[];
  recentPosts: BlogPost[];
  onSearch?: (query: string) => void;
  onCategoryClick?: (category: string) => void;
};

const BlogSidebar: React.FC<BlogSidebarProps> = ({
  categories,
  recentPosts,
  onSearch,
  onCategoryClick,
}) => {
  return (
    <aside className="flex flex-col gap-6">
      {/* Search */}
      <div className="bg-[#f6fafb] rounded-2xl p-6">
        <h3 className="text-[15px] font-bold text-slate-900 mb-4">
          Search Articles
        </h3>
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            onChange={(e) => onSearch?.(e.target.value)}
            className="w-full rounded-xl border border-slate-200 bg-white py-3 pl-4 pr-10 text-[13.5px] outline-none focus:border-[#1cb3c9]"
          />
          <FaSearch className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 text-[13px]" />
        </div>
      </div>

      {/* Categories */}
      <div className="bg-[#f6fafb] rounded-2xl p-6">
        <h3 className="text-[15px] font-bold text-slate-900 mb-4">
          Categories
        </h3>
        <ul className="flex flex-col gap-1">
          {categories.map((cat) => (
            <li key={cat.name}>
              <button
                type="button"
                onClick={() => onCategoryClick?.(cat.name)}
                className="w-full flex items-center justify-between py-2.5 px-3 rounded-lg text-[13.5px] text-slate-600 hover:bg-white hover:text-[#0e7a8c] transition-colors duration-200"
              >
                <span>{cat.name}</span>
                <span className="text-[11.5px] text-slate-400">
                  {cat.count}
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Recent Posts */}
      <div className="bg-[#f6fafb] rounded-2xl p-6">
        <h3 className="text-[15px] font-bold text-slate-900 mb-4">
          Recent Posts
        </h3>
        <div className="flex flex-col gap-4">
          {recentPosts.map((post) => (
            <div key={post.id} className="flex gap-3 cursor-pointer group">
              <img
                src={post.image}
                alt={post.title}
                className="w-16 h-16 rounded-xl object-cover flex-shrink-0"
              />
              <div>
                <h4 className="text-[13px] font-semibold text-slate-800 leading-snug line-clamp-2 group-hover:text-[#0e7a8c] transition-colors duration-200">
                  {post.title}
                </h4>
                <span className="text-[11.5px] text-slate-400">
                  {post.date}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Newsletter */}
      <div className="rounded-2xl p-6 bg-gradient-to-br from-[#0e7a8c] to-[#0f8ea3] text-white">
        <h3 className="text-[15px] font-bold mb-2">Stay Updated</h3>
        <p className="text-[13px] text-[#d6f0f3] leading-relaxed mb-4">
          Get the latest health tips delivered to your inbox.
        </p>
        <input
          type="email"
          placeholder="Your email"
          className="w-full rounded-xl border border-white/20 bg-white/10 py-2.5 px-4 text-[13px] text-white placeholder:text-white/60 outline-none mb-3"
        />
        <button
          type="button"
          className="w-full flex items-center justify-center gap-2 rounded-xl bg-white text-[#0e7a8c] py-2.5 text-[13px] font-semibold hover:bg-[#eaf6f8] transition-colors duration-200"
        >
          Subscribe <FaArrowRight className="text-[11px]" />
        </button>
      </div>
    </aside>
  );
};

export default BlogSidebar;