// i18n.js
// variables
// initI18n():
// – variables
// – functions
// getTranslation(key)
// setLanguage(lang)
// getValueByKey(key)
// getDictionary()

// ===== VARIABLES =====

const translations = {
	en: {
		header: {
			home: 'HOME',
			about: 'ABOUT US',
			rooms: 'ROOMS',
			gallery: 'GALLERY',
			reviews: 'REVIEWS',
			contact: 'CONTACT',
			cta: 'Check availability'
		},
		hero: {
			title: 'Direct hotel bookings on your own website',
			description: 'Simple website that lets guests contact you without booking platforms',
			cta: 'Check availability'
		},
		about: {
			title: 'A cozy stay where comfort meets the sea',
			text__1: 'Nestled in a quiet corner of the city, just moments away from the beach, our guesthouse is a welcoming retreat for travelers seeking comfort, simplicity, and warm hospitality. Surrounded by palm-lined streets and the relaxed rhythm of coastal life, we offer a peaceful escape while staying close to everything Nha Trang has to offer.',
			text__2: 'Our rooms are designed for rest and relaxation, filled with natural light and thoughtful details that make you feel at home. Wake up to gentle morning sunshine, enjoy fresh sea air, and unwind after a day of exploring the city, the islands, and the vibrant local culture.',
			text__3: 'Whether you are visiting for a short getaway, a family holiday, or a longer stay by the sea, we focus on what matters most — cleanliness, comfort, and personal service. Our team is always happy to assist you with local tips, transportation, and recommendations to make your stay easy and enjoyable.',
			text__4: 'We invite you to experience a simple, honest, and relaxing stay — where every guest is welcomed not just as a visitor, but as part of our home.'
		},
		rooms: {
			title: 'Our Rooms',
			text: 'Our rooms are designed to provide a comfortable and relaxing stay for every guest. Whether you are traveling solo, as a couple, or with family, you will find a space that suits your needs. All rooms are clean, well-maintained, and thoughtfully equipped to make your stay easy and enjoyable.',
			standart__title: 'Standard Room',
			standart__description: 'A cozy and practical choice for travelers who value comfort and simplicity. The room features a comfortable bed, air conditioning, free Wi-Fi, and a private bathroom. Perfect for short stays and city exploration.',
			deluxe__title: 'Deluxe Room',
			deluxe__description: 'Spacious and bright, the Deluxe Room offers extra comfort for a more relaxing experience. Enjoy additional space, modern amenities, and a calm atmosphere — ideal for couples or guests planning a longer stay.',
			family__title: 'Family Room',
			family__description: 'Designed with families and small groups in mind, this room provides plenty of space and convenience. With multiple beds and a comfortable layout, it is a great option for those traveling together and looking for a home-like stay.'
		},
		reviews: {
			title: 'What Our Guests Say',
			first: {
				author: '— Sarah M., Australia',
				text: '"Great location, clean rooms, friendly staff. Would definitely stay again!"'
			},
			second: {
				author: '— Michael T., USA',
				text: '"Perfect for families. The staff went above and beyond to make our stay comfortable."'
			},
			third: {
				author: '— Linh N., Vietnam',
				text: '"Good value for money. Walking distance to the beach."'
			},
			link: 'View all reviews on Booking.com →'
		},
		booking: {
			title: 'Check room availability',
			subtitle: 'We usually reply within a few hours via WhatsApp or email',
			name: 'Your name',
			namePlaceHolder: 'John Johns',
			checkin: 'Check-in Date',
			checkout: 'Check-out Date',
			email: 'Email',
			emailPlaceHolder: 'guest@email.com',
			guests: 'Guests',
			contact: 'Contact Number',
			message: 'Message (optional)',
			messagePlaceHolder: 'Any special requests?',
			btn: 'Send booking request',
			error: 'Something went wrong',
			success__title: 'Request sent successfully',
			success__text: 'Thank you for your booking request.<br>We have received your message and will get back to you shortly to confirm availability.',
			subtitle__2: 'We usually reply within a few hours via WhatsApp or email',
			sending: 'The request is being sent'
		},
		footer: {
			title: 'Your hotel name',
			text: 'Cozy hotel near the beach in Nha Trang.<br>Direct booking with no commission.',
			title__contact: 'Contact',
			addressLabel: 'Address:',
			addressValue: '123 Beach Road, Nha Trang, Vietnam',
			phoneLabel: 'Phone:',
			emailLabel: 'Email:',
			emailValue: 'info@hotel.com',
			hoursLabel: 'Hours:',
			hoursValue: '24/7',
			location: 'Location',
			bottomFirstLine: 'This is a demo hotel website.',
			bottomSecondLine: 'I adapt it individually for each hotel.'
		},
		errors: {
			EMPTY_FIELDS: 'Fill in all the fields',
			CHECKIN_IN_PAST: 'The check-in date cannot be in the past',
			CHECKOUT_BEFORE_CHECKIN: 'The check-out date should be after the check-in date',
			SEND_FAILED: 'Failed to send request. Please try again'
		}
	},
	vn: {
		header: {
			home: 'TRANG CHỦ',
			about: 'GIỚI THIỆU',
			rooms: 'PHÒNG',
			gallery: 'PHÒNG TRƯNG BÀY',
			reviews: 'ĐÁNH GIÁ',
			contact: 'LIÊN HỆ',
			cta: 'Kiểm tra phòng trống'
		},
		hero: {
			title: 'Đặt phòng khách sạn trực tiếp trên trang web của riêng bạn.',
			description: 'Trang web đơn giản cho phép khách liên hệ với bạn mà không cần sử dụng các nền tảng đặt phòng.',
			cta: 'Kiểm tra phòng trống'
		},
		about: {
			title: 'Một kỳ nghỉ ấm cúng, nơi sự thoải mái hòa quyện cùng biển cả.',
			text__1: 'Nằm nép mình trong một góc yên tĩnh của thành phố, chỉ cách bãi biển vài bước chân, nhà nghỉ của chúng tôi là nơi nghỉ dưỡng lý tưởng cho du khách tìm kiếm sự thoải mái, giản dị và lòng hiếu khách nồng ấm. Bao quanh là những con phố rợp bóng cọ và nhịp sống thư thái ven biển, chúng tôi mang đến một kỳ nghỉ yên bình trong khi vẫn gần gũi với mọi thứ mà Nha Trang mang lại.',
			text__2: 'Các phòng của chúng tôi được thiết kế để mang lại sự nghỉ ngơi và thư giãn, tràn ngập ánh sáng tự nhiên và những chi tiết tinh tế giúp bạn cảm thấy như ở nhà. Thức dậy với ánh nắng ban mai dịu nhẹ, tận hưởng không khí biển trong lành và thư giãn sau một ngày khám phá thành phố, các hòn đảo và nền văn hóa địa phương sôi động.',
			text__3: 'Dù bạn đến đây để nghỉ dưỡng ngắn ngày, đi nghỉ cùng gia đình hay lưu trú dài ngày bên bờ biển, chúng tôi luôn tập trung vào những điều quan trọng nhất — sự sạch sẽ, thoải mái và dịch vụ chu đáo. Đội ngũ của chúng tôi luôn sẵn sàng hỗ trợ bạn với những lời khuyên hữu ích về địa phương, phương tiện đi lại và những gợi ý để kỳ nghỉ của bạn trở nên dễ dàng và thú vị.',
			text__4: 'Chúng tôi mời bạn trải nghiệm một kỳ nghỉ đơn giản, chân thành và thư giãn — nơi mỗi vị khách được chào đón không chỉ như một vị khách đến thăm, mà còn như một thành viên trong gia đình chúng tôi.'
		},
		rooms: {
			title: 'Phòng của chúng tôi',
			text: 'Các phòng của chúng tôi được thiết kế để mang đến một kỳ nghỉ thoải mái và thư giãn cho mọi khách. Cho dù bạn đi du lịch một mình, theo cặp đôi hay cùng gia đình, bạn đều sẽ tìm thấy không gian phù hợp với nhu cầu của mình. Tất cả các phòng đều sạch sẽ, được bảo trì tốt và trang bị chu đáo để giúp kỳ nghỉ của bạn dễ dàng và thú vị.',
			standart__title: 'Phòng Tiêu chuẩn',
			standart__description: 'Một lựa chọn ấm cúng và tiện dụng dành cho những du khách coi trọng sự thoải mái và đơn giản. Phòng có giường ngủ thoải mái, máy điều hòa, Wi-Fi miễn phí và phòng tắm riêng. Hoàn hảo cho những kỳ nghỉ ngắn và khám phá thành phố.',
			deluxe__title: 'Phòng Deluxe',
			deluxe__description: 'Phòng Deluxe rộng rãi và sáng sủa mang đến sự thoải mái tối đa cho trải nghiệm thư giãn. Tận hưởng không gian rộng rãi hơn, tiện nghi hiện đại và bầu không khí yên tĩnh — lý tưởng cho các cặp đôi hoặc khách có kế hoạch lưu trú dài ngày.',
			family__title: 'Phòng Gia đình',
			family__description: 'Được thiết kế dành cho gia đình và các nhóm nhỏ, phòng này cung cấp không gian rộng rãi và tiện nghi. Với nhiều giường và cách bố trí thoải mái, đây là lựa chọn tuyệt vời cho những người đi du lịch cùng nhau và tìm kiếm một kỳ nghỉ ấm cúng như ở nhà.'
		},
		reviews: {
			title: 'Khách hàng của chúng tôi nói gì',
			first: {
				author: '— Sarah M., Australia',
				text: '"Vị trí tuyệt vời, phòng sạch sẽ, nhân viên thân thiện. Chắc chắn sẽ quay lại!"'
			},
			second: {
				author: '— Michael T., USA',
				text: '"Rất phù hợp cho gia đình. Nhân viên đã nỗ lực hết mình để đảm bảo kỳ nghỉ của chúng tôi thoải mái."'
			},
			third: {
				author: '— Linh N., Vietnam',
				text: '"Giá cả hợp lý. Có thể đi bộ đến bãi biển."'
			},
			link: 'Xem tất cả đánh giá trên Booking.com →'
		},
		booking: {
			title: 'Kiểm tra tình trạng phòng trống',
			subtitle: 'Chúng tôi thường trả lời trong vòng vài giờ qua WhatsApp hoặc email.',
			name: 'Tên của bạn',
			namePlaceHolder: 'Nguyễn Văn An',
			checkin: 'Ngày nhận phòng',
			checkout: 'Ngày trả phòng',
			email: 'E-mail',
			emailPlaceHolder: 'guest@email.com',
			guests: 'Khách',
			contact: 'Số liên lạc',
			message: 'Tin nhắn (tùy chọn)',
			messagePlaceHolder: 'Có yêu cầu đặc biệt nào không?',
			btn: 'Gửi yêu cầu đặt phòng',
			error: 'Đã xảy ra lỗi',
			success__title: 'Yêu cầu đã được gửi thành công',
			success__text: 'Cảm ơn bạn đã gửi yêu cầu đặt phòng.<br>Chúng tôi đã nhận được tin nhắn của bạn và sẽ liên hệ lại với bạn trong thời gian ngắn để xác nhận tình trạng phòng trống.',
			subtitle__2: 'Chúng tôi thường trả lời trong vòng vài giờ qua WhatsApp hoặc email.',
			sending: 'Yêu cầu đang được gửi'
		},
		footer: {
			title: 'Tên khách sạn của bạn',
			text: 'Khách sạn ấm cúng gần bãi biển Nha Trang.<br>Đặt phòng trực tiếp không mất phí hoa hồng.',
			title__contact: 'Liên hệ',
			addressLabel: 'Địa chỉ:',
			addressValue: '123 Beach Road, Nha Trang, Việt Nam',
			phoneLabel: 'Điện thoại:',
			emailLabel: 'E-mail',
			emailValue: 'info@hotel.com',
			hoursLabel: 'Giờ:',
			hoursValue: '24/7',
			location: 'Vị trí',
			bottomFirstLine: 'Đây là trang web demo của một khách sạn.',
			bottomSecondLine: 'Tôi điều chỉnh thực đơn riêng cho từng khách sạn.'
		},
		errors: {
			EMPTY_FIELDS: 'Hãy điền đầy đủ thông tin vào tất cả các trường.',
			CHECKIN_IN_PAST: 'Ngày nhận phòng không được là ngày trong quá khứ.',
			CHECKOUT_BEFORE_CHECKIN: 'Ngày trả phòng phải sau ngày nhận phòng.',
			SEND_FAILED: 'Yêu cầu gửi không thành công. Vui lòng thử lại.'
		}
	}
}
let currentLang = 'en';

// ===== INIT FUNCTION =====

export function initI18n() {

	// ===== FIND ELEMENTS =====

	const elements = document.querySelectorAll('[data-i18n]');

	// ===== TEXT SELECTION FOR ELEMENTS =====

	elements.forEach((element) => {

		// ===== Find key and text values =====

		let attrName;
		const key = element.dataset.i18n;
		const text = getValueByKey(getDictionary(), key);

		// ===== Check if text exists

		if (text === undefined) {
			return;
		}

		// ===== Checking where to put the data

		if (element.dataset.i18nAttr) {
			attrName = element.dataset.i18nAttr;
			element[attrName] = text;
		} else {
			element.innerHTML = text;
		}
	});
}

export function getTranslation(key) {
	const value = getValueByKey(getDictionary(), key);

	if (value === undefined) {
		return key;
	}

	return value;
}

export function setLanguage(lang) {
	currentLang = lang;
}

function getValueByKey(dictionary, key) {
	const parts = key.split('.');
	let result = dictionary;

	for (const part of parts) {
		if (!result) {
			return undefined;
		}
		result = result[part];
	}

	return result;
}

function getDictionary() {
	return translations[currentLang];
}