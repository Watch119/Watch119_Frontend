import { BsFillBarChartFill, BsFillChatDotsFill } from 'react-icons/bs';
import { HiUserGroup } from 'react-icons/hi';
import { AiFillDatabase, AiTwotoneSetting } from 'react-icons/ai';
import { TbPackageExport } from 'react-icons/tb';
import { DiGoogleCloudPlatform } from 'react-icons/di';
import { FaAws } from 'react-icons/fa';
import { VscAzure } from 'react-icons/vsc';

export const links = [
  {
    title: '메뉴',
    links: [
      {
        name: '대시보드',
        value: 'dashboard',
        icon: <BsFillBarChartFill />,
      },
      {
        name: '사용자 관리',
        value: 'user',
        banRole: ["user"],
        icon: <HiUserGroup />,
      },
      {
        name: '스택',
        value: 'stack',
        icon: <AiFillDatabase />,
      },  
      {
        name: '장애 보고서',
        value: 'log',
        icon: <BsFillChatDotsFill />,
      },
      {
        name: '설정',
        value: 'setting',
        icon: <AiTwotoneSetting />,
      },
    ],
  },

  {
    title: 'MSA 링크',
    links: [
      {
        name: 'Amazon AWS',
        value: 'AWS',
        icon: <FaAws />,
      },
      {
        name: 'Microsoft Azure',
        value: 'Azure',
        icon: <VscAzure />,
      },
      {
        name: 'Naver Cloud',
        value: 'Ncp',
        icon: <VscAzure />,
      },
    ],
  }
];