import React from 'react'

export default function SkillCard({
  icon,
  title,
  news,
}: {
  icon: React.ReactNode
  title: string
  news?: boolean
}) {
  return (
    <div className="relative sm:py-10 py-2 px-4 bg-blue-50 dark:bg-gray-900 border border-solid border-gray-200 dark:border-gray-700 rounded-lg flex items-center justify-center flex-col">
      <div className="icon my-5">{icon}</div>
      {news ? (
        <div className="new absolute flex items-center justify-between gap-2 top-3 right-3 border border-solid px-2 py-1 text-sm rounded-lg">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
          </span>{' '}
          Coming
        </div>
      ) : null}
      <div className="text font-semibold text-lg">{title}</div>
    </div>
  )
}
