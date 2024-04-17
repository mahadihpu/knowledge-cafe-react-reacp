import React from "react";

export default function Bookmarks({ bookmarked }) {
  return (
    <div className="md:w-1/3 mt-2">
      <div className="px-4 py-4 bg-purple-200 border border-purple-500 mb-8 rounded-md">
        <h5 className="text-2xl text-purple-800">
          Spent time on read : 177 min
        </h5>
      </div>
      <div className="px-4 py-4 bg-gray-200">
        <h5 className="text-2xl font-semibold mb-2">
          Bookmarked Blogs: {bookmarked.length}
        </h5>
        {bookmarked.length > 0 &&
          bookmarked.map((bookmark) => (
            <div className="px-2 py-4 bg-white rounded-md my-3">
              <p>{bookmark.title}</p>
            </div>
          ))}
      </div>
    </div>
  );
}
