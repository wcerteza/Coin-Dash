import HomeIcon from '@mui/icons-material/Home'
import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin'
import FolderIcon from '@mui/icons-material/Folder'
import ReceiptIcon from '@mui/icons-material/Receipt'
import HowToRegIcon from '@mui/icons-material/HowToReg'
import LoginIcon from '@mui/icons-material/Login'

export const SidebarData = [
  {
    title: 'Home',
    icon: <HomeIcon />,
    link: '/home'
  },
  {
    title: 'Coins',
    icon: <CurrencyBitcoinIcon />,
    link: '/coins'
  },
  {
    title: 'Portfolio',
    icon: <FolderIcon />,
    link: '/portfolio'
  },
  {
    title: 'Transactions',
    icon: <ReceiptIcon />,
    link: '/transactions'
  },
  {
    title: 'Sign Up',
    icon: <HowToRegIcon />,
    link: '/register'
  },
  {
    title: 'Log In',
    icon: <LoginIcon />,
    link: '/login'
  }
]
