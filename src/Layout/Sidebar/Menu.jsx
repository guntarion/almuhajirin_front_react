export const MENUITEMS = [
  {
    menutitle: 'General',
    menucontent: 'Dashboards,Widgets',
    Items: [
      {
        title: 'Pages',
        icon: 'sample-page',
        type: 'sub',
        children: [
          {
            active: false,
            path: `${process.env.PUBLIC_URL}/pages/sample-page`,
            title: 'Sample-Page',
            type: 'link',
          },
          {
            active: false,
            path: `${process.env.PUBLIC_URL}/pages/sample-page`,
            title: 'Input Muhajirin Kids',
            type: 'link',
          },
        ],
      },
      {
        title: 'Masjid Al Muhajirin',
        badge2: true,
        icon: 'support-tickets',
        type: 'sub',
        children: [
          {
            active: false,
            path: `${process.env.PUBLIC_URL}/masjid/input-muhajirin-kids`,
            title: 'Input Akitivitas M-Kids',
            type: 'link',
          },
          {
            active: false,
            path: `${process.env.PUBLIC_URL}/masjid/rekap-muhajirin-kids`,
            title: 'Rekap Aktivitas M-Kids',
            type: 'link',
          },
        ],
      },
      {
        title: 'Support Ticket',
        icon: 'support-tickets',
        type: 'sub',
        children: [
          {
            active: false,
            path: `http://support.pixelstrap.com/help-center`,
            title: 'Rise Ticket',
            type: 'link',
          },
        ],
      },
    ],
  },
];
