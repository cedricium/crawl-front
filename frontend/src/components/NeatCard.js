import React, { Component } from 'react';
import styled from 'styled-components';
import '../styles/wow.css';

class DiscordCard extends Component {
    render() {
        return (
            <div>
                <div className="plx-card silver">
                    <div className="pxc-bg">
                        <style dangerouslySetInnerHTML={{__html: `
                            .pxc-bg { background-image: url(${this.props.bgimage}) }
                        `}} />
                    </div>
                    <div className="pxc-avatar">
                        <img src={this.props.avatar}></img>
                    </div>
                    <div className="pxc-stopper">
                    </div>
                    <div className="pxc-subcard">
                        <div className="pxc-title">
                            {this.props.title}
                        </div>
                        <div className="pxc-sub">
                            {this.props.subtitle}
                        </div>
                        <div className="bottom-row">
                            <div className="pxc-info">
                                <div className="flags">
                                    <span><img src="http://pollux.fun/images/flags/EN.png"/></span><span><img src="http://pollux.fun/images/flags/BR.png"/></span><span><img src="http://pollux.fun/images/flags/FR.png"/></span><span><img src="http://pollux.fun/images/flags/TR.png"/></span><span><img src="http://pollux.fun/images/flags/JP.png"/></span>
                                </div>
                                <div className="region">
                                    Global
                                </div>
                            </div>
                            <div className="links">
                                <a className="site">
                                    <i className="fas fa-globe-americas"></i>
                                </a><a className="link discordLink" uk-tooltip="DISCORD SERVER"><i class="fab fa-discord"></i></a><a class="shop" uk-tooltip="EXCLUSIVE POLLUX SHOP"><i class="fas fa-shopping-bag"> </i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

DiscordCard.defaltProps = {
    bgImage: '',
    avatar: '',
    title: 'default title',
    subTitle: 'default subtitle'
  };

export default DiscordCard;