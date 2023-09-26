// component
import SvgColor from '../../../components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />;

const navConfig = [
  {
    title: 'dashboard',
    path: '/dashboard/app',
    icon: icon('ic_analytics'),
  },
  {
    title: 'All User',
    path: '/dashboard/all-user',
    icon: icon('ic_user'),
  },
  {
    title: 'Pending User',
    path: '/dashboard/approve-user',
    icon: icon('ic_blog'),
  },
  {
    title: 'BlockUser',
    path: '/dashboard/block-user',
    icon: icon('ic_cart'),
  },

  {
    title: 'Add Assets',
    path: '/dashboard/add-assets',
    icon: icon('ic_lock'),
  },
  // {
  //   title: 'Not found',
  //   path: '/404',
  //   icon: icon('ic_disabled'),
  // },
];

export default navConfig;
