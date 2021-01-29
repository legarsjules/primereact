import React, { Component } from 'react';
import { AppInlineHeader } from '../../AppInlineHeader';
import { ScrollTopDoc } from './ScrollTopDoc';
import { ScrollTop } from '../../components/scrolltop/ScrollTop';
import { ScrollPanel } from '../../components/scrollpanel/ScrollPanel';
import './ScrollTopDemo.scss';


export class ScrollTopDemo extends Component {
    render() {
        return (
            <div>
                <div className="content-section introduction">
                    <div className="feature-intro">
                        <AppInlineHeader changelogText="scrolltop">
                            <h1>ScrollTop</h1>
                            <p>ScrollTop gets displayed after a certain scroll position and used to navigates to the top of the page quickly.</p>
                        </AppInlineHeader>
                    </div>
                </div>

                <div className="content-section implementation">
                    <div className="card">
                        <h5>Window</h5>
                        <p>Scroll down the page to display the ScrollTo component.</p>
                        <ScrollTop />

                        <h5>Element</h5>
                        <ScrollPanel style={{width: '250px', height: '200px'}}>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Vitae et leo duis ut diam.
                                Ultricies mi quis hendrerit dolor magna eget est lorem. Amet consectetur adipiscing elit ut.
                                Nam libero justo laoreet sit amet. Pharetra massa massa ultricies mi quis hendrerit dolor magna.
                                Est ultricies integer quis auctor elit sed vulputate. Consequat ac felis donec et. Tellus orci ac auctor augue mauris.
                                Semper feugiat nibh sed pulvinar proin gravida hendrerit lectus a. Tincidunt arcu non sodales neque sodales.
                                Metus aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices. Sodales ut etiam sit amet nisl purus.
                                Cursus sit amet dictum sit amet. Tristique senectus et netus et malesuada fames ac turpis egestas.
                                Et tortor consequat id porta nibh venenatis cras sed. Diam maecenas ultricies mi eget mauris.
                                Eget egestas purus viverra accumsan in nisl nisi. Suscipit adipiscing bibendum est ultricies integer.
                                Mattis aliquam faucibus purus in massa tempor nec.
                            </p>
                            <ScrollTop target="parent" threshold={100} className="custom-scrolltop" icon="pi pi-arrow-up" />
                    </ScrollPanel>
                    </div>
                </div>
            <ScrollTopDoc />
            </div>
        );
    }
}
