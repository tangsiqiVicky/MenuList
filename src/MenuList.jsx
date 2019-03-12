import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './index.scss'

export default class MenuList extends Component {
    static displayName = 'MenuList';

    static propTypes = {
        value: PropTypes.string
    };

    static defaultProps = {
        value: 'string data'
    };

    constructor(props) {
        super(props);
        this.state = {
            menuList:[{
                childrenList: null,
                icon: "",
                id: 1,
                order: 1,
                fixed: true,
                name: '城市运行实况',
                text: '市中心气象台：大风黄色预警',
                time: '10:20',
                url: '/cityOnline',
                noread: 10
            }, {
                childrenList: null,
                icon: "",
                id: 2,
                order: 2,
                fixed: true,
                name: '我关注的业务指标',
                text: '区社治办:今日城市管理工作情况',
                time: '10:10',
                url: '/myFollow',
                noread: 0
            }, {
                childrenList: null,
                icon: "",
                id: 3,
                order: 3,
                fixed: false,
                name: '网格管理',
                text: '1号网格： 垃圾问题上报',
                time: '09:55',
                url: '/cityOnline',
                noread: 100
            }, {
                childrenList: null,
                icon: "",
                id: 4,
                order: 4,
                fixed: false,
                name: '道路监督',
                text: '全市道路运行良好',
                time: '09:45',
                url: '/municipalRoadNetwork',
                noread: 0
            }, {
                childrenList: null,
                icon: "",
                id: 5,
                order: 5,
                fixed: false,
                name: '安全生产',
                text: '4月全市各企业巡视正常',
                time: '09:42',
                url: '/safeProduction',
                noread: 0
            }, {
                childrenList: null,
                icon: "",
                id: 6,
                order: 6,
                fixed: false,
                name: '行业执法',
                text: '本月查处违法企业6家',
                time: '10:20',
                url: '/comprehensiveEnforcement',
                noread: 5
            }, {
                childrenList: null,
                icon: "",
                id: 7,
                order: 7,
                fixed: false,
                name: '应急指挥',
                text: '亭林暴雨最新动态',
                time: '09:15',
                url: '/emergencyCommand',
                noread: 0
            }, {
                childrenList: null,
                icon: "",
                id: 8,
                order: 8,
                fixed: false,
                name: '水体保护',
                text: '4月查处污染企业1家',
                time: '09:15',
                url: '/waterProtection',
                noread: 0
            }, {
                childrenList: null,
                icon: "",
                id: 9,
                order: 9,
                fixed: false,
                name: '防汛防台',
                text: '入夏各单位做好防汛防台的文件',
                time: '09:05',
                url: '/floodPrevention',
                noread: 0
            }, {
                childrenList: null,
                icon: "",
                id: 10,
                order: 10,
                fixed: false,
                name: '面向法人',
                text: '面向法人面向法人面向法人',
                time: '08:45',
                url: '/faceLegal',
                noread: 0
            }, {
                childrenList: null,
                icon: "",
                id: 11,
                order: 11,
                fixed: false,
                name: '面向自然人',
                text: '面向自然人面向自然人面向自然人面向自然人',
                time: '08:42',
                url: '/faceNature',
                noread: 0
            }, {
                childrenList: null,
                icon: "",
                id: 12,
                order: 12,
                fixed: false,
                name: '综治治理',
                text: '综治治理综治治理综治治理综治治理',
                time: '08:42',
                url: '/comprehensiveControl',
                noread: 0
            }, {
                childrenList: null,
                icon: "",
                id: 13,
                order: 13,
                fixed: false,
                name: '电子走访',
                text: '入夏各单位做好防汛防台的文件',
                time: '08:42',
                url: '/electronicVisit',
                noread: 0
            }, {
                childrenList: null,
                icon: "",
                id: 14,
                order: 14,
                fixed: false,
                name: '基层党建',
                text: '基层党建基层党建基层党建',
                time: '08:42',
                url: '/baseParty',
                noread: 0
            }, {
                childrenList: null,
                icon: "",
                id: 15,
                order: 15,
                fixed: false,
                name: '经济指标',
                text: '经济指标经济指标经济指标经济指标经济指标经济指标经济指标经济指标经济指标经济指标经济指标经济指标经济指标经济指标经济指标',
                time: '07:42',
                url: '/cityOnline',
                noread: 0
            }]
        };
    }

    render() {
        return (
            <div>
                {
                    this.state.menuList.length ?
                        <ul className="menu-ul">
                            {
                                this.state.menuList.map((item, index) => {
                                    return
                                    <Link to={item.url}>
                                        <li key={index} className="menu-li">
                                            <div className="menu-icon">
                                                <Badge count={item.noread}>
                                                    <img src={item.icon} className="menu-img"/>
                                                </Badge>
                                            </div>
                                            <div className="menu-detail">
                                                <span className="menu-title">{item.name}</span>
                                                <span className="menu-text">{item.text}</span>
                                            </div>
                                        </li>
                                    </Link>
                                })
                            }
                        </ul>:''
                }
            </div>
        );
    }
}

