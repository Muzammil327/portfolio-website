import Image from 'next/image'
import TabbedCard from '@/src/components/TabbedCard'

const BlogCard1 = () => {
  const BlogCardComponent = () => (
    <section className="my-10">
      <div className="md:px-4 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
        <div className=" p-3 border-2 border-solid hover:border-gray-200 border-transparent duration-300 ease-in-out rounded-xl">
          <div className="image">
            <Image
              src="/sample.png"
              alt=""
              className="rounded-2xl min-h-64 h-auto object-cover w-full"
              height={400}
              width={400}
            />
          </div>
          <div className="body">
            <h3 className="py-2 font-semibold text-xl leading-8 tracking-wide">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo,
              odio.
            </h3>
            <div className="flex items-center justify-between py-2">
              <span className="text-sm font-medium">
                <span className="text-slate-400 mr-1 font-normal">By</span>
                Muzammil
              </span>
              <span className="text-slate-400 mr-6 font-normal text-sm">
                1h ago
              </span>
            </div>
          </div>
        </div>
        <div className=" p-3 border-2 border-solid hover:border-gray-200 border-transparent duration-300 ease-in-out rounded-xl">
          <div className="image">
            <Image
              src="/sample.png"
              alt=""
              className="rounded-2xl min-h-64 h-auto object-cover w-full"
              height={400}
              width={400}
            />
          </div>
          <div className="body">
            <h3 className="py-2 font-semibold text-xl leading-8 tracking-wide">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo,
              odio.
            </h3>
            <div className="lower flex items-center justify-between py-2">
              <span className="text-sm font-medium">
                <span className="text-slate-400 mr-1 font-normal">By</span>
                Muzammil
              </span>
              <span className="text-slate-400 mr-6 font-normal text-sm">
                1h ago
              </span>
            </div>
          </div>
        </div>
        <div className=" p-3 border-2 border-solid hover:border-gray-200 border-transparent duration-300 ease-in-out rounded-xl">
          <div className="image">
            <Image
              src="/sample.png"
              alt=""
              className="rounded-2xl min-h-64 h-auto object-cover w-full"
              height={400}
              width={400}
            />
          </div>
          <div className="body">
            <h3 className="py-2 font-semibold text-xl leading-8 tracking-wide">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo,
              odio.
            </h3>
            <div className="lower flex items-center justify-between py-2">
              <span className="text-sm font-medium">
                <span className="text-slate-400 mr-1 font-normal">By</span>
                Muzammil
              </span>
              <span className="text-slate-400 mr-6 font-normal text-sm">
                1h ago
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )

  const sampleCode = `
    <section className="my-10">
      <div className="md:px-4 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
        <div className=" p-3 border-2 border-solid hover:border-gray-200 border-transparent duration-300 ease-in-out rounded-xl">
          <div className="image">
            <Image
              src="/sample.png"
              alt=""
              className="rounded-2xl min-h-64 h-auto object-cover w-full"
              height={400}
              width={400}
            />
          </div>
          <div className="body">
            <h3 className="py-2 font-semibold text-xl leading-8 tracking-wide">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo,
              odio.
            </h3>
            <div className="flex items-center justify-between py-2">
              <span className="text-sm font-medium">
                <span className="text-slate-400 mr-1 font-normal">By</span>
                Muzammil
              </span>
              <span className="text-slate-400 mr-6 font-normal text-sm">
                1h ago
              </span>
            </div>
          </div>
        </div>
        <div className=" p-3 border-2 border-solid hover:border-gray-200 border-transparent duration-300 ease-in-out rounded-xl">
          <div className="image">
            <Image
              src="/sample.png"
              alt=""
              className="rounded-2xl min-h-64 h-auto object-cover w-full"
              height={400}
              width={400}
            />
          </div>
          <div className="body">
            <h3 className="py-2 font-semibold text-xl leading-8 tracking-wide">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo,
              odio.
            </h3>
            <div className="lower flex items-center justify-between py-2">
              <span className="text-sm font-medium">
                <span className="text-slate-400 mr-1 font-normal">By</span>
                Muzammil
              </span>
              <span className="text-slate-400 mr-6 font-normal text-sm">
                1h ago
              </span>
            </div>
          </div>
        </div>
        <div className=" p-3 border-2 border-solid hover:border-gray-200 border-transparent duration-300 ease-in-out rounded-xl">
          <div className="image">
            <Image
              src="/sample.png"
              alt=""
              className="rounded-2xl min-h-64 h-auto object-cover w-full"
              height={400}
              width={400}
            />
          </div>
          <div className="body">
            <h3 className="py-2 font-semibold text-xl leading-8 tracking-wide">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo,
              odio.
            </h3>
            <div className="lower flex items-center justify-between py-2">
              <span className="text-sm font-medium">
                <span className="text-slate-400 mr-1 font-normal">By</span>
                Muzammil
              </span>
              <span className="text-slate-400 mr-6 font-normal text-sm">
                1h ago
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  `

  return (
    <TabbedCard
      title="Blog Card 1"
      component={<BlogCardComponent />}
      sampleCode={sampleCode}
    />
  )
}

export default BlogCard1
