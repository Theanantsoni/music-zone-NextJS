"use client";

import { CardBody, CardContainer, CardItem } from "@/components/ui/3D-card";
import courseData from "@/data/music_courses.json";

export default function Page() {
  return (
    <div className="min-h-screen bg-black py-12 pt-40">
      
      {/* Heading */}
      <h1 className="text-2xl md:text-6xl text-center font-bold mb-10 text-white">
        All Courses ({courseData.courses.length})
      </h1>

      {/* Courses Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
        {courseData.courses.map((course, index) => (
          <CardContainer
            key={course.id || index}
            className="inter-var m-2 hover:scale-105 transition duration-300"
          >
            <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full max-w-xs h-auto rounded-xl p-4 border">
              
              {/* Title */}
              <CardItem
                translateZ="50"
                className="text-lg font-bold text-neutral-700 dark:text-white"
              >
                {course.title}
              </CardItem>

              {/* Description */}
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-400 text-sm mt-2 line-clamp-2"
              >
                {course.description}
              </CardItem>

              {/* Image */}
              <CardItem translateZ="100" className="w-full mt-3">
                <img
                  src={course.image}
                  alt={course.title}
                  className="h-40 w-full object-cover rounded-lg group-hover/card:shadow-xl"
                />
              </CardItem>

              {/* Buttons */}
              <div className="flex justify-between items-center mt-6">
                
                <CardItem
                  translateZ={20}
                  as="a"
                  href="#"
                  target="_blank"
                  className="text-xs text-neutral-300 hover:text-white"
                >
                  Try now →
                </CardItem>

                <CardItem
                  translateZ={20}
                  as="button"
                  className="px-3 py-1.5 rounded-lg bg-white text-black text-xs font-semibold hover:bg-gray-200"
                >
                  Sign up
                </CardItem>

              </div>
            </CardBody>
          </CardContainer>
        ))}
      </div>
    </div>
  );
}