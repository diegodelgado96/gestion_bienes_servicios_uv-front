import React from 'react'
import { Navigate, Route, Routes } from 'react-router'
import { useUser } from '../../hooks/useUser'
import { Providers } from '../pages/providers'
import { Report } from '../pages/report'
import { Review } from '../pages/review'
import { SearchReport } from '../pages/searchReport'
import { ServicesRequest } from '../pages/servicesRequest'
import { BodyContent } from '../bodys/bodyContent'

export const IndexRoutes = () => {

	const user = useUser()

	return (
		<Routes>
			<Route path='/*' element={<BodyContent />} />
			<Route path='/newReport' element={
				user ? (
					<Report />
				) : (
					<Navigate to="/signin" replace />
				)
			} />
			<Route path='/viewReport' element={
				user ? (
					<SearchReport />
				) : (
					<Navigate to="/signin" replace />
				)
			} />
			<Route path='/provider' element={
				user ? (
					<Providers />
				) : (
					<Navigate to="/signin" replace />
				)
			} />
			<Route path='/servicesRequest' element={
				user ? (
					<ServicesRequest />
				) : (
					<Navigate to="/signin" replace />
				)
			} />

			<Route path='/review' element={
				user ? (
					<Review />
				) : (
					<Navigate to="/signin" replace />
				)
			} />

		</Routes>
	)
}