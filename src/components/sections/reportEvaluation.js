import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { ColGray, LeftText, NotAction, TitleReport, PButton2 } from '../tools/styleContent'
import { ModalAddAction } from '../modals/modalAddAction'
import { PropTypes } from 'prop-types'



export const ReportEvaluation = (props) => {

	console.log(props.data)
	const [acciones, setAcciones] = useState([])
	const [show, setShow] = useState(false)

	const handleCloseModal = () => {setShow(false)}

	const open = () => {
		setShow(true)
	}

	useEffect(() => {
		setAcciones(props.data.acciones)
	}, [])

	const newActionR = (action) => {
		console.log(action)
	}

	return (
		<>
			<ColGray xs={12} lg={4}>
				<div style={{ height: 'auto', minHeight: '80%' }}>
					<Row xs={12}>
						<Col xs={12}>
							<TitleReport>
								<svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
									<path d="M2.625 1.3125C2.625 0.964403 2.76328 0.630564 3.00942 0.384422C3.25556 0.138281 3.5894 0 3.9375 0L17.0625 0C17.4106 0 17.7444 0.138281 17.9906 0.384422C18.2367 0.630564 18.375 0.964403 18.375 1.3125V9.84375C18.375 10.0178 18.3059 10.1847 18.1828 10.3078C18.0597 10.4309 17.8928 10.5 17.7188 10.5C17.5447 10.5 17.3778 10.4309 17.2547 10.3078C17.1316 10.1847 17.0625 10.0178 17.0625 9.84375V1.3125H3.9375V19.6875H7.875V16.4062C7.875 16.2322 7.94414 16.0653 8.06721 15.9422C8.19028 15.8191 8.3572 15.75 8.53125 15.75H10.5V21H3.9375C3.5894 21 3.25556 20.8617 3.00942 20.6156C2.76328 20.3694 2.625 20.0356 2.625 19.6875V1.3125Z" fill="#E40613" />
									<path d="M5.90625 2.625C5.7322 2.625 5.56528 2.69414 5.44221 2.81721C5.31914 2.94028 5.25 3.1072 5.25 3.28125V4.59375C5.25 4.7678 5.31914 4.93472 5.44221 5.05779C5.56528 5.18086 5.7322 5.25 5.90625 5.25H7.21875C7.3928 5.25 7.55972 5.18086 7.68279 5.05779C7.80586 4.93472 7.875 4.7678 7.875 4.59375V3.28125C7.875 3.1072 7.80586 2.94028 7.68279 2.81721C7.55972 2.69414 7.3928 2.625 7.21875 2.625H5.90625ZM9.84375 2.625C9.6697 2.625 9.50278 2.69414 9.37971 2.81721C9.25664 2.94028 9.1875 3.1072 9.1875 3.28125V4.59375C9.1875 4.7678 9.25664 4.93472 9.37971 5.05779C9.50278 5.18086 9.6697 5.25 9.84375 5.25H11.1562C11.3303 5.25 11.4972 5.18086 11.6203 5.05779C11.7434 4.93472 11.8125 4.7678 11.8125 4.59375V3.28125C11.8125 3.1072 11.7434 2.94028 11.6203 2.81721C11.4972 2.69414 11.3303 2.625 11.1562 2.625H9.84375ZM13.7812 2.625C13.6072 2.625 13.4403 2.69414 13.3172 2.81721C13.1941 2.94028 13.125 3.1072 13.125 3.28125V4.59375C13.125 4.7678 13.1941 4.93472 13.3172 5.05779C13.4403 5.18086 13.6072 5.25 13.7812 5.25H15.0938C15.2678 5.25 15.4347 5.18086 15.5578 5.05779C15.6809 4.93472 15.75 4.7678 15.75 4.59375V3.28125C15.75 3.1072 15.6809 2.94028 15.5578 2.81721C15.4347 2.69414 15.2678 2.625 15.0938 2.625H13.7812ZM5.90625 6.5625C5.7322 6.5625 5.56528 6.63164 5.44221 6.75471C5.31914 6.87778 5.25 7.0447 5.25 7.21875V8.53125C5.25 8.7053 5.31914 8.87222 5.44221 8.99529C5.56528 9.11836 5.7322 9.1875 5.90625 9.1875H7.21875C7.3928 9.1875 7.55972 9.11836 7.68279 8.99529C7.80586 8.87222 7.875 8.7053 7.875 8.53125V7.21875C7.875 7.0447 7.80586 6.87778 7.68279 6.75471C7.55972 6.63164 7.3928 6.5625 7.21875 6.5625H5.90625ZM9.84375 6.5625C9.6697 6.5625 9.50278 6.63164 9.37971 6.75471C9.25664 6.87778 9.1875 7.0447 9.1875 7.21875V8.53125C9.1875 8.7053 9.25664 8.87222 9.37971 8.99529C9.50278 9.11836 9.6697 9.1875 9.84375 9.1875H11.1562C11.3303 9.1875 11.4972 9.11836 11.6203 8.99529C11.7434 8.87222 11.8125 8.7053 11.8125 8.53125V7.21875C11.8125 7.0447 11.7434 6.87778 11.6203 6.75471C11.4972 6.63164 11.3303 6.5625 11.1562 6.5625H9.84375ZM13.7812 6.5625C13.6072 6.5625 13.4403 6.63164 13.3172 6.75471C13.1941 6.87778 13.125 7.0447 13.125 7.21875V8.53125C13.125 8.7053 13.1941 8.87222 13.3172 8.99529C13.4403 9.11836 13.6072 9.1875 13.7812 9.1875H15.0938C15.2678 9.1875 15.4347 9.11836 15.5578 8.99529C15.6809 8.87222 15.75 8.7053 15.75 8.53125V7.21875C15.75 7.0447 15.6809 6.87778 15.5578 6.75471C15.4347 6.63164 15.2678 6.5625 15.0938 6.5625H13.7812ZM5.90625 10.5C5.7322 10.5 5.56528 10.5691 5.44221 10.6922C5.31914 10.8153 5.25 10.9822 5.25 11.1562V12.4688C5.25 12.6428 5.31914 12.8097 5.44221 12.9328C5.56528 13.0559 5.7322 13.125 5.90625 13.125H7.21875C7.3928 13.125 7.55972 13.0559 7.68279 12.9328C7.80586 12.8097 7.875 12.6428 7.875 12.4688V11.1562C7.875 10.9822 7.80586 10.8153 7.68279 10.6922C7.55972 10.5691 7.3928 10.5 7.21875 10.5H5.90625ZM9.84375 10.5C9.6697 10.5 9.50278 10.5691 9.37971 10.6922C9.25664 10.8153 9.1875 10.9822 9.1875 11.1562V12.4688C9.1875 12.6428 9.25664 12.8097 9.37971 12.9328C9.50278 13.0559 9.6697 13.125 9.84375 13.125H11.1562C11.3303 13.125 11.4972 13.0559 11.6203 12.9328C11.7434 12.8097 11.8125 12.6428 11.8125 12.4688V11.1562C11.8125 10.9822 11.7434 10.8153 11.6203 10.6922C11.4972 10.5691 11.3303 10.5 11.1562 10.5H9.84375ZM16.4062 21C17.6246 21 18.793 20.516 19.6545 19.6545C20.516 18.793 21 17.6246 21 16.4062C21 15.1879 20.516 14.0195 19.6545 13.158C18.793 12.2965 17.6246 11.8125 16.4062 11.8125C15.1879 11.8125 14.0195 12.2965 13.158 13.158C12.2965 14.0195 11.8125 15.1879 11.8125 16.4062C11.8125 17.6246 12.2965 18.793 13.158 19.6545C14.0195 20.516 15.1879 21 16.4062 21ZM15.5584 14.6291L16.4062 15.4783L17.2541 14.6291C17.3774 14.5059 17.5445 14.4367 17.7188 14.4367C17.893 14.4367 18.0601 14.5059 18.1834 14.6291C18.3066 14.7524 18.3758 14.9195 18.3758 15.0938C18.3758 15.268 18.3066 15.4351 18.1834 15.5584L17.3342 16.4062L18.1834 17.2541C18.3066 17.3774 18.3758 17.5445 18.3758 17.7188C18.3758 17.893 18.3066 18.0601 18.1834 18.1834C18.0601 18.3066 17.893 18.3758 17.7188 18.3758C17.5445 18.3758 17.3774 18.3066 17.2541 18.1834L16.4062 17.3342L15.5584 18.1834C15.4351 18.3066 15.268 18.3758 15.0938 18.3758C14.9195 18.3758 14.7524 18.3066 14.6291 18.1834C14.5059 18.0601 14.4367 17.893 14.4367 17.7188C14.4367 17.5445 14.5059 17.3774 14.6291 17.2541L15.4783 16.4062L14.6291 15.5584C14.5059 15.4351 14.4367 15.268 14.4367 15.0938C14.4367 14.9195 14.5059 14.7524 14.6291 14.6291C14.7524 14.5059 14.9195 14.4367 15.0938 14.4367C15.268 14.4367 15.4351 14.5059 15.5584 14.6291Z" fill="#E40613" />
								</svg>
								Evaluación de Reporte
							</TitleReport>
						</Col>
					</Row>
					<Row xs={12}>
						<LeftText xs={12}>
							Acciones realizadas
						</LeftText>
					</Row>
					{
						acciones.length > 0 ? (
							acciones.map(accion => {
								return (
									<Row xs={12} key={accion.idAccion}>
										{
											accion.estado === 'RECHAZADO' ? (
												<LeftText xs={12}>
													<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
														<circle cx="10" cy="10" r="10" fill="#FFE1E1" />
														<path d="M6.05017 6.09657C5.67737 6.45587 5.67737 7.03842 6.05017 7.39772L8.75029 10L6.05017 12.6023C5.67737 12.9616 5.67737 13.5441 6.05017 13.9034C6.42298 14.2627 7.02742 14.2627 7.40023 13.9034L10.1003 11.3011L12.8005 13.9034C13.1733 14.2627 13.7777 14.2627 14.1505 13.9034C14.5233 13.5441 14.5233 12.9616 14.1505 12.6023L11.4504 10L14.1505 7.39772C14.5233 7.03841 14.5233 6.45588 14.1505 6.09657C13.7777 5.73728 13.1733 5.73726 12.8005 6.09657L10.1003 8.69886L7.40023 6.09657C7.02742 5.73728 6.42298 5.73727 6.05017 6.09657Z" fill="#E40613" />
													</svg>
													{accion.accion}
												</LeftText>
											) : (
												accion.estado === 'APROBADO' ? (
													<LeftText xs={12}>
														<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
															<g clipPath="url(#clip0_1548_354)">
																<path d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z" fill="#D8E9DE" />
																<path fillRule="evenodd" clipRule="evenodd" d="M14.9895 6.18646C15.2381 6.43505 15.238 6.83809 14.9894 7.08666L8.23735 13.8381C7.98876 14.0867 7.58574 14.0867 7.33717 13.8381L4.18644 10.6874C3.93785 10.4388 3.93785 10.0358 4.18644 9.78719C4.43502 9.5386 4.83806 9.5386 5.08664 9.78719L7.78729 12.4878L14.0893 6.18641C14.3379 5.93784 14.7409 5.93786 14.9895 6.18646Z" fill="#72A17E" />
															</g>
															<defs>
																<clipPath id="clip0_1548_354">
																	<rect width="20" height="20" fill="white" />
																</clipPath>
															</defs>
														</svg>
														{accion.accion}
													</LeftText>
												) : (
													accion.estado === 'PENDIENTE' ? (
														<LeftText xs={12}>
															<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
																<circle cx="10" cy="10" r="10" fill="#FBF2D7" />
																<path d="M8.25923 13.5741C8.25923 14.3616 8.89764 15 9.68516 15C10.4727 15 11.1111 14.3616 11.1111 13.5741C11.1111 12.7866 10.4727 12.1482 9.68516 12.1482C8.89764 12.1482 8.25923 12.7866 8.25923 13.5741Z" fill="#E8C358" />
																<path d="M11.1111 5.39992C11.1111 4.62677 10.4727 4 9.68516 4C8.89764 4 8.25923 4.62677 8.25923 5.39992V9.526C8.25923 10.2992 8.89764 10.9259 9.68516 10.9259C10.4727 10.9259 11.1111 10.2992 11.1111 9.526V5.39992Z" fill="#E8C358" />
															</svg>
															{accion.accion}
														</LeftText>
													) : (
														<></>
													)
												)
											)
										}
									</Row>
								)
							})) :
							(
								<NotAction>No se ha realizado ninguna acción, para este reporte.</NotAction>
							)
					}
					<ModalAddAction
						showModal={show}
						handleCloseModal={handleCloseModal}
						/* handleConfirmSubmit={handleConfirmSubmit} */
						newActionR = {newActionR}
						type = {props.data.idReporte}
					/>

				</div> {
					props.data.rol === 'ADMIN' && (
						<>
							<PButton2 onClick={open}>
								Agregar Tarea
							</PButton2>
						</>
					)}
			</ColGray>
		</>
	)
}

ReportEvaluation.propTypes = {
	data: PropTypes.object.isRequired,
}