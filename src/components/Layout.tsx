import React from 'react'
import NavBar from './nav-bar'
import Footer from './footer'
import { ReactNode } from 'react'
import { Toaster } from './ui/toaster'



const Layout = (children: ReactNode) => {
	return (
		<>
			<Toaster />
			{/* <ScrollButton /> */}
			{/* <NavBar /> */}
			{/* <LatestOffer /> */}
			{children}
			{/* <ScrollButton /> */}
			{/* <SpeedInsights />
			<GoogleAnalytics gaId="G-XYZ" /> */}
			{/* <Footer /> */}
		</>
	)
}

export default Layout