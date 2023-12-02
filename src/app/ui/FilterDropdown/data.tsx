import Image from 'next/image'

export type NewsType = {
  value: string
  label: JSX.Element
}
export const NEWS_TYPE: NewsType[] = [
  {
    value: 'angular',
    label: (
      <div className="flex items-center">
        <Image src="/angular.png" width={20} height={20} alt="Angular logo" className="w-6 h-6 object-contain mr-3" />
        <p className="m-0 text-gray-700 font-roboto text-base leading-6">Angular</p>
      </div>
    ),
  },
  {
    value: 'react',
    label: (
      <div className="flex items-center" data-testid="react-filter">
        <Image src="/react.png" width={20} height={20} alt="Reacts logo" className="w-6 h-6 object-contain mr-3" />
        <p className="m-0 text-gray-700 font-roboto text-base leading-6">Reacts</p>
      </div>
    ),
  },
  {
    value: 'vue',
    label: (
      <div className="flex items-center">
        <Image src="/vuejs.png" width={20} height={20} alt="Vuejs logo" className="w-6 h-6 object-contain mr-3" />
        <p className="m-0 text-gray-700 font-roboto text-base leading-6">Vuejs</p>
      </div>
    ),
  },
]
