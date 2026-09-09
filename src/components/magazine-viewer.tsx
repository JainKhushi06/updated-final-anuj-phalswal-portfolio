"use client"

import { useEffect, useRef, useState } from "react"
import dynamic from "next/dynamic"
import { Maximize, Minimize } from "lucide-react"

const HTMLFlipBook: any = dynamic(
  () => import("react-pageflip").then((mod) => mod.default),
  { ssr: false }
)

export default function MagazineViewer() {
  const bookRef = useRef<any>(null)
  const magazineRef = useRef<HTMLDivElement>(null)

  const [page, setPage] = useState(0)
  const [pageInput, setPageInput] = useState("1")
  const [isFullscreen, setIsFullscreen] = useState(false)

  const pages = Array.from({ length: 32 }, (_, i) => i + 1)

  // Page 1 and Page 32 are single covers
  const isFirstPage = page === 0
  const isLastPage = page === 31

  // --------------------------------
  // FULLSCREEN DETECTION
  // --------------------------------
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement)
    }

    document.addEventListener(
      "fullscreenchange",
      handleFullscreenChange
    )

    return () => {
      document.removeEventListener(
        "fullscreenchange",
        handleFullscreenChange
      )
    }
  }, [])

  // --------------------------------
  // KEYBOARD NAVIGATION
  // --------------------------------
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        document.activeElement?.tagName === "INPUT" ||
        document.activeElement?.tagName === "TEXTAREA"
      ) {
        return
      }

      if (e.key === "ArrowLeft") {
        e.preventDefault()
        bookRef.current?.pageFlip().flipPrev()
      }

      if (e.key === "ArrowRight") {
        e.preventDefault()
        bookRef.current?.pageFlip().flipNext()
      }
    }

    window.addEventListener("keydown", handleKeyDown)

    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [])

  // --------------------------------
  // FULLSCREEN
  // --------------------------------
  const toggleFullscreen = async () => {
    try {
      if (!document.fullscreenElement) {
        await magazineRef.current?.requestFullscreen()
      } else {
        await document.exitFullscreen()
      }
    } catch (error) {
      console.error("Fullscreen error:", error)
    }
  }

  // --------------------------------
  // GO TO PAGE
  // --------------------------------
  const goToPage = () => {
    const targetPage = Number(pageInput)

    if (
      Number.isInteger(targetPage) &&
      targetPage >= 1 &&
      targetPage <= 32
    ) {
      bookRef.current
        ?.pageFlip()
        .flip(targetPage - 1)
    } else {
      setPageInput(String(page + 1))
    }
  }

  return (
    <div
      ref={magazineRef}
      className={`
        w-full
        flex
        flex-col
        items-center
        ${
          isFullscreen
            ? "bg-background justify-center min-h-screen"
            : ""
        }
      `}
    >

      {/* =========================================
          FULLSCREEN BUTTON
      ========================================= */}
      <div
        className={`
          w-full
          flex
          justify-end
          ${
            isFullscreen
              ? "absolute top-5 right-5 z-[200]"
              : "max-w-5xl mb-4"
          }
        `}
      >
        <button
          onClick={toggleFullscreen}
          className="
            flex
            items-center
            gap-2
            px-4
            py-2
            rounded-lg
            border
            bg-background
            shadow-md
            hover:bg-muted
            transition
          "
        >
          {isFullscreen ? (
            <>
              <Minimize className="h-4 w-4" />
              Exit Full Screen
            </>
          ) : (
            <>
              <Maximize className="h-4 w-4" />
              Full Screen
            </>
          )}
        </button>
      </div>

      {/* =========================================
          MAGAZINE AREA
      ========================================= */}
      <div
        className={`
          w-full
          flex
          justify-center
          items-center
          overflow-hidden
          ${
            isFullscreen
              ? "h-screen"
              : "min-h-[650px]"
          }
        `}
      >

        {/* 
          IMPORTANT:
          We NEVER change the flipbook orientation.
          This prevents the 1 → 2 page glitch.
        */}

        <div
          className={`
            relative
            transition-transform
            duration-300
            ease-in-out

            ${
              isFirstPage
                ? "md:-translate-x-[225px]"
                : isLastPage
                ? "md:translate-x-[225px]"
                : ""
            }
          `}
        >

          <HTMLFlipBook
            ref={bookRef}

            /*
             * Keep the original large magazine size
             */
            width={500}
            height={667}

            size="fixed"

            minWidth={300}
            maxWidth={isFullscreen ? 650 : 500}

            minHeight={400}
            maxHeight={isFullscreen ? 850 : 700}

            /*
             * IMPORTANT
             *
             * Page 1 = single cover
             * Page 2-31 = two page spread
             * Page 32 = single back cover
             */
            showCover={true}

            /*
             * Keep this FALSE permanently.
             * Do NOT dynamically change this.
             */
            usePortrait={false}

            mobileScrollSupport={true}

            drawShadow={true}

            flippingTime={800}

            startPage={0}

            clickEventForward={true}

            useMouseEvents={true}

            swipeDistance={30}

            showPageCorners={true}

            maxShadowOpacity={0.2}

            autoSize={false}

            onFlip={(e: any) => {
              const newPage = e.data

              setPage(newPage)
              setPageInput(String(newPage + 1))
            }}

            className="shadow-2xl"
          >

            {pages.map((num) => (
              <div
                key={num}
                className="
                  bg-white
                  flex
                  items-center
                  justify-center
                  overflow-hidden
                  p-0
                  m-0
                "
              >
                <img
                  src={`/magazine/pages/page-${num}.jpg`}
                  alt={`Magazine page ${num}`}
                  className="
                    w-full
                    h-full
                    object-contain
                    block
                  "
                />
              </div>
            ))}

          </HTMLFlipBook>

        </div>
      </div>

      {/* =========================================
          PAGE CONTROLS
      ========================================= */}
      <div
        className={`
          flex
          items-center
          gap-4
          mt-6
          ${
            isFullscreen
              ? "absolute bottom-5 z-[200]"
              : ""
          }
        `}
      >

        {/* PREVIOUS */}
        <button
          onClick={() =>
            bookRef.current
              ?.pageFlip()
              .flipPrev()
          }
          className="
            px-5
            py-2
            rounded-lg
            border
            bg-background
            shadow-md
            hover:bg-muted
            transition
          "
        >
          ← Previous
        </button>

        {/* PAGE NUMBER */}
        <div
          className="
            flex
            items-center
            gap-2
            text-sm
            text-muted-foreground
          "
        >
          <span>Page</span>

          <input
            type="number"
            min={1}
            max={32}
            value={pageInput}
            onChange={(e) =>
              setPageInput(e.target.value)
            }
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                goToPage()
              }
            }}
            onBlur={goToPage}
            className="
              w-14
              h-9
              text-center
              rounded-md
              border
              bg-background
              text-foreground
              outline-none
              focus:ring-2
              focus:ring-primary
            "
            aria-label="Enter page number"
          />

          <span>/ 32</span>
        </div>

        {/* NEXT */}
        <button
          onClick={() =>
            bookRef.current
              ?.pageFlip()
              .flipNext()
          }
          className="
            px-5
            py-2
            rounded-lg
            border
            bg-background
            shadow-md
            hover:bg-muted
            transition
          "
        >
          Next →
        </button>

      </div>

    </div>
  )
}