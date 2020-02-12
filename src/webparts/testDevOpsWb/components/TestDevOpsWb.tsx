import * as React from 'react';
import styles from './TestDevOpsWb.module.scss';
import { ITestDevOpsWbProps } from './ITestDevOpsWbProps';
import { escape } from '@microsoft/sp-lodash-subset';

export default class TestDevOpsWb extends React.Component<ITestDevOpsWbProps, {}> {
  public render(): React.ReactElement<ITestDevOpsWbProps> {
    return (
      <div className={ styles.testDevOpsWb }>
        <div className={ styles.container }>
          <div className={ styles.row }>
            <div className={ styles.column }>
              <span className={ styles.title }>Welcome to SharePoint!</span>
              <p className={ styles.subTitle }>Customize SharePoint experiences using Web Parts.</p>
              <p className={ styles.description }>{escape(this.props.description)}</p>
              <a href="https://aka.ms/spfx" className={ styles.button }>
                <span className={ styles.label }>Learn more</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
