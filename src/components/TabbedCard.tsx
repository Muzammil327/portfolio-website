'use client'
import { useState, ReactNode } from 'react'

interface TabbedCardProps {
  title: string
  component: ReactNode
  sampleCode: string
}

const TabbedCard: React.FC<TabbedCardProps> = ({
  title,
  component,
  sampleCode,
}) => {
  const [activeTab, setActiveTab] = useState<'component' | 'code'>('component')

  const handleTabChange = (tab: 'component' | 'code') => {
    setActiveTab(tab)
  }

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <h2 className="py-4 text-4xl mb-4">{title}</h2>
      <div className="flex border-b justify-end">
        <button
          className={`md:w-3/12 sm:w-4/12 w-6/12 py-2 text-center ${activeTab === 'component' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          onClick={() => handleTabChange('component')}
        >
          Component
        </button>
        <button
          className={`md:w-3/12 sm:w-4/12 w-6/12 py-2 text-center ${activeTab === 'code' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          onClick={() => handleTabChange('code')}
        >
          Code
        </button>
      </div>
      <div className="p-4">
        {activeTab === 'component' ? (
          <section className="my-10">{component}</section>
        ) : (
          <pre className="bg-gray-100 p-4 rounded overflow-auto">
            <code>{sampleCode}</code>
          </pre>
        )}
      </div>
    </div>
  )
}

export default TabbedCard
