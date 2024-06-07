'use client'

import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
const STEPS = [
    {
        name : "Step 1: Add your image",
        description : 'Choose a PNG, JPG, or JPEG image to upload',
        url : '/upload'
    },
    {
        name : "Step 2: Customize your design",
        description : 'Make the case yours',
        url : '/design'
    },
    {
        name : "Step 3: Summary",
        description : 'Review your design and place your order',
        url : '/preview'
    }
]
const Steps = () => {
    const pathName = usePathname()
    return (
        <ol className="rounded-md bg-white lg:flex lg:rounded-none  lg:border-x lg:border-gray-200">
            {STEPS.map((step, index) => {
                const isCurrent = pathName.endsWith(step.url)
                const isCompleted = STEPS.slice(index+1).some((step) => pathName.endsWith(step.url))
                const imgPath = `/snake-${index+1}.png`

                return <li key={step.name} className="relative overflow-hidden  lg:flex-1">
                    <div>
                        <span className={cn('absolute left-0 top-0 h-full w-1 bg-zinc-400 lg:bottom-0  lg:top-auto lg:h-1 lg:w-full',{
                            'bg-zinc-700 ': isCurrent,
                            'bg-primary' : isCompleted
                        })} aria-hidden='true'/>

                        <span className={cn(index!==0 ? 'lg:pl-9' : '',
                            'flex items-center px-6 py-4 text-sm font-medium'
                        )}>
                            <span className="flex-shrink-0 ">
                                <img src={imgPath} alt="image" className={cn('flex items-center justify-center h-20 w-20 ', {
                                    'border-none': isCurrent,
                                    'border-x-zinc-700' : isCompleted
                                })} />
                            </span>
                            <span className='ml-4 h-full mt-0.5 flex min-w-0 flex-col justify-center'>
                  <span
                    className={cn('text-sm font-semibold text-zinc-700', {
                      'text-primary': isCompleted,
                      'text-zinc-700': isCurrent,
                    })}>
                    {step.name}
                  </span>
                  <span className='text-sm text-zinc-500'>
                    {step.description}
                  </span>
                </span>
              </span>
                                      {/* separator */}
              {index !== 0 ? (
                <div className='absolute inset-0 hidden w-3 lg:block'>
                  <svg
                    className='h-full w-full text-gray-300'
                    viewBox='0 0 12 82'
                    fill='none'
                    preserveAspectRatio='none'>
                    <path
                      d='M0.5 0V31L10.5 41L0.5 51V82'
                      stroke='currentcolor'
                      vectorEffect='non-scaling-stroke'
                    />
                  </svg>
                </div>
              ) : null}

                    </div>

                </li>
            })}
        </ol>
    )
}

export default Steps;