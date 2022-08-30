import { SideBar } from './side-bar.interface';
import { TabBar } from './tab-bar.interface';

export const SIDE_BAR_TITLE: string = 'MENU';
export const HEADER_TITLE: string = 'app';
export const FOOTER_SUB_TITLE: string = '© 2020 Copyright. All rights reserved.';

export const SIDE_BARS: SideBar[] = [
    {
        slug: '/login',
        text: 'login'
    },
    {
        slug: '/address',
        text: 'Address'
    },
    {
        slug: '/drag-drop',
        text: 'DragDrop'
    },
    {
        slug: '/table',
        text: 'Table'
    },
    {
        slug: '/tree',
        text: 'Tree'
    },                
];

export const TAB_BARS: TabBar[] = [
    {
        slug: '',
        text: '',
        icon: 'home_outline',
    },
    {
        slug: '',
        text: '',
        icon: 'settings',
    },
    {
        slug: '',
        text: '',
        icon: 'delete',
    },
    {
        slug: '',
        text: '',
        icon: 'person',
    },            
]