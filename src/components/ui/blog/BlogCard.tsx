import React from "react";
import { FaArrowRight, FaRegClock } from "react-icons/fa";

export type BlogPost = {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  author: string;
  authorPhoto: string;
  date: string;
  readTime: string;
};

type BlogCardProps = {
  post: BlogPost;
  onClick?: (id: number) => void;
};

const BlogCard: React.FC<BlogCardProps> = ({ post, onClick }) => {
  return (
    <article
      onClick={() => onClick?.(post.id)}
      className="group cursor-pointer bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-[0_10px_30px_rgba(13,60,68,0.06)] hover:shadow-[0_25px_50px_-15px_rgba(13,60,68,0.18)] hover:-translate-y-1.5 transition-all duration-300"
    >
      <div className="relative aspect-[4/2.6] overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <span className="absolute top-4 left-4 text-[11px] font-bold uppercase tracking-wide px-3 py-1.5 rounded-full bg-white/95 text-[#0e7a8c] backdrop-blur-sm">
          {post.category}
        </span>
      </div>

      <div className="p-6">
        <div className="flex items-center gap-3 text-[12.5px] text-slate-400 mb-3">
          <span>{post.date}</span>
          <span className="w-1 h-1 rounded-full bg-slate-300" />
          <span className="flex items-center gap-1">
            <FaRegClock className="text-[11px]" /> {post.readTime}
          </span>
        </div>

        <h3 className="text-[17px] font-bold text-slate-900 leading-snug mb-3 group-hover:text-[#0e7a8c] transition-colors duration-200 line-clamp-2">
          {post.title}
        </h3>

        <p className="text-[13.5px] leading-relaxed text-slate-500 mb-5 line-clamp-2">
          {post.excerpt}
        </p>

        <div className="flex items-center justify-between pt-4 border-t border-slate-100">
          <div className="flex items-center gap-2.5">
            <img
              src={post.authorPhoto}
              alt={post.author}
              className="w-8 h-8 rounded-full object-cover"
            />
            <span className="text-[13px] font-semibold text-slate-700">
              {post.author}
            </span>
          </div>
          <span className="inline-flex w-8 h-8 items-center justify-center rounded-full bg-[#e7f7f9] text-[#0e7a8c] text-[12px] group-hover:bg-[#0e7a8c] group-hover:text-white transition-colors duration-300">
            <FaArrowRight />
          </span>
        </div>
      </div>
    </article>
  );
};

export default BlogCard;