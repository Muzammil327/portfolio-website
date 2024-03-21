'use client'
import { FacebookShareButton, FacebookIcon } from 'react-share'
import { TwitterShareButton, TwitterIcon } from 'react-share'

export default function ShareSocial() {
  const shareUrl = 'https://web.facebook.com/'
  return (
    <>
      <div className="flex gap-4">
        <div>
          <FacebookShareButton url={shareUrl}>
            <div className="facebook-share-button">
              <FacebookIcon size={32} round />
            </div>
          </FacebookShareButton>
        </div>
        <div>
          <TwitterShareButton url={shareUrl}>
            <div className="facebook-share-button">
              <TwitterIcon size={32} round />
            </div>
          </TwitterShareButton>
        </div>
      </div>

      <style jsx>{`
        .facebook-share-button {
          display: inline-flex;
          align-items: center;
          color: #fff;
          border-radius: 4px;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }

        .facebook-share-button:hover {
          background-color: #fff;
        }

        .button-text {
          margin-left: 8px;
        }

        .share-count {
          display: inline-block;
          margin-left: 8px;
          font-size: 14px;
          color: #666;
        }
      `}</style>
    </>
  )
}
