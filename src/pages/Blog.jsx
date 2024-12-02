import React from "react";

const Blog = () => {
  const featuredPost = {
    title: "The Role of Transportation in Smart Cities",
    image: "../../public/blog1.jpg", // Replace with your image URL
    description:
      "Smart cities rely on efficient and innovative transportation systems to improve connectivity, reduce pollution, and enhance the quality of life."
  };

  const blogPosts = [
    {
      id: 1,
      title: "Exploring Modern Public Transport Systems",
      image: "../../public/blog2.avif",
      description:
        "Public transport systems around the world are evolving with innovations in technology and sustainability."
    },
    {
      id: 2,
      title: "The Future of Electric Vehicles",
      image: "../../public/blog3.jpg",
      description:
        "Electric vehicles are revolutionizing the way we think about personal and public transportation."
    },
    {
      id: 3,
      title: "High-Speed Rail: Connecting Cities Faster",
      image: "../../public/blog4.jpg",
      description:
        "High-speed rail systems are transforming long-distance travel with speed and comfort."
    },
    {
      id: 4,
      title: "Autonomous Vehicles: A Driverless Future",
      image: "../../public/blog5.jpg",
      description:
        "Autonomous vehicles are set to redefine how we commute, enhancing safety and efficiency on the roads."
    },
    {
      id: 5,
      title: "The Impact of Air Travel on Climate Change",
      image: "../../public/blog6.jpg",
      description:
        "Air travel has a significant environmental impact. Learn how the industry is adapting with greener technologies."
    },
    {
      id: 6,
      title: "Cycling and Walkability in Urban Spaces",
      image: "../../public/blog7.jpg",
      description:
        "Promoting cycling and walkable urban areas can reduce congestion and foster healthier lifestyles."
    }
  ];

  const categories = [
    "Public Transport",
    "Electric Vehicles",
    "High-Speed Rail",
    "Smart Cities",
    "Cycling & Walking",
    "Sustainability"
  ];

  return (
    <div className="bg-gray-100 p-6 md:p-10">
      {/* Featured Post */}
      <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
        <img
          src={featuredPost.image}
          alt={featuredPost.title}
          className="w-full h-64 object-cover"
        />
        <div className="p-6">
          <h1 className="text-3xl font-bold text-gray-800">
            {featuredPost.title}
          </h1>
          <p className="text-gray-600 mt-4">
            {featuredPost.description}
          </p>
        </div>
      </div>

      {/* Categories */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Categories</h2>
        <div className="flex flex-wrap gap-4">
          {categories.map((category, index) =>
            <span
              key={index}
              className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
            >
              {category}
            </span>
          )}
        </div>
      </div>

      {/* Blog Posts */}
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Recent Articles
        </h2>
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map(post =>
            <div
              key={post.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800">
                  {post.title}
                </h3>
                <p className="text-gray-600 mt-2">
                  {post.description}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Blog;
