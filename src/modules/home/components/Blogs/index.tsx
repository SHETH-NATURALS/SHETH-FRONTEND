import BlogCard from "../../../layout/components/blog-card"

const Blogs = () => {
  return (
    <section className="flex w-full justify-center flex-col tex-center items-center">
      <h3 className="font-semibold text-2xl my-12">Our Blog</h3>
      <div className="w-[1224px] flex justify-between">
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
    </section>
  )
}

export default Blogs
