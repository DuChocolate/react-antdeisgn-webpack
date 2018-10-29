export default [
    { key: '/', title: '首页', icon: 'mobile' },
    {
        key: '/app/ui', title: '组件', icon: 'scan',
        subs: [
            { key: '/app/ui/buttons', title: '按钮' },
            { key: '/app/ui/icons', title: '图标' },
            { key: '/app/ui/affixs', title: '固钉' },
            { key: '/app/ui/breadcrumbs', title: '面包屑' },
            { key: '/app/ui/dropDowns', title: '下拉菜单' },
            { key: '/app/ui/menus', title: '导航菜单' },
            { key: '/app/ui/paginations', title: '分页' },
            { key: '/app/ui/stepsBar', title: '步骤条' },
            { key: '/app/ui/spins', title: '加载中' },
            { key: '/app/ui/modals', title: '对话框' },
            { key: '/app/ui/notifications', title: '通知提醒框' },
            { key: '/app/ui/tabs', title: '标签页' },
            { key: '/app/ui/banners', title: '轮播图' },
            { key: '/app/ui/wysiwyg', title: '富文本' },
            { key: '/app/ui/drags', title: '拖拽' },
            { key: '/app/ui/gallery', title: '画廊' },
            { key: '/app/ui/map', title: '地图' }
        ]
    },
    {
        key: '/app/imag', title: '图片上传', icon: 'camera',
        subs: [
            { key: '/app/imag/uploadImags', title: '图片裁剪' },
            { key: '/app/imag/dragDrop', title: '组件拖拽' }
        ]
    }
];