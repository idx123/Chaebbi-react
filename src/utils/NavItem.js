import { MdOutlineFoodBank } from 'react-icons/md'
import { RiThumbUpLine } from 'react-icons/ri'
import { MdOutlineForest } from 'react-icons/md'
import {
  AiOutlineSearch,
  AiOutlineFileImage,
  AiOutlinePieChart,
} from 'react-icons/ai'

export const navItem = [
  {
    id: 1,
    path: '/record-by-image',
    name: '식단기록-이미지',
    icon: <AiOutlineFileImage />,
  },
  {
    id: 2,
    path: '/record-by-keyword',
    name: '식단기록-검색',
    icon: <AiOutlineSearch />,
  },
  {
    id: 3,
    path: '/analyze-diet',
    name: '식사패턴분석',
    icon: <AiOutlinePieChart />,
  },
  { id: 4, path: '/recommend', name: '메뉴추천', icon: <RiThumbUpLine /> },
  {
    id: 5,
    path: '/search',
    name: '음식점검색',
    icon: <MdOutlineFoodBank />,
  },
  { id: 6, path: '/community', name: '채숲', icon: <MdOutlineForest /> },
]
