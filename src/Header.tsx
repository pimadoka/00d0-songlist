import React from 'react';
import { Styles } from './Header.style';
import AvatarImg from './assets/imgs/avatar-1.jpg';
import TitleImg from './assets/imgs/title.png';

const titleText = '凜凜蝶凜';
const navList = [
  {
    key: 'bilibili-space',
    label: 'bilibili主页',
    url: 'https://space.bilibili.com/1220317431',
  },
  {
    key: 'bilibili-live',
    label: 'bilibili直播间',
    url: 'https://live.bilibili.com/25290861',
  },
];

interface NavItemDef {
  key: string;
  content: React.ReactNode;
  url: string;
}

const NavList: React.FC<{
  list: NavItemDef[];
}> = ({
  list = [],
}) => {
  return (
    <nav className={Styles.NavList}>
      <ul>
        {list.map((item) => (
          <li key={item.key} className={Styles.NavItem}>
            <a href={item.url} target='_blank'>{item.content}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

const Title: React.FC<{
  icon: string;
  content: React.ReactNode;
}> = ({
  icon,
  content,
}) => {
  return (
    <h1 className={Styles.Title}>
      <a href='/'>
        <img className={Styles.TitleIcon} src={icon} />
        {content}
      </a>
    </h1>
  );
}

export const Header: React.FC = () => {
  return (
    <header className={Styles.Header}>
      <div className={Styles.HeaderContent}>

        <div className={Styles.HeaderSide}>
          <Title
            icon={AvatarImg}
            content={
              <img className={Styles.TitleTextImage} src={TitleImg} />
            }
          />
          <NavList list={navList.map(item => ({ ...item, content: item.label }))} />
        </div>
        
        <div className={Styles.HeaderSide}>
          {/* TODO 明暗主题 */}
          {/* TODO 国际化 */}
        </div>
      </div>
    </header>
  );
}