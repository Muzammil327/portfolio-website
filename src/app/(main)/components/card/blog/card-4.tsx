import TabbedCard from '@/src/components/TabbedCard'
import Image from 'next/image'

const BlogCard4 = () => {
  const BlogCardComponent = () => (
    <section className="py-8 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 relative lg:px-8 md:px-6 sm:px-4 px-2 container mx-auto">
      <div className="relative rounded-md shadow-lg">
        <div className="relative">
          <Image
            src="/sample.png"
            alt="Simplest Salad Recipe ever"
            className="w-full h-full object-cover"
            height={500}
            width={500}
          />
          <div className="absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25 hover:bg-transparent transition duration-300"></div>
        </div>
        <a
          href=""
          className="absolute top-2 right-2 bg-indigo-500 text-white hover:bg-white hover:text-indigo-500 px-2 py-1 transition-all ease-in-out duration-300"
        >
          Cooking
        </a>
        <div className="px-3 py-4">
          <h3 className="text-xl leading-7 mb-2">Simplest Salad Recipe ever</h3>
          <p className="text-gray-500 !mb-4 !mt-0 !text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae unde
            aperiam ipsa.
          </p>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-sm">
              <span>
                <svg
                  height="13px"
                  width="13px"
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  viewBox="0 0 512 512"
                >
                  <g>
                    <g>
                      <path
                        d="M256,0C114.837,0,0,114.837,0,256s114.837,256,256,256s256-114.837,256-256S397.163,0,256,0z M277.333,256
			c0,11.797-9.536,21.333-21.333,21.333h-85.333c-11.797,0-21.333-9.536-21.333-21.333s9.536-21.333,21.333-21.333h64v-128
			c0-11.797,9.536-21.333,21.333-21.333s21.333,9.536,21.333,21.333V256z"
                      ></path>
                    </g>
                  </g>
                </svg>
              </span>
              <span className="text-gray-500">6 mins ago</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <svg
                className="h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                ></path>
              </svg>
              <span className="text-gray-500">20 Comments</span>
            </div>
          </div>
        </div>
      </div>

      <div className="relative rounded-md shadow-lg">
        <div className="relative">
          <Image
            src="/sample.png"
            alt="Simplest Salad Recipe ever"
            className="w-full h-full object-cover"
            height={500}
            width={500}
          />
          <div className="absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25 hover:bg-transparent transition duration-300"></div>
        </div>
        <a
          href=""
          className="absolute top-2 right-2 bg-indigo-500 text-white hover:bg-white hover:text-indigo-500 px-2 py-1 transition-all ease-in-out duration-300"
        >
          Cooking
        </a>
        <div className="px-3 py-4">
          <h3 className="text-xl leading-7 mb-2">Simplest Salad Recipe ever</h3>
          <p className="text-gray-500 !mb-4 !mt-0 !text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae unde
            aperiam ipsa.
          </p>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-sm">
              <span>
                <svg
                  height="13px"
                  width="13px"
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  viewBox="0 0 512 512"
                >
                  <g>
                    <g>
                      <path
                        d="M256,0C114.837,0,0,114.837,0,256s114.837,256,256,256s256-114.837,256-256S397.163,0,256,0z M277.333,256
			c0,11.797-9.536,21.333-21.333,21.333h-85.333c-11.797,0-21.333-9.536-21.333-21.333s9.536-21.333,21.333-21.333h64v-128
			c0-11.797,9.536-21.333,21.333-21.333s21.333,9.536,21.333,21.333V256z"
                      ></path>
                    </g>
                  </g>
                </svg>
              </span>
              <span className="text-gray-500">6 mins ago</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <svg
                className="h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                ></path>
              </svg>
              <span className="text-gray-500">20 Comments</span>
            </div>
          </div>
        </div>
      </div>

      <div className="relative rounded-md shadow-lg">
        <div className="relative">
          <Image
            src="/sample.png"
            alt="Simplest Salad Recipe ever"
            className="w-full h-full object-cover"
            height={500}
            width={500}
          />
          <div className="absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25 hover:bg-transparent transition duration-300"></div>
        </div>
        <a
          href=""
          className="absolute top-2 right-2 bg-indigo-500 text-white hover:bg-white hover:text-indigo-500 px-2 py-1 transition-all ease-in-out duration-300"
        >
          Cooking
        </a>
        <div className="px-3 py-4">
          <h3 className="text-xl leading-7 mb-2">Simplest Salad Recipe ever</h3>
          <p className="text-gray-500 !mb-4 !mt-0 !text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae unde
            aperiam ipsa.
          </p>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-sm">
              <span>
                <svg
                  height="13px"
                  width="13px"
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  viewBox="0 0 512 512"
                >
                  <g>
                    <g>
                      <path
                        d="M256,0C114.837,0,0,114.837,0,256s114.837,256,256,256s256-114.837,256-256S397.163,0,256,0z M277.333,256
			c0,11.797-9.536,21.333-21.333,21.333h-85.333c-11.797,0-21.333-9.536-21.333-21.333s9.536-21.333,21.333-21.333h64v-128
			c0-11.797,9.536-21.333,21.333-21.333s21.333,9.536,21.333,21.333V256z"
                      ></path>
                    </g>
                  </g>
                </svg>
              </span>
              <span className="text-gray-500">6 mins ago</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <svg
                className="h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                ></path>
              </svg>
              <span className="text-gray-500">20 Comments</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )

  const sampleCode = `
    <section className="py-8 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 relative lg:px-8 md:px-6 sm:px-4 px-2 container mx-auto">
      <div className="card relative rounded-md shadow-lg">
        <div className="image-container relative">
          <Image
            src="/sample.png"
            alt="Simplest Salad Recipe ever"
            className="w-full h-full object-cover"
            height={500}
            width={500}
          />
          <div className="image-overlay absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25 hover:bg-transparent transition duration-300"></div>
        </div>
        <a
          href=""
          className="absolute top-2 right-2 category bg-indigo-500 text-white hover:bg-white hover:text-indigo-500 px-2 py-1 transition-all ease-in-out duration-300"
        >
          Cooking
        </a>
        <div className="card-body px-3 py-4">
          <h3 className="text-xl leading-7 mb-2">Simplest Salad Recipe ever</h3>
          <p className="text-gray-500 mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae unde
            aperiam ipsa.
          </p>
          <div className="tag flex items-center justify-between">
            <div className="flex items-center gap-2 text-sm">
              <span>
                <svg
                  height="13px"
                  width="13px"
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  viewBox="0 0 512 512"
                >
                  <g>
                    <g>
                      <path
                        d="M256,0C114.837,0,0,114.837,0,256s114.837,256,256,256s256-114.837,256-256S397.163,0,256,0z M277.333,256
			c0,11.797-9.536,21.333-21.333,21.333h-85.333c-11.797,0-21.333-9.536-21.333-21.333s9.536-21.333,21.333-21.333h64v-128
			c0-11.797,9.536-21.333,21.333-21.333s21.333,9.536,21.333,21.333V256z"
                      ></path>
                    </g>
                  </g>
                </svg>
              </span>
              <span className="text-gray-500">6 mins ago</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <svg
                className="h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                ></path>
              </svg>
              <span className="text-gray-500">20 Comments</span>
            </div>
          </div>
        </div>
      </div>

      <div className="card relative rounded-md shadow-lg">
        <div className="image-container relative">
          <Image
            src="/sample.png"
            alt="Simplest Salad Recipe ever"
            className="w-full h-full object-cover"
            height={500}
            width={500}
          />
          <div className="image-overlay absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25 hover:bg-transparent transition duration-300"></div>
        </div>
        <a
          href=""
          className="absolute top-2 right-2 category bg-indigo-500 text-white hover:bg-white hover:text-indigo-500 px-2 py-1 transition-all ease-in-out duration-300"
        >
          Cooking
        </a>
        <div className="card-body px-3 py-4">
          <h3 className="text-xl leading-7 mb-2">Simplest Salad Recipe ever</h3>
          <p className="text-gray-500 mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae unde
            aperiam ipsa.
          </p>
          <div className="tag flex items-center justify-between">
            <div className="flex items-center gap-2 text-sm">
              <span>
                <svg
                  height="13px"
                  width="13px"
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  viewBox="0 0 512 512"
                >
                  <g>
                    <g>
                      <path
                        d="M256,0C114.837,0,0,114.837,0,256s114.837,256,256,256s256-114.837,256-256S397.163,0,256,0z M277.333,256
			c0,11.797-9.536,21.333-21.333,21.333h-85.333c-11.797,0-21.333-9.536-21.333-21.333s9.536-21.333,21.333-21.333h64v-128
			c0-11.797,9.536-21.333,21.333-21.333s21.333,9.536,21.333,21.333V256z"
                      ></path>
                    </g>
                  </g>
                </svg>
              </span>
              <span className="text-gray-500">6 mins ago</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <svg
                className="h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                ></path>
              </svg>
              <span className="text-gray-500">20 Comments</span>
            </div>
          </div>
        </div>
      </div>

      <div className="card relative rounded-md shadow-lg">
        <div className="image-container relative">
          <Image
            src="/sample.png"
            alt="Simplest Salad Recipe ever"
            className="w-full h-full object-cover"
            height={500}
            width={500}
          />
          <div className="image-overlay absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25 hover:bg-transparent transition duration-300"></div>
        </div>
        <a
          href=""
          className="absolute top-2 right-2 category bg-indigo-500 text-white hover:bg-white hover:text-indigo-500 px-2 py-1 transition-all ease-in-out duration-300"
        >
          Cooking
        </a>
        <div className="card-body px-3 py-4">
          <h3 className="text-xl leading-7 mb-2">Simplest Salad Recipe ever</h3>
          <p className="text-gray-500 mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae unde
            aperiam ipsa.
          </p>
          <div className="tag flex items-center justify-between">
            <div className="flex items-center gap-2 text-sm">
              <span>
                <svg
                  height="13px"
                  width="13px"
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  viewBox="0 0 512 512"
                >
                  <g>
                    <g>
                      <path
                        d="M256,0C114.837,0,0,114.837,0,256s114.837,256,256,256s256-114.837,256-256S397.163,0,256,0z M277.333,256
			c0,11.797-9.536,21.333-21.333,21.333h-85.333c-11.797,0-21.333-9.536-21.333-21.333s9.536-21.333,21.333-21.333h64v-128
			c0-11.797,9.536-21.333,21.333-21.333s21.333,9.536,21.333,21.333V256z"
                      ></path>
                    </g>
                  </g>
                </svg>
              </span>
              <span className="text-gray-500">6 mins ago</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <svg
                className="h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                ></path>
              </svg>
              <span className="text-gray-500">20 Comments</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  `

  return (
    <TabbedCard
      title="Blog Card 4"
      component={<BlogCardComponent />}
      sampleCode={sampleCode}
    />
  )
}

export default BlogCard4
