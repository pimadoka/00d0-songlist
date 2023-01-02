import React from 'react';
import { GithubRepositoryUrl, ICPCode } from '@/common';
import { useStyles } from './Footer.style';

import { ReactComponent as GithubIcon } from '@/assets/icon/github.svg';

export const Footer: React.FC = () => {
  const styles = useStyles();

  return (
    <footer className={styles.footer}>
      <p>
        <a className={styles.action} href={GithubRepositoryUrl} target='_blank'>
          <GithubIcon className={styles.githubIcon} />Github
        </a>
      </p>
      <p className={styles.icp}>
        <a href='https://beian.miit.gov.cn' target='_blank'>{ICPCode}</a>
      </p>
    </footer>
  );
}
