import { Fira_Code as FontMono, Inter as FontSans } from "next/font/google"
import {Teko} from 'next/font/google'
export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
})
export const fontteko=Teko({
	subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
	variable: '--font-teko',
})

