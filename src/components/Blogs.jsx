import React from "react";
import Button from "../layouts/Button";
import BlogCard from "../layouts/BlogCard";
import img1 from "../assets/img/blog1.webp";
import img2 from "../assets/img/blog2.jpg";
import img3 from "../assets/img/blog3.jpg";
import img4 from "../assets/img/blog4.jpg";
import img5 from "../assets/img/blog5.jpg";
import img6 from "../assets/img/blog6.jpg";

const Blogs = () => {
  return (
    <div className=" min-h-screen flex flex-col justify-center lg:px-32 px-5 pt-24">
      <div className=" flex flex-col items-center lg:flex-row justify-between">
        <div>
          <h1 className=" text-4xl font-semibold text-center lg:text-start">
            Latest Post
          </h1>
          <p className=" mt-2 text-center lg:text-start">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus,
            quidem.
          </p>
        </div>
        <div className=" mt-4 lg:mt-0">
          <Button title="Our Articles" />
        </div>
      </div>
      <div className=" my-8">
        <div className=" flex flex-wrap justify-center gap-5">
          <BlogCard img={img1} headlines="Top 10 Tips for Maintaining a Healthy Lifestyle" />
          <BlogCard img={img2} headlines="The Importance of Regular Health Checkups" />
          <BlogCard
            img={img3}
            headlines="Understanding Pediatric Vaccinations"
          />
          <BlogCard img={img4} headlines="How to Manage Stress Effectively" />
          <BlogCard img={img5} headlines="Best Practices for a Bright Smile" />
          <BlogCard img={img6} headlines="Tips for a Healthy Heart" />
        </div>
      </div>
    </div>
  );
};

export default Blogs;
