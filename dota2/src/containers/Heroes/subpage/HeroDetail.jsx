import React, { Component } from "react";
import "./herodetail.scss";
import { withRouter } from "react-router-dom";

class HeroDetail extends Component {
  render() {
    const heroname = this.props.match.params.heroname;
    const info = this.props.list[heroname] || {};
    return (
      <div className="hero-detail">
        <div className="hero-detail-base clearfix">
          <img
            src={`/assets/images/heroes/${heroname}_hphover.png`}
            alt={heroname}
          />
          <span>攻击类型: {info.atk_l}</span>
          <span>定位: {info.roles_l && info.roles_l.join("-")}</span>
        </div>
        <div className="hero-detail-content">
          <div className="hero-detail-bio">
            <h4>背景故事</h4>
            <p>{info.bio}</p>
          </div>
          <hr />
          <div className="hero-detail-talent-tree">
            <h4>天赋树</h4>
            <ul class="talent_ul">
              <li className="border">
                <div class="talent-explain">50% 冷却时间减少</div>
                <div class="level-external">
                  <div class="level-interior">25</div>
                </div>
                <div class="talent-explain">+20% 精准光环攻击力</div>
              </li>
              <li className="border">
                <div class="talent-explain">+3秒 狂风持续时间</div>
                <div class="level-external">
                  <div class="level-interior">20</div>
                </div>
                <div class="talent-explain">+20 射手天赋敏捷</div>
              </li>
              <li className="border">
                <div class="talent-explain">+550 狂风距离/击退</div>
                <div class="level-external">
                  <div class="level-interior">15</div>
                </div>
                <div class="talent-explain">+25 攻击速度</div>
              </li>
              <li className="border">
                <div class="talent-explain">+5 全属性</div>
                <div class="level-external">
                  <div class="level-interior">10</div>
                </div>
                <div class="talent-explain">+20 移动速度</div>
              </li>
            </ul>
          </div>
          <hr />
          <div className="hero-detail-skills">
            <h4>技能介绍</h4>
            <p>{info.bio}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(HeroDetail);
