/**
 * Add this JSON array is used to store all the words and it is read by an init function to load them up for the App.
 * This is populated in a page file: all-words.
 */
let allWords =
[
	{
		"category": "Number",
		"cname": "数字",
		"words": [
			{ "chinese": "一", "english": "One", "pinyin": "Yī", "phrase": ["一个", "一对", "一心一意"], "sentence": "你拍一，我拍一，一个小孩开飞机。", "image": "images/chars/number/number-1.png" },
			{ "chinese": "二", "english": "Two", "pinyin": "Ér", "phrase": ["二人", "二斤", "合二为一"], "sentence": "你拍二，我拍二，两个小孩梳小辫儿。", "image": "images/chars/number/number-2.png" },
			{ "chinese": "三", "english": "Three", "pinyin": "Sān", "phrase": ["三只", "三天", "三心二意"], "sentence": "你拍三，我拍三，三个小孩吃饼干。", "image": "images/chars/number/number-3.png" },
			{ "chinese": "四", "english": "Four", "pinyin": "Sì", "phrase": ["四把", "四个月", "四平八稳"], "sentence": "你拍四，我拍四，四个小孩写大字。", "image": "images/chars/number/number-4.png" },
			{ "chinese": "五", "english": "Five", "pinyin": "Wǔ", "phrase": ["五辆", "五台", "五谷丰登"], "sentence": "你拍五，我拍五，五个小孩烤白薯。", "image": "images/chars/number/number-5.png" },
			{ "chinese": "六", "english": "Six", "pinyin": "Liù", "phrase": ["六条", "六周", "六六大顺"], "sentence": "你拍六，我拍六，六个小孩烧牛肉。", "image": "images/chars/number/number-6.png" },
			{ "chinese": "七", "english": "Seven", "pinyin": "Qī", "phrase": ["七匹", "七头", "七上八下"], "sentence": "你拍七，我拍七，七个小孩穿新衣。", "image": "images/chars/number/number-7.png" },
			{ "chinese": "八", "english": "Eight", "pinyin": "Bā", "phrase": ["八张", "八回", "四面八方"], "sentence": "你拍八，我拍八，八个小孩吹喇叭。", "image": "images/chars/number/number-8.png" },
			{ "chinese": "九", "english": "Nine", "pinyin": "Jiǔ", "phrase": ["九块", "九磅", " 八九不离十"], "sentence": "你拍九，我拍九，九个小孩看杨柳。", "image": "images/chars/number/number-9.png" },
			{ "chinese": "十", "english": "Ten", "pinyin": "Shí", "phrase": ["十双", "十章", "十拿九稳"], "sentence": "你拍十，我拍十，十个小孩不挑食。", "image": "images/chars/number/number-10.png" },
			{ "chinese": "百", "english": "Hundred", "pinyin": "Bǎi", "phrase": ["三百", "百姓", "百发百中"], "sentence": "十个十就是一百。", "image": "images/chars/number/number-100.png" },
			{ "chinese": "零", "english": "Zero", "pinyin": "Líng", "phrase": ["零钱", "零碎", "七零八碎"], "sentence": "计数，我们从零开始。", "image": "images/chars/number/number-0.png" }
		]
	},
	{
		"category": "Color",
		"cname": "颜色",
		"words": [
			{ "chinese": "红", "english": "Red", "pinyin": "Hóng", "phrase": ["红色", "红豆", "万紫千红，"], "sentence": "天上飘着一个红气球。", "image": "images/chars/AP1GczNReJLe0O6Oe5DPqSm00uWG75CxBP6oaPtZFeh6PYXFkB3zUTWJ2quhI-8eArH1QGDU3DVvUD6sXhbd0eM3FDJ9D6Z0o-i-VjF9jjQiqA9b5y5HyoJV54g4KfumqkYBJ3vHA3AISBmARPFnU9e-C-iWMg=w1024-h1024-s-no-gm?authuser=0" },
			{ "chinese": "橙", "english": "Orange", "pinyin": "Chéng", "phrase": ["橙色", "橙子", " 橙黄桔绿"], "sentence": "街上开过来一辆橙色的汽车。", "image": "images/chars/AP1GczOjWvfBOtmJMzMz8UFAKIC20WcVzgUlJA1L6FAPH4YkiFHXKEeb32K2SEUYU_HsgHGtUWIKpVkAWb-R6ZMr9hczV977z-5tvYJ7wmqzDBVgcGhKD4XkxQ-1lKmHX0zs5S2JarhFYizvRiifWAaGOB-syw=w1024-h1024-s-no-gm?authuser=0" },
			{ "chinese": "黄", "english": "Yellow", "pinyin": "Huáng", "phrase": ["黄色", "蛋黄", "黄梁一梦"], "sentence": "屋里有一扇黄色的大门。", "image": "images/chars/AP1GczPMbpiCreibsnFwS5_SsL333fLa0oxa4N9ixDlk-Zey7LLs35WngBSvWQreRDrYI_gH4WatPbUSXC0rJjFskSMH9yefPJf8Ffrm4zfM_4xiUdfKNKYTeiAMrIGhmFWBWezmqLq4-nUJaVWKf4IrQh-zwQ=w1024-h1024-s-no-gm?authuser=0" },
			{ "chinese": "绿", "english": "Green", "pinyin": "Lǜ", "phrase": ["绿色", "绿叶", "绿水青山"], "sentence": "在绿色的草地上，小姑娘正玩得高兴。", "image": "images/chars/AP1GczPN2Pw8G4w7kRC--kcmRu_bDktP3gzlBR-ymSHMcIdNmnAmsTBC6IiCd5LjHblTGFfIaFjWd_LcSD_pWt1xFKot4OaYhj95CUnDou9NCpx3W7c6VMs7n2cGxIRGRA_QlK7xF0Hs67GVBhv8gqrX0_oxag=w1024-h1024-s-no-gm?authuser=0" },
			{ "chinese": "青", "english": "Cayan", "pinyin": "Qīng", "phrase": ["青色", "青年", "青出于蓝"], "sentence": "一个青色的大球浮在空中。", "image": "images/chars/AP1GczPkhJRpFZmvfNv0JL8fAVAeHQhV1K5CDD0IJLf8HWmQ6V5S7rhTubChrDYPvQph8By4BxfN9uLoLZy1USLLxzwbU7mIy9V4kWuasZ48-nVdB6tFDnFZd-vGb-f6uK2NGhARPlAOeSus3fDuo9OID0lcGA=w1024-h1024-s-no-gm?authuser=0" },
			{ "chinese": "蓝", "english": "Blue", "pinyin": "Lán", "phrase": ["蓝色", "蓝天", "青出于蓝"], "sentence": "一辆深蓝色的火车开进站来。", "image": "images/chars/AP1GczPeFJsElfEA4lOyck2Avt-UWNWDAZLZpqyFVyyjhitn8JFg1pH6WwttxSs5c8MQ1w7c5mowoezQ0O_f0A9LCLpXSVTKuNOAq2ryl82cohILgnCkc5QY5UIz02fplQw1IQ1kzo5bCkuV2BJPEts5ZmaYag=w1024-h1024-s-no-gm?authuser=0" },
			{ "chinese": "紫", "english": "Purple", "pinyin": "Zǐ", "phrase": ["紫色", "紫红", "紫气东来"], "sentence": "那个紫色的冰棍为什么飘在空中？", "image": "images/chars/AP1GczM2wFx03poA5cjzx1UQmCQg2vDGL8NnwUug7WNRGP9MEm3_jAO4TK0VsXpqtMt0DUv_eYEpL7DVLc6CFfRZaqRRI_3zKizb8vkm4GA8xX9KipJ4N_x4Cr8KLxrAigtVB8nod9m9kK8IKSy9cYaLm6Ol5A=w1024-h1024-s-no-gm?authuser=0" },
			{ "chinese": "粉", "english": "Pink", "pinyin": "Fěn", "phrase": ["粉色", "花粉", "粉墨登场"], "sentence": "那边有一大堆粉色的气球。", "image": "images/chars/AP1GczOFARYhkyBkdFksa6WAzzyDa-SYKJbqsbsX071MRuuntdje6BKclecgAZ2rX5Jys2K2giZVIqAAbD4ibjbYYzRnF4V_EEYEfKSk3MGUiT_dSa7Xqsv9xiS9MBnk4Z6tSHerTNwZaRyp1j_KTVjlV_O9DA=w1024-h1024-s-no-gm?authuser=0" },
			{ "chinese": "黑", "english": "Black", "pinyin": "Hēi", "phrase": ["黑色", "黑天", "黑白分明"], "sentence": "桌上有一支特别大的黑蜡笔。", "image": "images/chars/AP1GczOKRRrkEx8rEVl6rU5A_N0VML4aYy-E5-jCZIgi39EnxvZa6oMSpyZbqeMqFJ1-dzhzHKXeX70gzjlI9k4zV7_wNkFrkK9CGm4GIkK1BrcA0EGeium_or3bzUxIBmOXLF6uz9vRlj4Bc473fPGWHmZ6CA=w1024-h1024-s-no-gm?authuser=0" },
			{ "chinese": "白", "english": "White", "pinyin": "Bái", "phrase": ["白色", "白天", "一青二白"], "sentence": "一大团白纸升在了空中。", "image": "images/chars/AP1GczMn01v0Uj64viHczfK-Bs3Ezw51MOMHF3F7bz-svhc2IuMYy24kBA0EvBghx8vOvn2JNONdB1E6bsKODGJc5Vr87oTY0W2MLlOkREqiKDHImhhaCQay64CGNSvBYNDBULt6EzfseVkRJCZL7ZnQ_kW8qA=w1024-h1024-s-no-gm?authuser=0" },
			{ "chinese": "灰", "english": "Gray", "pinyin": "Huī", "phrase": ["灰色", "灰尘", "灰头土脸"], "sentence": "一个小女孩和一幢灰色的房子。", "image": "images/chars/AP1GczNH8rYYkQMfXBz5iR0SMMk24_0BbCoow7KJHHg5o6vpOAZ6wYDABFZYE3UHMdZnK6gBeN-KFWf5zfiFu7HnLKIrSnUUSCpVQie7PW_V3HdVeROVfS5_7Qg8mELROpAnMcWnV-_zM1k3n9z2CryP5AMvXQ=w1024-h1024-s-no-gm?authuser=0" },
			{ "chinese": "虹", "english": "Rainbow", "pinyin": "Hóng", "phrase": ["彩虹", "气贯长虹"], "sentence": "雨后，天上有一道彩虹。", "image": "images/chars/AP1GczNTmLtTXjiBlrt2lJuq351eeUAvrFdKd9n-HfhihxpWmbuAZwTtC_eF8_8BBj7IoFiIVJVYaOG9UAOacmHqp55xbV4Z--cgCyb5sMVE_ktrOnLqyVohVJhSFPLQaM-BxxQjasHT0LQobbMNjy3aMNbzMA=w1024-h1024-s-no-gm?authuser=0" }
		]
	},
	{
		"category": "Shape",
		"cname": "形状",
		"words": [
			{ "chinese": "点", "english": "Point", "pinyin": "Diǎn", "phrase": ["一点", "点头", " 蜻蜓点水", ""], "sentence": "纸上画了四个黑点。", "image": "images/chars/AP1GczPG6gADIFPqE53k_aOwJaC0-k2FkRUcONfilnplh9Mt7XarE9FRL8jLJB_ykWIk-T87g6Z_BGIJQhDsa-BFBxe9kvrZ8lHT0xldcP0dk13hiKPVtFFF-eZCxHlse9DihFLh-Rpbc5z2iP2Z3z6J8qIMMw=w911-h811-s-no-gm?authuser=0" },
			{ "chinese": "线", "english": "Line", "pinyin": "Xiàn", "phrase": ["红线", "线条", "引线穿针"], "sentence": "那是三条棕色的直线。", "image": "images/chars/AP1GczPSzhyDom1jl0l3_Ni4ah-jZL7WXXAOYRaIhwlv13v47vFfajfLaxxRppDiAg8zC2Smlqqzph3T5vbORqDLNCvcJ6oW45ZxthN4E2PelXaK7SdobSFMorTEnbC7YC2PPNHmCmOJSM_GXV_kv7ZqPWHL5A=w1355-h1355-s-no-gm?authuser=0" },
			{ "chinese": "边", "english": "Side", "pinyin": "Biān", "phrase": ["五边形", "边界", "一望无边"], "sentence": "那是个棕色的五边形。", "image": "images/chars/AP1GczNrlrAet9CzyLCXgqgBz3hXZcc_XEVrTMgqApFwwv43k7dYtpBFkUTWrLo07ovulU_159kQZu_WvvGdd7zV_ggpHDmSMBzDHy3XW7u_t7UAnZizn_OOfoSyig4GiX9wNCH3iQCK36rFPv2J--LOkZgECA=w1355-h1355-s-no-gm?authuser=0" },
			{ "chinese": "角", "english": "Angle", "pinyin": "Jiǎo", "phrase": ["三角形", "角度", "转弯抹角"], "sentence": "图中有三个三角形。", "image": "images/chars/AP1GczMZLAJEPAoxK1pGxFigTlLpI1pl33gadmGL5nssXZSoNuLmsNO8BD2_XEJ7gCsgDj082LqYlgTVA1J3zdImrH5foCmB9IXPrxp51DLnhmZHv22mURRRu4OXU1TnXvyvItgdDLHap8MklIkQi1FvVQ7r2A=w1355-h1355-s-no-gm?authuser=0" },
			{ "chinese": "园", "english": "Circle", "pinyin": "Yuán", "phrase": ["圆形", "圆脸", "自圆其说"], "sentence": "你可以看见一个紫色的圆形。", "image": "images/chars/AP1GczP06cGg-TbZQT1RVlECK1nez3ZrL_XDQ-f_KOlvwp5fFBAZrfOCc_111RbISu-38PluzgpXK6PUbPwevZyfFbk0mszA851c-Qqxx3gQuVaK4wblS6ITCByLkFabMBOzuTlNOEXAhZWNhYbzIGIT27AvSg=w1355-h1355-s-no-gm?authuser=0" },
			{ "chinese": "方", "english": "Square", "pinyin": "Fāng", "phrase": ["方形", "方块", "四面八方"], "sentence": "地上放着两个方块。", "image": "images/chars/AP1GczN3roTn8UU2KPi4L9lMPhLLe3zcbDVWi3a3r0ocjzvz2fGwUZoWVsC0R5hGwkn0PpvjKGAqpW8bs-OrPARpzZ4GMRcLU6CQj2nSrqvpMhPfc4QcM---3lVD4fMhB2lbtWzuXCrSG5d9PsFz5Rm7v2TFUQ=w1355-h1355-s-no-gm?authuser=0" },
			{ "chinese": "矩", "english": "Rectangle", "pinyin": "Jǔ", "phrase": ["矩形", "规矩", "循规蹈矩"], "sentence": "墙上靠着两块矩形的木板。", "image": "images/chars/AP1GczO7kdtQ3RoYnu5WODdeHZis4CuKB8R3myv9GYXDIIIFZ7AgzkfOYRiFyiZ4rVO0FzH6YtyLQUgL53bErqFNHnWQpWhRah5wM_p5TCSKSUemXRUx3-iXl2nyXygkBqdjkCZHi7tPhf5rFNMHMACYBv_W-Q=w1355-h1355-s-no-gm?authuser=0" },
			{ "chinese": "星", "english": "Star", "pinyin": "Xīng", "phrase": ["星形", "星星", "月明星稀"], "sentence": "那里有三颗星星。", "image": "images/chars/AP1GczN1E9zuOuHvX5c22-fN7yrQ76HB9OCRy8y9oT2KAF2zm27m6qDXpLbRwLZIOSEiR5e_MLw4OhW5m2rVkcj5XZsKsIJr8K1S46rufxjbmFglN0N129QoIK29sae1HjDl1MtZ3wP0Q7ziqYp2Gx1E1M03QQ=w1355-h1355-s-no-gm?authuser=0" },
			{ "chinese": "花", "english": "Flower", "pinyin": "Huā", "phrase": ["花形", "花边", "鸟语花香"], "sentence": "我看到了两朵粉色的花。", "image": "images/chars/AP1GczO_QZh0gR50APSGMsyvcNN-GwC_coh6Zp5mwIFC9Fl9VqOhJoipQWme_B9lvfVvfsyUDgBoA1B_fXVOJmOLP0rKm1cUNJNBtBb7dtjF7nmDAdSGT8vGZtH8LvAhYY7nDWa_HdvjJ8wNcmHiPZX2MueCSA=w1355-h1355-s-no-gm?authuser=0" }
		]
	},
	{
		"category": "Family",
		"cname": "家庭",
		"words": [
			{ "chinese": "爸", "english": "Father", "pinyin": "Bà", "phrase": ["爸爸"], "sentence": "爸爸的爸爸叫爷爷，爸爸的妈妈叫奶奶。", "image": "images/chars/AP1GczOpH-eM1jLeQjWGJnr-V3_IsCQqcneVNhnSajUgwUavsHz0OpbZlEfOXrH9rOdBwwpCjESUnHABzAZSX5u4TadDPkT7uPx2umA36kvoZjFEIQVUxf2J7HRTYTBM86wa4kh1HMTC55vu0x-3PRIBk217TA=w1023-h1024-s-no-gm?authuser=0" },
			{ "chinese": "妈", "english": "Mother", "pinyin": "Mā", "phrase": ["妈妈"], "sentence": "妈妈的爸爸叫外公，妈妈的妈妈叫外婆。", "image": "images/chars/AP1GczOMhLIaxiRN_XXPELZqqW_1JaOvYRhOFHP26rwNrgilPeQJzsXgIMBCsWRuygjst_-9u3ummyjGGOOTeyH55N2ANC-OZiYJUxE2-vm5ku7DP6hFYu9cUx-XAIvnBw0ny6fDqNkVCgQ0FBfkQNw8k94b4g=w1023-h1024-s-no-gm?authuser=0" },
			{ "chinese": "爷", "english": "Grandpa", "pinyin": "Yé", "phrase": ["爷爷", "爷们儿"], "sentence": "爸爸的爸爸叫爷爷，爸爸的妈妈叫奶奶。", "image": "images/chars/AP1GczN8d8I8eUIVo5bMBMYp4NB3w6pyUVTq5b7wILCHxpexPKYrNBNpsL9lCIZRhBtuqws8yUmPHvlf2mtWRTL-Oe9qX85ryPlA59P43JpwLxV9y_8Cmiv4K0UdGNzaRPh6lcMdneKGxbW0EyVxEzvOz0a8hw=w1023-h1024-s-no-gm?authuser=0" },
			{ "chinese": "奶", "english": "Grandma", "pinyin": "Nǎi", "phrase": ["奶奶", "牛奶"], "sentence": "爸爸的爸爸叫爷爷，爸爸的妈妈叫奶奶。", "image": "images/chars/AP1GczNBdPdqZuv1fR2-jrbY5VsVmtES9WxM3P4YR19Ff-pEV2ft_q23Qe8noMBoDaU8CzlD3lTWE1jeCflqvu-VvZXFJWFJhqNWLu5wJAVkfaa4o7WzF80UmyE5FLBZIWpizUahE-eGae8M0w6H7hG9nKmPsA=w1023-h1024-s-no-gm?authuser=0" },
			{ "chinese": "公", "english": "Grandpa", "pinyin": "Gōng", "phrase": ["外公", "天公"], "sentence": "妈妈的爸爸叫外公，妈妈的妈妈叫外婆。", "image": "images/chars/AP1GczPadmBeKRVKvAfJw8WBYuHfGg8Oz0ZUHmbFl_kiu_H8vXjlwPPWL4wXllKVVZS86kSiGHaYgxSHVpJL25Nl0Gmz39pHRTIfI8YuRFFc6bTrGnrJmsx6jeE5O9qyM21s6QyRX2OmgQc_1cN_u8JxlizivA=w1024-h1024-s-no-gm?authuser=0" },
			{ "chinese": "婆", "english": "Grandma", "pinyin": "Pó", "phrase": ["外婆", "婆婆"], "sentence": "妈妈的爸爸叫外公，妈妈的妈妈叫外婆。", "image": "images/chars/AP1GczPwoVYubm1syx_tlv2B4wbUfVJn6szLcVPBVknZ7WAwl6XeNxXqTGmvC3WuQXfq3oxjEUgyi4UxszerdgEv5QBerk5JfP3eEpJfsJeROPSZyRWIk_3EYV_ChrxtcMmabczF01PK2yA3TBTNPXKIADRhFQ=w1024-h1024-s-no-gm?authuser=0" },
			{ "chinese": "姐", "english": "Sister", "pinyin": "Jiě", "phrase": ["姐姐", "姐妹"], "sentence": "我是姐姐，我的弟弟叫胡文思。", "image": "images/chars/AP1GczNo5CTseBym_bJgiaG3uWE0VeSRYOfQmL9gLDPnPCMCt9mFJwM4Z6JJJZKifB_xEZZOWjUSbIKxc-k1FqHSAe17gBlpELEohO7LBsvhLgC5WGcZQFtyAtOxHh6NyXMQWVYwkzKetajIsihqeXH-1NYwXQ=w1341-h1339-s-no-gm?authuser=0" },
			{ "chinese": "弟", "english": "Brother", "pinyin": "Dì", "phrase": ["弟弟", "兄弟"], "sentence": "我是弟弟，我的姐姐叫胡清。", "image": "images/chars/AP1GczO-HsPw9Mc8V7CGEUjFeWCTEfCU6oJk3F8wqML1ErzEbDbdypIuVOyfWfBAYdxurURqA_hpfq1IKVWKQ2fknh16YhAXtzo8pQo9TcZm_AUEwg0qDGnkIWA7XHDMc3tjitLwpgWBwuLKS6neviVK0Fn23A=w1339-h1339-s-no-gm?authuser=0" },
			{ "chinese": "哥", "english": "Brother", "pinyin": "Gē", "phrase": ["哥哥", "哥们"], "sentence": "我没有哥哥，因为我是老大。", "image": "images/chars/AP1GczN0FtCNGddNzFTC3v-hHoXHf4NGZw_nlk7tD0sq2FGNfdlhfaEdAwEQ06KbwP8bp68MgLaeJwFWpQv_oBaPxF8UlReacTSiVp85v5dFqLBhANA50N2xKweQ44Rd21qFL-gF8XRIPka7am5eHwocctnkTA=w1024-h1024-s-no-gm?authuser=0" },
			{ "chinese": "妹", "english": "Sister", "pinyin": "Mèi", "phrase": ["妹妹", "姐妹"], "sentence": "我没有妹妹，但我有个弟弟。", "image": "images/chars/AP1GczMMFQ20lmsbSZvpylOCK2JyyTuAkV0YzGTj_KyyEM_M73LH7Z8Gcrh5p_w0iqXvSpbHQI0TBJ7X_q7zzF1fRLoPCoUuhOsuMUC6geoNN6-YLgMGC079JO1VfV6XE1HoKiJn4tACKX-lQWYHkdXrMk8FcQ=w1024-h1024-s-no-gm?authuser=0" }
		]
	},
	{
		"category": "Body",
		"cname": "身体",
		"words": [
			{ "chinese": "手", "english": "Hand", "pinyin": "Shǒu", "phrase": ["双手", "手术", "手足之情"], "sentence": "我有一双手。", "image": "images/chars/AP1GczO6x7_7G6fAiIvmYXNr3PrhVigtOmDermJ4WiuJLwQmWzkLurhTD0at8FZbzClHRVT2LIDu1OWF8DBWzp2aSIE8FdNRNVUwxp66nUtyccwXFi85dx_33XGWTVph4l1AmjNvWBhoCRybZ2jM1AXPjv-Lmg=w1024-h1024-s-no-gm?authuser=0" },
			{ "chinese": "脚", "english": "Foot", "pinyin": "Jiǎo", "phrase": ["脚趾", "脚下", "手脚并用"], "sentence": "弟弟有两只大脚。", "image": "images/chars/AP1GczNUQRRkRXfOaUWgF5vXu2CtzQguFNS86K0mqXIKzWswrlqeVaQQlRJLBEP6N8D219sq2rdtWrtq6cEzkUmxx6z7XYSYcJxaDETjM4Eows6LE54TNmDfPI831FgNf7T_zTxVWL4X7RxHQrY7-EPfidy7DA=w1024-h1024-s-no-gm?authuser=0" },
			{ "chinese": "头", "english": "Head", "pinyin": "Tóu", "phrase": ["头发", "头疼", "头重脚轻"], "sentence": "他们的头发全湿了。", "image": "images/chars/AP1GczMxgq_VwCg-X3ah61w8J9Hhv5wV1T-72ltqyjjvavYKEH3Ah91J7qQE1O63ax1rZK9OId0TSEd61zH7KeXEYXXsAtBDA5-F6-amItJdK25bHKP1qy-I27VWdui9DgxgVy6nToUQFyoVgelNKFcIzukYyw=w1024-h1024-s-no-gm?authuser=0" },
			{ "chinese": "脸", "english": "Face", "pinyin": "Liǎn", "phrase": ["洗脸", "脸色", "愁眉苦脸"], "sentence": "刷牙、洗脸，然后照照镜子。", "image": "images/chars/AP1GczPZ79nR6iAn4YTSx3XupK_AJFEapFbnK200b96KVynsRoejofGM0XkiQk10ka5zn521c4cVINKbnRYJsWs0K-3xLKtNTLM5zidaI5kKtEE9zOtl8qUBprftE7OE7aC7F6moYtg0JiL5_CGYCVoAP3kEJA=w1024-h1024-s-no-gm?authuser=0" },
			{ "chinese": "眼", "english": "Eye", "pinyin": "Yǎn", "phrase": ["眼睛", "闭眼", "手疾眼快"], "sentence": "她有一双大眼睛。", "image": "images/chars/AP1GczOLPcbApYQhjTb_iG4hlfVytkr_UqzvobEabWfq2nAbvklVsV1lgUI0hWjO1WEsJ9GfQvlomADrMelc4gnynfGqIG6D5wDffB3FDkS68WbDsoyslIkNE9So8IelNgC0d5EGn8IHqF3tpBaPVZgAooeFbA=w1024-h1024-s-no-gm?authuser=0" },
			{ "chinese": "嘴", "english": "Mouth", "pinyin": "Zuǐ", "phrase": ["张嘴", "壶嘴", "七嘴八舌"], "sentence": "她张开嘴笑了。", "image": "images/chars/AP1GczPAoi7zbE3XqNj_Dw5OgDSLzGgMQpWRuTzMYRK7T0k9fzj4ZTV_LtzOQM-0B8iJq5I9JI5PiFGecSnfsn_TRnQbH638jZxNsz0cPd27k4JxPwYoSVRa9XeV2B5KRCmxNFx6BdBWUvx73QNQXq-VqbD1aQ=w1024-h1024-s-no-gm?authuser=0" },
			{ "chinese": "舌", "english": "Tongue", "pinyin": "Shé", "phrase": ["舌头", "舌尖", "张口结舌"], "sentence": "天热，小狗把舌头伸了出来。", "image": "images/chars/AP1GczPmOb2pKAk7qYIU3wdnWlQVccch2PGWp_2Vloiov1pPeB3evgBBuixpRzO61zALEMYCkS1pFY2lGDowW56aZh2_r6kGCuKqbzxhlDUnuaTObwskH1eFC7CaXdJ8wlL0DP7pjQE4Ww-qAbHCre8LTcmBjQ=w355-h355-s-no-gm?authuser=0" },
			{ "chinese": "牙", "english": "Teeth", "pinyin": "Yá", "phrase": ["牙齿", "门牙", "虎口拔牙"], "sentence": "他掉了一颗门牙。", "image": "images/chars/AP1GczMXX81yR6KcDhfgh2GSgasnRQVxAc1ZT7mhPOmIoGol2641QuvdkhJ_dkS2jkKVH0Q1WggrRLbaI3rycZZtGtuoOxk_l8YcLu-9TIMdsA3A5xfgUZckDBKNYL8kpRmDqKaMCc_G-nXGyycl22XgbdQFvQ=w902-h823-s-no-gm?authuser=0" },
			{ "chinese": "鼻", "english": "Nose", "pinyin": "Bí", "phrase": ["鼻子", "鼻尖", "嗤之以鼻"], "sentence": "大象有一条很长的鼻子。", "image": "images/chars/AP1GczMI7j0aaXrHjVx_s82C0UMQFGGjpZE2DLxNhvCYxMQGs8Zbo913BnlgV_iRF8YgwGh_6B8fbimVP_X7FE9hmq_3N79hqioLwEAKg9k0N0dcqRmQME5GfloFyXcVe3LGCVVzduRZNv9jmBA6MUVe-epJng=w454-h454-s-no-gm?authuser=0" },
			{ "chinese": "眉", "english": "Eyebrow", "pinyin": "Méi", "phrase": ["眉毛", "眉眼", "扬眉吐气"], "sentence": "她有两条细长的眉毛。", "image": "images/chars/AP1GczNHCqogxp773JVjELJ68ZuQmNixMO-HmO_ZdgJmYq4Zf4-9h_9pSusD12N_O3N8pv8fiatRsVPKLvTR2uHSwPd87637KCIi7IVoJa89Rh6FhdTUOcK7jgCDF9zDXCUweepuis5jZqgojkIHnH3qba2lWQ=w845-h845-s-no-gm?authuser=0" },
			{ "chinese": "发", "english": "Hair", "pinyin": "Fā", "phrase": ["头发", "长发", "千钧一发"], "sentence": "我有一头很长的黑发。", "image": "images/chars/AP1GczOz5kxLG-QhW3vMkU-EFK7CHpRIX_GtkJH2QYNy2QeCDXXDxZdKHONBJ9VSt6CNwTspCuJ82Qe_P5R5VkLshVdnEwlRJxFXKyL2ZEZwPGkzlhMMlZEXwoW1ZANs8oXRkMucjN5Ac8oJalm0PFcuuXkf0g=w594-h594-s-no-gm?authuser=0" },
			{ "chinese": "肚", "english": "Du", "pinyin": "Dù", "phrase": ["肚子", "腿肚子", "牵肠挂肚"], "sentence": "一大腕面条，把肚子吃饱了。", "image": "images/chars/AP1GczPmgrU-7lw8l1kjQC7A7xsxGKl47ukeNN0pSX_DICKHGhDJ_cV2w-yjrjJ6Vs7Fv1FBEduRnlV-t6hIHzja-H-2M-SZbWCAI_modf50G9fI4VEK8T1FLyw1W79JCGl6SaU-B2MNSSfDFtXFjXTHD1ABsw=w1024-h1024-s-no-gm?authuser=0" },
			{ "chinese": "臂", "english": "Arm", "pinyin": "Bì", "phrase": ["手臂", "长臂猿"], "sentence": "他很高，手臂很长。", "image": "images/chars/AP1GczMdcTVx_QpXS4co62Ri1P-KfnPp6ucyg3gpRfpdZ-0DECCXocAyHvIFjkSvWyPnSDc_RBZ0wQJiUHOL0NOImwZE0a0nXNNjih24fSk4UfqMgm6wM9vQ7c4Nk0CnSEBKYhPYscF1GOL4kbmyzIN7BaPrPA=w1024-h1024-s-no-gm?authuser=0" },
			{ "chinese": "腿", "english": "Leg", "pinyin": "Tuǐ", "phrase": ["大腿", "桌子腿", "花拳绣腿"], "sentence": "长颈鹿脖子很长，还有四条大长腿。", "image": "images/chars/AP1GczMT_4NWG644mtJyq9qm1rkbtf45vr_ibaagxHJaEOAsKptBFGL50_yEbIMwdZXMztMwrlMSHskILwpKAjOjLr30MJAGwyQ2uEfjoWNQUEuzlvp08XUSta3LvrrKuYumzMmpHT5vOAZJOoqesXFVeMZFQw=w603-h603-s-no-gm?authuser=0" },
			{ "chinese": "屁", "english": "Butt", "pinyin": "Pì", "phrase": ["屁股", "放屁"], "sentence": "他一屁股坐在沙发上。", "image": "images/chars/AP1GczPhRtBjl9LhOlr0m5vYv4rcFTy6yqVTw3BNyIavrYnQ8NsKShmJQc_U-Tx1tGrh-J58LL7Yhg_wpiivYUBqXQcdtMDH378i42OwzNC73qRSKse1C7n5ecPeF8MtWI9pxsKjM3ArKMG33FbAaNoCJpzHlg=w374-h374-s-no-gm?authuser=0" }
		]
	},
	{
		"category": "Nature",
		"cname": "自然",
		"words": [
			{ "chinese": "天", "english": "Sky", "pinyin": "Tiān", "phrase": ["天空", "明天", "天下太平"], "sentence": "今天的天气真好。", "image": "images/chars/AP1GczNEgDlmjBaL9CrMrhXmrgXXZEzBmMQOep-dNgOWmuBPxeb_eRO3CHH7cLm7QYZLvpbDRY9M45ngUDKyufWEQenAwptuIhQlOMlamdwiDYXF5E6ZGTX9oYVlFRq6_pQwV0HsGgsgKdY6dpk2A84QJ03SGg=w1292-h1292-s-no-gm?authuser=0" },
			{ "chinese": "地", "english": "Earth", "pinyin": "Dì", "phrase": ["土地", "地下", "地广人稀"], "sentence": "地上长满了草。", "image": "images/chars/AP1GczNTYQlZBSjB5fMmEnD4gNchlo8XIVDNUCR0mfgJBahtLNT0tZD0MIoVABLP4ZPBPRSno-uImlWJeAEeth9rg_hr-39v53dTOOA-U4wWtGIuB_k5Yqcw16xPgfQMEHFvEWui48m-JtkGTD2mxmDJE-ZJzA=w1292-h1292-s-no-gm?authuser=0" },
			{ "chinese": "阳", "english": "Sun", "pinyin": "Yáng", "phrase": ["太阳", "阳光", "阳春白雪"], "sentence": "早上，太阳从东边升起来。", "image": "images/chars/AP1GczPW9ddtKbomN4YL7Q6TZ3nHjwDrRwUN7MH3GaTQfRTp_GnUbg_yMlsChHnMvKmU5vKU_jk4trrWcc4ldxPzurArdqQxyaRl5XgXq6F4C6tP1iYEDlS9RhsoN_qZEBrqY_x97sKbz1Y45NX-D7_etHHJqg=w573-h573-s-no-gm?authuser=0" },
			{ "chinese": "月", "english": "Moon", "pinyin": " Yuè", "phrase": ["月亮", "一个月", "日月星辰"], "sentence": "每个月有一天晚上，月亮特别圆。", "image": "images/chars/AP1GczNhjv4GBxUK5VWDHsY1biaJ3aTMWnPZwm7FolS0wxawWghsBu9qgRaQeiNVfBPVpXmEmtkC7hshuU-NVF7-UVPTIAogj3EPAcZTicKi3lxaAezlvxmSXvEAjdfgyGaLBQD_yXffv_U2KKt6tJNOBd83PQ=w910-h910-s-no-gm?authuser=0" },
			{ "chinese": "星", "english": "Star", "pinyin": "Xīng", "phrase": ["星星", "明星", "星罗棋布"], "sentence": "夜里，天上有好多星星。", "image": "images/chars/AP1GczMsRNQSoFzHjbLr95iMGNo4hG4JaeWVkTsLc51oAjM5itohmUlzsrw6CuKuhAeQEw_t97MoyVHXyJbbESVOFpdjJSCLE4nQEtD6q7LegeOITGC_iueOmGrp960aIcNpTXZI2yuHt1ioQhFuyBa-tkyJiA=w1320-h1320-s-no-gm?authuser=0" },
			{ "chinese": "云", "english": "Cloud", "pinyin": "Yún", "phrase": ["云彩", "白云", "风云变幻"], "sentence": "蓝天上有几朵白云。", "image": "images/chars/AP1GczNKaAWAzYt3D7ILGwesv9klPEfCsrxmYwFuezu0ag6JZMrZq24NkdohhV1OD5g6-Ho81Tqm6nYAQbAtqec0xIRDMDFe2-znGqu4fkt_LGVvFUHpitSRHANPy7xjWgJ-nc5F1EKEU_JueKOpW6K_zRUdWw=w1292-h1292-s-no-gm?authuser=0" },
			{ "chinese": "风", "english": "Wind", "pinyin": "Fēng", "phrase": ["刮风", "风雨", "风调雨顺"], "sentence": "大风把树都吹弯了。", "image": "images/chars/AP1GczMD62nCZzIgWGuc-Fh9XA_fPGt34WqoyT7o3uffPOOWsaZisZaby1WL0LGCTxPjuvpk9A6Ypl4ifW0rEEJgJElLl8sdWviNy6Y8P5lu1HY4MrNBLefCkyOxEF0o7_WOwdK29jhLnRPDrpG2XwZvbHjTLg=w1292-h1292-s-no-gm?authuser=0" },
			{ "chinese": "雨", "english": "Rain", "pinyin": "Yǔ", "phrase": ["下雨", "雨水", "雨过天晴"], "sentence": "外面下着小雨，空气很潮湿。", "image": "images/chars/AP1GczOcc1sHD5nqUBsZldu5dThhDSn-kTarSm80Ylt_cUECOOLt8I7iXxjb3ZlsX0v4Dtpi9Uwweq2wjP7ZoYTUI8Sbg3G3OFoFvcE2WX-ayNkZsU4yF40R8YAFjDxMIAqXPW39ayGnNiP3nXAm8pxIBOON1g=w1292-h1292-s-no-gm?authuser=0" },
			{ "chinese": "雪", "english": "Snow", "pinyin": "Xuě", "phrase": ["雪花", "雪崩", "雪上加霜"], "sentence": "我们在院子里堆了个雪人。", "image": "images/chars/AP1GczPpme2fyL58jCZdBAfVbfANP3mllWWqX0m1cRqbMcoddogZ94N8bViObBt4-K9P76kTy6BnaTkYobfMFo_oMxVBBD1N04jGKfvqA4QBsCTvmcFJNcVhNkUp3EXfJMFzGVH2ygCWENYD2CG5mBGedSYYMA=w1292-h1292-s-no-gm?authuser=0" },
			{ "chinese": "金", "english": "Metal", "pinyin": "Jīn", "phrase": ["黄金", "金色", "点石成金"], "sentence": "金子是黄色的。", "image": "images/chars/AP1GczMmhyrrxcX7UcmNjGxgZ2waXY-e-my6A_3KNL_N7VyYlwAuZhCLCQ762jYYfIzm_9wz2QejH0fI1RXBAD6ggbzUer63oQghX-fg4AGtQ0CFmWQ_Pm5ZIdGsb2G7pG0sJuRIluaBIxlxdb3xdBBJIealkQ=w1292-h1292-s-no-gm?authuser=0" },
			{ "chinese": "木", "english": "Wood", "pinyin": "Mù", "phrase": ["木头", "树木", "草木皆兵"], "sentence": "这张桌子是用木头做的的。", "image": "images/chars/AP1GczOL77tLL6dcsQQfUWgLM6JeI--cCSXTLMoiWij-e0Y5jRMh0GhujBR5if_oUwpRVU1PtlVBHzemhlB5fe3d4baaFt1Wedu22p4eXO5_lGZWcnDKkcrXx7SkDvp2Sv_WJpFCDAnfHosoqp5GrdtRlA99uA=w1292-h1292-s-no-gm?authuser=0" },
			{ "chinese": "水", "english": "Water", "pinyin": "Shuǐ", "phrase": ["喝水", "水瓶", "山高水远"], "sentence": "刚刚下完雨，到处都是水。", "image": "images/chars/AP1GczOt1E-Y32pLqZ2WMeB8ZdsxXDCd86bj5FQ_vN_c4hFSNpxPKjPm-qbN_TIfBLHeoPWq-s_WUIyj7cdjVpu91fn_IOfjWjh86ZYBNuwEZo4xhz7q3eT0c-usDHnoP4WKwOzM7L3RenmfExBSnvVvDRrcnA=w1292-h1292-s-no-gm?authuser=0" },
			{ "chinese": "火", "english": "Fire", "pinyin": "Huǒ", "phrase": ["火柴", "火车", "水火不容"], "sentence": "把火点上，咱们开始烤肉了。", "image": "images/chars/AP1GczOdJnuZXGtv-TKAq5yra3vBTkmwoKk2OtzErKVKO45DEVxt6HRFTTSLuX-2LmmrVQ9vOHRXoWtn0Ry-eH7a7jcjmbZDqwW98eqyc6ExIXcBPkKWPazv94nDlKrpwBAyjfskPBW4cN4iWVMQFKARHojnmQ=w1292-h1292-s-no-gm?authuser=0" },
			{ "chinese": "土", "english": "Dirt", "pinyin": "Tǔ", "phrase": ["土地", "尘土", "土生土长"], "sentence": "树下有一大堆土。", "image": "images/chars/AP1GczPENWKKhyLRT4_Tpje96vUHan_iuLtv1ivAnceVYyi1BUpjB7uwGFv5FieannOaof86gjAJ9THkq4X-mmg7BL1-FeNIZi7BEJiKkYWFoJLZ-oCMy3psZRcl0-PWbYn7djWzwkOR_XfvSdYHfZp4ShmhbA=w1292-h1292-s-no-gm?authuser=0" }
		]
	},
	{
		"category": "Food",
		"cname": "食物",
		"words": [
			{ "chinese": "米", "english": "Rice", "pinyin": "Mǐ", "phrase": ["米饭", "米粉", "无米之炊"], "sentence": "今天中午吃米饭。", "image": "images/chars/AP1GczOhLT9H_6F4kcgTIqCbbMV2CjSduyuqgGvKWA7g-yMpticoi6QzB9bWh_25kRa597i0aFzu9mrC1qxMFCHOGhUvwUjMys5ALh3nWJy9cEihoKFIHhCqMP7fKFs1dQHpcjgS5gicLFObR2RMeRf9nDPVMw=w1316-h1316-s-no-gm?authuser=0" },
			{ "chinese": "面", "english": "Bread", "pinyin": "Miàn", "phrase": ["面包", "面条", "面红耳赤"], "sentence": "刚刚烤好的面包，很好吃。", "image": "images/chars/AP1GczMz9H9NcHwMyRCIsjy-oOA9fz0zOi9cGrCRLTUA_tDQcWS-G8gh_fmjOOpFU1gXtoBokzJ_GFnP0TNitPBHerdzsZcIgTAYYTLcyZLQyQR8t2pdK8z1NwGm_UdoCtKutr77e6tF6Mywhwe9_xPKyb_AJg=w1314-h1314-s-no-gm?authuser=0" },
			{ "chinese": "糖", "english": "Sugar", "pinyin": "Táng", "phrase": ["白糖", "糖果", "糖衣炮弹"], "sentence": "别吃太多的糖，对牙齿不好。", "image": "images/chars/AP1GczNRUmwAll4pQXkGvReXhg9y1xj_-UnNcfCAbbgHJW38qQxtGQX7PQop1w-csCHJ0BmNrlS60B7ibuDSlUv2svN86ME87jyyv7CyVQxz195B77c3srflzR57wy-TISFNlomUzo8d1kL5vKgLqD1etpesQw=w1314-h1314-s-no-gm?authuser=0" },
			{ "chinese": "奶", "english": "Milk", "pinyin": "Nǎi", "phrase": ["牛奶", "豆奶", "奶声奶气"], "sentence": "你每天早上喝牛奶吗？", "image": "images/chars/AP1GczN45fVRPfOFwE8lcBeyWWt12OiFz6ubGp8gW1mSwdB6G33NODPllYnFKdL_6XRQ2ym9mIL_afiamULVnYyuxrbn_NZqXDFARcNHs-YS-kD6kYcsJoY_i0WA-UKG1ExhzzRK5x_VFF3mnTxlF_emR5weDw=w1230-h1230-s-no-gm?authuser=0" },
			{ "chinese": "菜", "english": "Vegetable", "pinyin": "Cài", "phrase": ["蔬菜", "做菜", "面有菜色"], "sentence": "要吃肉，也要吃蔬菜和水果。", "image": "images/chars/AP1GczOH-7zcCi4PDPeqLutxmVb6QWX5ZFg3S_wqCyIXhZ72d4ztFPQTYIdJ5qn6UinNntpJXBvaMcNcuBHgMP2joXZ4IUgT8vFN9axo6lAj1q9WAh-QJ5NscLx0Hmyj_fme7hAp7uBdnDK_Lt4FqvN8R2zPug=w1314-h1314-s-no-gm?authuser=0" },
			{ "chinese": "果", "english": "Fruit", "pinyin": "Guǒ", "phrase": ["水果", "果实", "前因后果"], "sentence": "桌子上摆的水果有苹果，香蕉和葡萄。", "image": "images/chars/AP1GczMaLhsBtsRO_RjfsIZmXXAKZT7vmj36xIHH1mFLMMVrGyrOY8bMfYETdqNAFyM5sTKHvxPGydPNCVq386mCrulgmlL_fgn3AGppED5lgz57_q6E77getMIWWxcgaoVe26yvXX0ZMBLIkXEEXddP3y83HA=w1314-h1314-s-no-gm?authuser=0" },
			{ "chinese": "肉", "english": "Meat", "pinyin": "Ròu", "phrase": ["鸡肉", "牛肉", "心惊肉跳"], "sentence": "今天的晚饭有肉，也有菜。", "image": "images/chars/AP1GczPVlqqrYOqNKObSExIBNy23VBINj8rGK7nW7vHQLL32RAcjZvg_1DAxKWTasm5mvPI5-X4BP6PuIy-kT8U_zKoTlLCSJVDhU5IbGCSR_19ly0J3m0zvg4z6FK5yp_gz6M8B1O5GGrO8ZFFlAW8WA-r4vw=w1314-h1314-s-no-gm?authuser=0" }
		]
	},
	{
		"category": "Tableware",
		"cname": "餐具",
		"words": [
			{ "chinese": "刀", "english": "Knife", "pinyin": "Dāo", "phrase": ["刀子", "剪刀", "一刀两段"], "sentence": "桌上放着好几把刀。", "image": "images/chars/AP1GczNstD7gsfi5juJTdEcTH9DJSwzXJcLC5zL8EP_-R_AYa5Mat9g6PDa--YMz-A-79WY7BacNqqWno3d5dO6ZmzuXMRecfj2hufCELyKr5eS7g7EiKSLqRWsDWDzHNr2C72VGXmcETNKLbLmzOJ0AAe3BHA=w1311-h1311-s-no-gm?authuser=0" },
			{ "chinese": "叉", "english": "Fork", "pinyin": "Chā", "phrase": ["叉子", "钢叉", "四仰八叉"], "sentence": "那里有三把叉子。", "image": "images/chars/AP1GczOejD7ohmdst2Zq0aCqiczGEEqFiOiBO-TZWbpWahn7rkFUVqFwGBTZGP14FIawk6F4pErCg6nOfba8zC2akuopzrFeWPIX4HOVSJIvYnblh_7QUniQaHPJa1XbOafte79YUX7aAf6PxCL7yphaMXtvRg=w1311-h1311-s-no-gm?authuser=0" },
			{ "chinese": "勺", "english": "Spoon", "pinyin": "Sháo", "phrase": ["汤勺", "瓷勺", "一勺烩"], "sentence": "喝汤的时候，要用勺子。", "image": "images/chars/AP1GczMaNNcr0N8lw-ihI8H6GzlV4SpWODVE2xJyHYvRAjdcVOZZ4WmsxesKMvC3lMhRv5qGGicIFGnDiM6zxdA8oB3xTSITbO3l7vM6j4i3wfEePHNs_4pV79Hth-qhB8-JiI5UZL9G1X4lhashIuoeF_lieg=w1311-h1311-s-no-gm?authuser=0" },
			{ "chinese": "筷", "english": "Chopstick", "pinyin": "Kuài", "phrase": ["筷子", "竹筷"], "sentence": "三双竹筷子和两双木筷子。", "image": "images/chars/AP1GczP0bwsTLrWdoFql5_zwEr0RxpaGO23WBkYuMvUtHcKg2Rbu-FN1tE3MDnFxvnZpYWo7P7OZd9FJ_b0-zI4I6D3Z_I9GMHJKyH9Pvmvi7CuRt9imLfpmFYrNE-QfqZZkvx-zI0idl8bNeD5mw1uHSlMmug=w1311-h1311-s-no-gm?authuser=0" },
			{ "chinese": "碗", "english": "Bowl", "pinyin": "Wǎn", "phrase": ["饭碗", "大碗", "一碗水端平"], "sentence": "我们家有瓷碗和木碗。", "image": "images/chars/AP1GczNcGetGNUegGDeCMIhToKWkOifbaEMhdy6IaT2s9rBR-P4rBrcGj9IW2czsvi4eEg6-RFOUvOkCvQcp9y3dUqvkpenT79ZjDAa2RJRnT4jsIwBOkOBAs6tEOv0uFeHJRj-M9OmEF0EZaqvi9zkh8NBFJw=w1311-h1311-s-no-gm?authuser=0" },
			{ "chinese": "盘", "english": "Plate", "pinyin": "Pán", "phrase": ["盘子", "算盘", "杯盘狼藉"], "sentence": "饭桌上有盘子，还有碗。", "image": "images/chars/AP1GczNNxR-QAK2iXimA0FdS7-xXj97m0yff7qURLUUVgCWeZ0MQjvBg34Bt1jX7_6S1-LzSL5nA67RvLLsNW-1UcZ4WYzsRu7fiHdhqcAbDPi1vnGs2mmDwcdWKZjpm5xJVOEoFiFv05ZGTLxscUKC9QVH51A=w1311-h1311-s-no-gm?authuser=0" },
			{ "chinese": "锅", "english": "Pot", "pinyin": "Guō", "phrase": ["铁锅", "炒菜锅", "一锅端"], "sentence": "晚上我们熬了一锅粥。", "image": "images/chars/AP1GczMbBPD-y9tiFa7uT_qfuX8D9GdW2iaUOlBG_utAw7pG_UPf5Y-AvWbFyBauiBOeJs5tiEmRhNEpcnVCzXFXqnZJsHgwRSYsP-9c2a3ZPF8IbkJbJO4NpkymrpDZjWYrfoU_kBuc31qhFg8l7u9RqThdvg=w1311-h1311-s-no-gm?authuser=0" },
			{ "chinese": "瓶", "english": "Bottle", "pinyin": "Píng", "phrase": ["瓶子", "水瓶", "守口如瓶"], "sentence": "出去玩的时候，带上两瓶水。", "image": "images/chars/AP1GczPfPfG7KfxxCB9pXNDbp2tNd4JG9TxgOcRZOx58j1vwzWOAPBoWl5uQGa1bqcFov6mAhHeHSZ_gmJstx47DUaKssTn7SqwPlSgSCPUbt_6_7Py5c-rZSxS6Ov9TioCiC29kupTdxlVxSfNaRYBEGa6U5Q=w1311-h1311-s-no-gm?authuser=0" },
			{ "chinese": "杯", "english": "Cup", "pinyin": "Bēi", "phrase": ["杯子", "酒杯", "杯水车薪"], "sentence": "口渴了吧，先喝杯水。", "image": "images/chars/AP1GczPMNaJKfFXDwwv36j9cheaFfonQ4cwDLAAJCvWizPTtTnZff0PlFn0c9UoMUtn2mO48wBjm2fODBDzIogL-c7MlaYzrj_Ndi3HrQF3Da6cc0QOt1LZOu10fTJGCb3H5u-ZZwHbGjCrjkLgG3ODAKz1yCg=w1311-h1311-s-no-gm?authuser=0" },
			{ "chinese": "纸", "english": "Napkin", "pinyin": "Zhǐ", "phrase": ["纸巾", "餐巾纸", "白纸黑字"], "sentence": "请递给我一张餐巾纸。", "image": "images/chars/AP1GczNpSUNEh4TyLDdaIWlhTJ-l1Aflj-8n_99uY-4T0uL4wF9iv_2SYQP5bFfG81U68zqQv3thctSUYPTu9YGIdq4sWOE26XqFQ-DN4Ase6Nm2dYxwOpLHegpdBBtqUDheLNtuSPtMvMUgxhnQu1I89UYNrg=w1311-h1311-s-no-gm?authuser=0" }
		]
	},
	{
		"category": "Furniture",
		"cname": "家具",
		"words": [
			{ "chinese": "门", "english": "Door", "pinyin": "Mén", "phrase": ["大门", "开门", "门庭若市"], "sentence": "家里有一扇玻璃门。", "image": "images/chars/AP1GczM_EwisdVeIi4u87jM2y8dwYSC4882sbuzb0aT6lUKJlhHvwbzWBx5vnQFpuwEkdPVQyX8oIcRoVrbbPDxhst8LJfCtHfMjF1VWwP2qvamCpnypeNDEpIrZ4Pi8y6aDnRdseMyNXkiEnRCaZbzXCiUk3Q=w1316-h1316-s-no-gm?authuser=0" },
			{ "chinese": "窗", "english": "Window", "pinyin": "Chuāng", "phrase": ["窗户", "天窗", "窗明几净"], "sentence": "窗户上挂着窗帘。", "image": "images/chars/AP1GczPxPJoEUiVKXYIwcStrO7ktJx3aeQdFLxasC_4vRCxmt5AdtNyGTmdcH5Fo6dqSPLvHJZKAyPWl1AJW-FYL-uCW9tdmoOWsPu54PFeX3EsMxlqKyy1F2k5LUzIi3JdAbxxAhblnQAE0jMtNOIgkuPwmyQ=w1316-h1316-s-no-gm?authuser=0" },
			{ "chinese": "床", "english": "Bed", "pinyin": "Chuáng", "phrase": ["大床", "温床", "同床异梦"], "sentence": "早上起来要把床收拾整齐。", "image": "images/chars/AP1GczMX5v0pfxsHiHIpv-uFTN7CAGP2fMbVG6TNiMR93Kweeml81RqtRUBKAytIMGTwlg8UaMHpbG9q7P63WHIJjfNNa3uGYrcLbYu0iBbITrT9pXEwKHz4Lwsob-_CDo1eX3rLB3VVc_W3TnCOZiM6fLSkWg=w1316-h1316-s-no-gm?authuser=0" },
			{ "chinese": "桌", "english": "Table", "pinyin": "Zhuō", "phrase": ["饭桌", "书桌", "圆桌会议"], "sentence": "书桌上有一些笔和纸。", "image": "images/chars/AP1GczND3sEzhdWqnPydCjxzPoNatKW0ZyzDIJZzYeK7thj88NA83USo7eAkj6sTqkRfyOpMV0cfIDEpv2yiHrgxdusWAW84cBLB9kTwii7EK5yx3sloqbMFbP3htxhYUlu9Sp2NTMtTjw69L9kdm4VMaA05vA=w1316-h1316-s-no-gm?authuser=0" },
			{ "chinese": "椅", "english": "Chair", "pinyin": "Yǐ", "phrase": ["椅子", "躺椅", "桌椅板凳"], "sentence": "书桌旁边有两把椅子。", "image": "images/chars/AP1GczPIf6gr6Gw-7pdYuW0ENrcFSYGurydfBVHk8mr-ZnAnLkDFqYcfqdbHhrbWnee_zp2hz91JRMF3PsUE3k_eXE85CxnRSGtx3Eu81uj5zI4xJHTfMeum0cSAcGg1KjZZWKd8KqikwgTkZ2aqmHZ0cXR9Ww=w1316-h1316-s-no-gm?authuser=0" },
			{ "chinese": "凳", "english": "Stool", "pinyin": "Dèng", "phrase": ["凳子", "高凳", "坐冷板凳"], "sentence": "厨房里有几个木头凳子。", "image": "images/chars/AP1GczNN8EKFQlgu8-JL0ZvZkzeP5-TLV6QA3zp8wi9JapmXI9hR8YFuC5NvgzVju0EwbetFaJwFpIH8EZxvlM5gHwjCq6sj6zixNvNqeRePYfvIs5Wf6FQJGYB0OV4T99NQTRM-F9mXqcnMTtV-XH6MXRFanQ=w1316-h1316-s-no-gm?authuser=0" },
			{ "chinese": "柜", "english": "Cabinet", "pinyin": "Guì", "phrase": ["书柜", "碗柜", "翻箱倒柜"], "sentence": "厨房的碗柜里有好多碗和盘子。", "image": "images/chars/AP1GczOKwDgXL-MiPKTSwt2XJbI4G9WXsA581oPKKnc5QCxkABRwiIEmEoNYsxyfZTM9fY6nWzS39LI0Q3jqIanB5h9c1mJ9CdxsvMWN0eBxCJgM3p3WsY4Wzvd8OsEJ-elnzb0lTa_FnQ9ti9SrljNcZwoppw=w1316-h1316-s-no-gm?authuser=0" },
			{ "chinese": "灯", "english": "Light", "pinyin": "Dēng", "phrase": ["台灯", "路灯", "万家灯火"], "sentence": "桌子上放着一盏台灯。", "image": "images/chars/AP1GczPm5U0QaiRFVFaGZX0y_HpPbThSxoYubkB9rkm9-Xb8rYk1Y7t84kF1FykN_LBGXuq7VQH-KjRr0V_wAG08-8Q-FO0nDrn76gdFGmtS3uhaYsdKD4Hiwjg_8nNjo_a70ElUiGVnrfE8pLdCHbTsTSl3bQ=w1005-h1005-s-no-gm?authuser=0" },
			{ "chinese": "画", "english": "Painting", "pinyin": "Huà", "phrase": ["油画", "国画", "画龙点睛"], "sentence": "墙上挂着两幅画。", "image": "images/chars/AP1GczMBECyi8n3iL8teYzwuMUhfFgRd581aRM2rt-aaT6SsWQHQ0JfvfHav41NET-s1brI1XSiUOsMmKAjIEQIA_hbxcmQz3BzXS6a_Ko3ZI1D8HWHpQUpGbC-x5L61zC-WkPQstmbPZfr2GMQWMk5GAHabTQ=w1316-h1316-s-no-gm?authuser=0" }
		]
	},
	{
		"category": "Clothes",
		"cname": "衣服",
		"words": [
			{ "chinese": "衣", "english": "Clothes", "pinyin": "Yī", "phrase": ["衣服", "上衣", "丰衣足食"], "sentence": "我把衣服都叠好了。", "image": "images/chars/AP1GczMpTUyhD8XwUgK8wikW8cBvPzOeNDhjDbY7LUjOfxFHHr4JCmboiBJOcK4B_v96powYeyNPi7GRAwz7ZA5ZxjG7JjEvCaZp_0Q6DKly-SrJcAtEYeO7XFo0Y3F5UrOjA7g8nvBssN3UBlpWbOlUQSrrlA=w1328-h1328-s-no-gm?authuser=0" },
			{ "chinese": "裤", "english": "Pants", "pinyin": "Kù", "phrase": ["裤子", "长裤", "纨绔子弟"], "sentence": "墙上挂着几条裤子。", "image": "images/chars/AP1GczNonyvQQM3S0J7fM0fMj-ASqHuEhcSZdzIG3PBDR0ssNM0LoK48R_kEr5TU1Y8dWMnGS1jwxNvAt5m7d9KuJwBpJ3f154iaZ3XaWYJ-UteLH3gsrwWnnYGIhcoQXgA2gq0eSAbn7NAvfGAFWgvOqkUFkw=w1328-h1328-s-no-gm?authuser=0" },
			{ "chinese": "裙", "english": "Skirt", "pinyin": "Qún", "phrase": ["裙子", "短裙", "裙带关系"], "sentence": "这几条裙子真好看。", "image": "images/chars/AP1GczMfL-1X9583E7uIATf1i6QH7Y8OMlmqlo44dCvY9tu4wVDu2bTG9LFvr6mkGs-NkdHZSrFHSdmjMjY52oDqU9eXSsz4twNcbVrLYAxMMd8q83WAyVtTZJc8_GHlmwbaHE5NrpWVUPMKEpe0MtYn4U_W1A=w1328-h1328-s-no-gm?authuser=0" },
			{ "chinese": "帽", "english": "Cap", "pinyin": "Mào", "phrase": ["帽子", "草帽", "乌纱帽"], "sentence": "出去时，要带上草帽。", "image": "images/chars/AP1GczNUgB5-0FcUhX4J_bPtnbKF6qODbnSE7thDTLy-xlQNHF39-fH85EtbmWegXhPFY9TUsCOquE95708YLNwNIMyi5nSaMYHvqkvM53EVcANlNqZOynXWSpTyNuCuhdA-OgEE03yipzxv_pxjceSFzslNSQ=w1328-h1328-s-no-gm?authuser=0" },
			{ "chinese": "鞋", "english": "Shoe", "pinyin": "Xié", "phrase": ["皮鞋", "凉鞋", "踏破铁鞋"], "sentence": "到夏天了，出门可以穿凉鞋。", "image": "images/chars/AP1GczO7SRHoBbEonvTZnBx2pizEGOoQRmB7lFYh1_PRa-SnN-nu47lhqGvKDGZnhrST0r39ZXy4BQHYz5L1zcbIhHcA7CU3GvCHPEohEBxZBIeRk7gPuReOEHpGy9nlSA0FabSkCfedoUWOJ0TRwLWMJ8EJ3w=w1328-h1328-s-no-gm?authuser=0" },
			{ "chinese": "袜", "english": "Socks", "pinyin": "Wà", "phrase": ["袜子", "长袜", "青鞋布袜"], "sentence": "我有好几双花袜子。", "image": "images/chars/AP1GczPUAMRlgPSu1Ohigja7NnQuQIJvpYJgR287HjeKdfjBAmDcVvSEjYjwkAIn7NxAglplb97J4y8Qu6Y5ZR8Sy2tTsm4Hkc1uUyjlJFr7KNbR4DmTBwig7lpK3F6l9pupgL7T2V5R3a81VXq6REclw7X8QA=w1328-h1328-s-no-gm?authuser=0" },
			{ "chinese": "被", "english": "Comforter", "pinyin": "Bèi", "phrase": ["被子", "被动", "一朝被蛇咬"], "sentence": "睡觉时要盖好被子。", "image": "images/chars/AP1GczP0ID_h32SED2sY99pw6KJjunWpaVD-OKbHinsDRQJQHXmSqfitDCqsqF1otZN5hqJfFi4-WnEJnrTVa54tleVI0fMRvs8vR4_YlieIDLP3AW4sDOMrfnFfecXoVMbj9jTAtVxDfo66-x5yTfhPJzv5jQ=w1328-h1328-s-no-gm?authuser=0" },
			{ "chinese": "毯", "english": "Blanket", "pinyin": "Tǎn", "phrase": ["毯子", "毛毯", "绿茵如毯"], "sentence": "毯子比被子薄一些。", "image": "images/chars/AP1GczOte6eju3p6HWUQ1Wc-BIcBZTz5vG6s2Fv2m_9atq8_jJnFm17X_U0zmfPuAUc31LmEGAek60sQ4XbveCeTN9RgbYnNYpIsbxVFFoNsPa2KYzCVI-XeMOya_83-0hfFlMsIFuCRq73oTFpt2rbu6vMVhw=w1328-h1328-s-no-gm?authuser=0" },
			{ "chinese": "枕", "english": "Pillow", "pinyin": "Zhěn", "phrase": ["枕头", "枕巾", "高枕无忧"], "sentence": "这个粉色的枕头太高了。", "image": "images/chars/AP1GczPG-yPziCeNDb_bdZdUElqPAbPwmSHM_gPqCCvhD0RaHG8uVZGa14QgKyG_sqDEL6VLAgazqQCWo-qiHSnoKu8gCseyj33lieqK61WTDoVFRwvvTKL1-491LDfAnPQWgXHy6d36vZyKb_Wx8JBOxAqPjg=w1328-h1328-s-no-gm?authuser=0" }
		]
	},
	{
		"category": "Toiletry",
		"cname": "洗漱",
		"words": [
			{ "chinese": "盆", "english": "Bath", "pinyin": "Pén", "phrase": ["澡盆", "脸盆", "倾盆大雨"], "sentence": "大澡盆里面有只小鸭子。", "image": "images/chars/AP1GczOy2P6R095rKeMltqgtogdJ3HU7q7N0qx-4NNztJM2a5OQxJt6eaWruPlKQqh-_hozHJXWwU_FawJtRoY94Fp1eAsy4LRjyrqffjfuCSzW6VWIQ_su7yh9S04dLh4YT75stbalYGw58UE0zAy0MmPXmyw=w1320-h1320-s-no-gm?authuser=0" },
			{ "chinese": "巾", "english": "Towel", "pinyin": "Jīn", "phrase": ["毛巾", "浴巾", "巾帼英雄"], "sentence": "洗完澡后，用毛巾把身上擦干。", "image": "images/chars/AP1GczP7wjUcgYSv3OISgRtwRIJKc6FOztmmvJ9NIVeYGj0traohpyGi3mtovMYyXEp0oy19toVIc9_4pbJwEjjUaPWC1VA2ppfrJbWzMbm6e2QvY7bX_6VxsDoBniZff6FfrMU2WG6HA9kI3nvB4-GR6D-n4g=w1320-h1320-s-no-gm?authuser=0" },
			{ "chinese": "油", "english": "Cream", "pinyin": "Yóu", "phrase": ["擦脸油", "春雨贵如油"], "sentence": "要经常在手上、脸上擦点油。", "image": "images/chars/AP1GczOnBzy53nyQvYLsStAK7oBiE8gK8xkKvFI4byAS9OQhQ1VMrLSNs9jXp4-cb6m7Yd3evt2UF-RmUnyli8x4kWqId-8Vut5N7qIkezhnbKraksThrahbdDG_cY6MTfRlwrDwiz1thdAOGWSlHsArUM5zDA=w1320-h1320-s-no-gm?authuser=0" },
			{ "chinese": "梳", "english": "Comb", "pinyin": "Shū", "phrase": ["梳子", "梳头", "梳洗打扮"], "sentence": "吃早饭前，要把头发梳好。", "image": "images/chars/AP1GczM7aedPl-A7e9tNuVBBIZF1XKp0L2DpHDY-6U2yJZyonkUB0UCIqbw-c_oXPqmwA8k9LdMUKW_8a0o-Xj5mjzd--Nvn7SzcGqmBrDfKsLLq6dKtv3cHRKkKvmAzE0jrFr6O70ZxB9jhDAykHglD5X6sKQ=w1231-h1231-s-no-gm?authuser=0" },
			{ "chinese": "刷", "english": "Brush", "pinyin": "Shuā", "phrase": ["牙刷", "刷子"], "sentence": "起床后，先把牙刷干净。", "image": "images/chars/AP1GczOZLYoJFs38K2iG_U39pzEQFpTaJLm2lhAXeJBlqB9cpoRdA5Wz-VGByv3mpzYWJo3wp67bwQEdRC0o1xMyjzRrNkvr5zB13abzsCx6g-WpogmXRhitE_J-66CnBb4un37euleQI4y3vZsagzCk4acbWA=w1320-h1320-s-no-gm?authuser=0" },
			{ "chinese": "膏", "english": "Paste", "pinyin": "Gāo", "phrase": ["牙膏", "唇膏"], "sentence": "刷牙时要用牙膏。", "image": "images/chars/AP1GczPlIVO7tF7Lo6NTMZSK6XwBwmoCKxydJOx-iHtjZn0rUjMy_uRukcBl-_sRgjqIIfiw32CT4tWers7HQV3mn2AWu-w0GzBfyt169xXfAoKQmlu1sVOxtVjDe7fu3qhEeZc4rgfMbGWQxoAbQhF7C--IJQ=w1328-h1328-s-no-gm?authuser=0" }
		]
	},
	{
		"category": "Stationery",
		"cname": "文具",
		"words": [
			{ "chinese": "书", "english": "Book", "pinyin": "Shū", "phrase": ["读书", "书法", "博览群书"], "sentence": "桌上放着好几本书。", "image": "images/chars/AP1GczNzfY_FEWBjhfXQ04R5-hkvtHC0mGyPXV12kYVmYEr6FeF6KBjZnqSw5TXt-T7zRokcksoBnUMyKoMb-Ik1xRf9tQMNJ3vmIW3ZMvbMUyPimOTUTEEfU0yNnvwn5tEcNzDJQrqk6xJhV9WuTEAjnKpC0A=w1316-h1316-s-no-gm?authuser=0" },
			{ "chinese": "本", "english": "Notebook", "pinyin": "Běn", "phrase": ["书本", "根本", "本来面目"], "sentence": "你可以在本子上写字。", "image": "images/chars/AP1GczMFg_ciO5Fyzy-sZLzgG16qosRHMT8DBvvp_FcQULhtZzpGxfXG_TMGKLz5rP0LM8Q9mRfULX9rkW3-GMTUBXJ0Uq5av3UG-9BqhotATL2iE6hidz1A8U-tbu9qcpQDUDLk2-PvdrYazeXCj2xjj3YKjg=w1316-h1316-s-no-gm?authuser=0" },
			{ "chinese": "笔", "english": "Pen", "pinyin": "Bǐ", "phrase": ["铅笔", "钢笔", "生花妙笔"], "sentence": "用笔可以画画，也可以写字。", "image": "images/chars/AP1GczOW0TpRXN11aYzLnCaUW2XbLC9rC_8Fa0XHS5EkLyC9X2y5vWQn89Z-qs1o2WMlg4e5UHCiS2VVZ8-bKt4Hph-aXfn0emBXUilzrx_cgHV17qX87TvWgiMWquC87AKGwkLgVxrolch7hDEOXe9-5dqaLA=w1316-h1316-s-no-gm?authuser=0" },
			{ "chinese": "纸", "english": "Paper", "pinyin": "Zhǐ", "phrase": ["白纸", "手纸", "纸上谈兵"], "sentence": "在白纸写字、画画。", "image": "images/chars/AP1GczPDr9F-RxqN4-K22SIESEzBwPpsJRoC5hRGjvuseH03OELCd-W0KQiJW9MQAuwwjnj_WHyUh64YRTNrdsA4i4ZtEy3y-yCp8zQ9VbhVwV4fCB67FolKXE4CdYXfppEyPk7ctjj32R510MbAVh0faGG0vA=w1316-h1316-s-no-gm?authuser=0" },
			{ "chinese": "电", "english": "Electricity", "pinyin": "Diàn", "phrase": ["电脑", "电话", "电视"], "sentence": "电脑很有用。", "image": "images/chars/AP1GczMc2AtLEfvlefqkMfNMU9zKM4NhtDsPSF9Hp5-jnc8JsiEdSefj23Qqr1yhNQvqq49orZJQEoOs9MqKhb0J2RHWqtyTbgtmhbXolCH5eHhMpPsV4Jgqoj_I0XFs3bWE1tbuVy_FDUkFd9Fkjxj91x9sBA=w1316-h1316-s-no-gm?authuser=0" },
			{ "chinese": "机", "english": "Machine", "pinyin": "Jī", "phrase": ["手机", "机器", "机不可失"], "sentence": "出门要带上手机。", "image": "images/chars/AP1GczPAzPLkA1FTT94Y8Yf0Jaf-_1t2aRHc07aAEHm9nA-T1pbAxc-LZ7XupS-Q8YCGioAa81UAbx-u0GqSTZ8aN7zk3uehew4Qr1WM-qM6wN4p2J4PQ7VKBvLMsoRaXRy7VrG01DDRJtElScfpugXLih_olA=w1316-h1316-s-no-gm?authuser=0" }
		]
	},
	{
		"category": "Toy",
		"cname": "玩具",
		"words": [
			{ "chinese": "娃", "english": "Doll", "pinyin": "Wá", "phrase": ["洋娃娃", "小娃娃"], "sentence": "她有好多的洋娃娃。", "image": "images/chars/AP1GczOEpVZLGsPg2QODb0pQnEWACXqja_pVsSAuciHcxqInHecxVoXD6oMj1Ciyp5AQOSWDixRR0UsChmCzLyT_Ib5-jK9bdlZaQHafI8UJzoNwgE_DpTs6QfAITbtJbMhlu-K4wpIYIwC3tNt42NYhBGchkA=w1335-h1334-s-no-gm?authuser=0" },
			{ "chinese": "泥", "english": "Doh", "pinyin": "Ní", "phrase": ["橡皮泥", "泥土"], "sentence": "用橡皮泥捏小玩意。", "image": "images/chars/AP1GczNlqibN4-FygaRFQrgi4lAeKkwhbSA6uqb7xOnEXxQy-vnuwWiTM5N7fKxub18fajPR4KjW0bO8xpbJQQ6ovk9_L7SjjoyBOu9TBL_QiGj6S9rhbyrQLWFnTI0KSrtM7sBIDNMhlsH8lROTwycbYAd0uQ=w1023-h1024-s-no-gm?authuser=0" },
			{ "chinese": "牌", "english": "Card", "pinyin": "Pái", "phrase": ["扑克牌", "纸牌"], "sentence": "我和弟弟玩扑克牌。", "image": "images/chars/AP1GczNBk2qtNQLQJBLw6uQALtXzCd6REDuVwV_1AVFTDjuS9x8LydV_28O2F8ebH6v8gfwQZNjYsrWrXAlgk3AMsBkha_VbNqCi0jjYj9NT1X-c3SmUzSbt3LA_Rg6517GH3vOo-UdNSmDeaIHrPZGUq7aE7w=w1085-h1024-s-no-gm?authuser=0" },
			{ "chinese": "木", "english": "Block", "pinyin": "Mù", "phrase": ["积木", "木头", "草木皆兵"], "sentence": "她从小就喜欢搭积木。", "image": "images/chars/AP1GczPILCfkkWHfeWbNzg1mHtRSyW3CaWmFmBMy4XxZHEpJJF0e6pPBvsbghQddZmZrmGA7rKFLC7KkyB9mkOLASWjFtFVZCbHSYez7wOLyl-mbxjQTo7lqhyZHKr7LQ_9veUWYWUg2uXIoC0EJRbYXHVWJhA=w1024-h1024-s-no-gm?authuser=0" },
			{ "chinese": "乐", "english": "Happy", "pinyin": "Lè", "phrase": ["乐高", "快乐", "安居乐业"], "sentence": "乐高是一种很好玩的玩具。", "image": "images/chars/AP1GczPOeaijpchAB4C98HqNU3xJG3uBfh5j7_qKcoLmws428UHKcIvqABQLx5OSMjCUKVUs00qS8aJxUEXV-KHqnVYhXoaHZs274J9u65x7atFwjXZ5v3Tba1drXKB7rCOjRDIYnhMEuIRG-5rBmdpabMNjnA=w1023-h1024-s-no-gm?authuser=0" }
		]
	},
	{
		"category": "Animal",
		"cname": "动物",
		"words": [
			{ "chinese": "牛", "english": "Cow", "pinyin": "Niú", "phrase": ["黄牛", "水牛", "九牛一毛"], "sentence": "山坡上，一头牛在吃草。", "image": "images/chars/AP1GczMyn9E1zDK3bEGq8ZLXBDzaq2CQwdq0tFs9DSHh0VLWX68W2GHsMc97diy2jGgZPEcwaCdlRnZVYrajiIzpRg1KOuggcKHXBja_Q5cVbGv1PNEHKbk_yfVKE0V9bQJ7I15PNk3rNIgQRR6aRccJw0VwYA=w1341-h1337-s-no-gm?authuser=0" },
			{ "chinese": "狗", "english": "Dog", "pinyin": "Gǒu", "phrase": ["黄狗", "狗叫", "狗仗人势"], "sentence": "家里有一条大黄狗。", "image": "images/chars/AP1GczOsFEiDUiUSdrIIWGbdY-QBoKs-R5ZVlvuXoE5aDhBQO3LBaTmg3dK2GMbyMyhRPM7dnV8e5-Q9GmDk100Fw8v--X1_YiOkdSRIOIyltGw7CTtcWsnB9oHjT_nWcRBohia7GuWlNt6119tdHmoslk4hdA=w1337-h1337-s-no-gm?authuser=0" },
			{ "chinese": "虎", "english": "Tiger", "pinyin": "Hǔ", "phrase": ["老虎", "狐假虎威", "猛虎下山"], "sentence": "我爸爸是属老虎的。", "image": "images/chars/AP1GczMo7wZnCrfu2oNCwv8L8i-WqLXEVTeci9ronF0DPZMhWBYubl_eWj0pWNfCa3M-gslPCt3ZIz3k38TaEug-RuIJWLch-soB0_VMPD5P7pkfuAJsQJxnOWlwg-GUzRugSJn2CeNQki7d0JK3pZgK6oDUwg=w1337-h1337-s-no-gm?authuser=0" },
			{ "chinese": "兔", "english": "Rabbit", "pinyin": "Tù", "phrase": ["兔子", "白兔", "龟兔赛跑"], "sentence": "我妈妈和弟弟都是属兔的。", "image": "images/chars/AP1GczNxleOXq0Z9dSNMf3KTD8cDvY7onVvtXjE0QU7eRNTC27DiNy8LSGt9QjkXoEx5ZIRb8EM2vLxxhpZLLUgYTn6n61tvteu3w9BNMRq8CUok5yXlsVgBJVruxrOm_tbquCYmNupxprWJcP-ObLzlJuwK_g=w1337-h1337-s-no-gm?authuser=0" },
			{ "chinese": "猴", "english": "Monkey", "pinyin": "Hóu", "phrase": ["猴子", "猴精", "猴年马月"], "sentence": "猴子很聪明，也很调皮。", "image": "images/chars/AP1GczM1g8EQqMhUUKIGQ9Zw7TMRPbizyq--ETSs62OAPkaHao5XadVXJ3VJyD1GZxub5dO1XfY7tDToW4sHldH63KwMy7sg8ED4rnXjPZgP4Iv05d8JjRRahdC0-Cy73kKiu5il0BOhZANCnMeQTACUSbQLKw=w1337-h1337-s-no-gm?authuser=0" },
			{ "chinese": "马", "english": "Horse", "pinyin": "Mǎ", "phrase": ["白马", "马车", "马到成功"], "sentence": "马跑得特别快。", "image": "images/chars/AP1GczOonxUIgn4gE028IJRNYrybgABRJGd5yMaiNLWOxFIJZkJaP8r2wAEUQIItHwxf0ZHVqIVAxB8YCppg3D7cvdisU1DkzyT8SEs7f9pi0ki_XHC38AYPpWwiwAT5c-8s0tm5wKEBy7NA9LYBNo3tp2Rn4g=w1337-h1337-s-no-gm?authuser=0" },
			{ "chinese": "羊", "english": "Sheep", "pinyin": "Yáng", "phrase": ["山羊", "绵羊", "亡羊补牢"], "sentence": "早晨，他到山上去放羊。", "image": "images/chars/AP1GczPtvm6NZA0SR5xzsa_sb7c65sFMMeb0QkUrMaps2tibDU6oYr_TffFv6UobgOwr4PVUPGR11WSYU7uUZEYnwbhoVhD85ZePsLDKahe5gfO4oR068aSEbQcwFNxNziI68x49uZFNgHpTj-iJ4oekeYy8cg=w1337-h1337-s-no-gm?authuser=0" },
			{ "chinese": "猫", "english": "Cat", "pinyin": "Māo", "phrase": ["花猫", "猫步", "照猫画虎"], "sentence": "我养了一只黑色的猫。", "image": "images/chars/AP1GczMMlQhUXG1x53CZq1BqPWtBIvs7JrkzHGPI9ET-bnjAfgE3odJamcpzsHngpDM2wpkzRKMpNRb2f4fl75Upw2yMYZUdQFnAb_7HQZOKIBrLtoUG6qpnbhJJaIWWhiHx-gz5c0ET8Pt8GVHmI9sSt2wRkg=w1337-h1337-s-no-gm?authuser=0" },
			{ "chinese": "鼠", "english": "Mouse", "pinyin": "Shǔ", "phrase": ["老鼠", "田鼠", "胆小如鼠"], "sentence": "我家里没有老鼠。", "image": "images/chars/AP1GczNjVvVyimAYCVjE_dGLghvuqRugDV50tTN4e4vMAfMgA9_dL5yHfknQD2TpCcmQROWgw7g6xa13fR5xFRMVJpDJ-zkE3hKIadweLyhWVhwoxPCjpCOB0PhNQ4jGmt7Jx6AmF4MzAQrxSk2yRQjOyRUinA=w1337-h1337-s-no-gm?authuser=0" },
			{ "chinese": "鹿", "english": "Deer", "pinyin": "Lù", "phrase": ["小鹿", "梅花鹿", "指鹿为马"], "sentence": "有一只鹿在河边喝水。", "image": "images/chars/AP1GczM-uQV7sbwpIm9SXFUffeqKefeiKmSMLrpBG03eMv_Z4aNQB0tWDIXArnyDDVERvPRfKtGJ8uBHVlj6ChL9N1F6gUDOFHLQhppi3XIG2VaimiMUvpJzytju7gO84Yx-lgiYZS9hSjDeeh86qDR3-PQLoA=w1337-h1337-s-no-gm?authuser=0" },
			{ "chinese": "象", "english": "Elephant", "pinyin": "Xiàng", "phrase": ["大象", "象牙", "盲人摸象"], "sentence": "大象和它的孩子在河里玩水。", "image": "images/chars/AP1GczOJJJV4-usq3Ou2H8tlYgFgAnXpxY9eDutZgm77XOKzJXeDKBVa9jU56ik_DH72OuuELMIgP7JIG0ol2J4fHW28qg68r2uJ4K0fJi7Lw2LMcL_OwmeT6u_B-oejxwXKXvMzmjdkKBoOitWKIfHQ4EVLqw=w1337-h1337-s-no-gm?authuser=0" },
			{ "chinese": "猪", "english": "Pig", "pinyin": "Zhū", "phrase": ["猪肉", "肥猪", "猪狗不如"], "sentence": "猪很胖，也很懒。", "image": "images/chars/AP1GczOcIxKJmnv738XaKYxaPliQPl8WUxrR63m9_FvQyjIhDPQ6ifu07s5mFhDxJbC44yBXcN7xZgqWT10hcqn3D2tEG_Mtbj6CrwaZjdFI17y657iQAXucX9Xdo4sarmBlo401zTRES1hqtkf_vRIbUyOpTw=w1337-h1337-s-no-gm?authuser=0" },
			{ "chinese": "狼", "english": "Wolf", "pinyin": "Láng", "phrase": ["灰狼", "狼群", "狼子野心"], "sentence": "一只狼在雪地里跑。", "image": "images/chars/AP1GczO7IIb6Eh7P2mQp9bdvX-2Q-kSqHZ0JHM1_mYvw-LWtUCG_4rd-TosMkJJijns-pYOxa-2-bWUHiu9is86FyGefBmSkOh5F4ur1c-T0fsfCi5OXCjhy5dqY_8BY_5gGl0bIX1DXS84hPy-yUSjiycpdGA=w1337-h1337-s-no-gm?authuser=0" }
		]
	},
	{
		"category": "Fish",
		"cname": "鱼类",
		"words": [
			{ "chinese": "鱼", "english": "Fish", "pinyin": "Yú", "phrase": ["金鱼", "钓鱼", "如鱼得水"], "sentence": "一条红鲤鱼在河里游。", "image": "images/chars/AP1GczNm1yNI69HspXFFwhB5RtHkGfnVv2c9pTKHYUBgZLRZzyBLFdkw7DX6003HxkemgeEmfA4JekVaXDuk7B1VAqit6jU3-Ediwh8tmzirlQMoHhDDSw2Jx6M7KpkNOxxfDEF5FASWGYutY1g6loNiWHNC6g=w1339-h1339-s-no-gm?authuser=0" },
			{ "chinese": "虾", "english": "Shrimp", "pinyin": "Xiā", "phrase": ["河虾", "对虾", "虾兵蟹将"], "sentence": "水下有三只青色的虾。", "image": "images/chars/AP1GczNz3jdCtf-a0JXVS8vPk2MT4QgGTiALwPyyzJwVLPNMmMh4cztwBpGWfqKwInO_3uKYZw58P0LaA9EjpCLg5lK0kwiypJhn9p9TuXZ-cB5VAo6q-w_m4gZi-aI1Tb68BmsHEhqqjYGfgvKbQbGr6iH9TQ=w1339-h1339-s-no-gm?authuser=0" },
			{ "chinese": "蟹", "english": "Crab", "pinyin": "Xiè", "phrase": ["螃蟹", "海蟹", "河蟹"], "sentence": "螃蟹有八条腿，横着走路。", "image": "images/chars/AP1GczNEY08H-d2GLYzZzPa8YHNRRPYZQOIYJptuSlAgpdNgx_FJrF1viSp8nJLY16BGH1f75gK_Id9y2DhrmlI7Uh4PzC_vG6ztWH-fapZrxdVG99WJUnpf8C_wRiXTgTbxxQAr0sS7nvhJWffxRsCdEWIffw=w1339-h1339-s-no-gm?authuser=0" },
			{ "chinese": "龟", "english": "Turtle", "pinyin": "Guī", "phrase": ["乌龟", "海龟", "龟兔赛跑"], "sentence": "河边有两只乌龟。", "image": "images/chars/AP1GczNOxMDluwY5R9Z4WJPvuHRPuUmTbM3gSS9S33pewffIxm7ouRauo6tsUekbi-avmMeD1tFEqryxaqcCLQPK_YpCyrC5HKBhmbSsgcQAaE4NoBYHhXAuFAActbCb6uGBeVdpg5rNsVVzt1jsCee0aoJ7Sg=w1339-h1339-s-no-gm?authuser=0" },
			{ "chinese": "蛙", "english": "Frog", "pinyin": "Wā", "phrase": ["青蛙", "牛蛙", "井底之蛙"], "sentence": "夜晚，池塘里青蛙在叫。", "image": "images/chars/AP1GczNQfr7ub6xUmWhlaGJObJkSfinFnM89td4Js3hJuzmyMctKWlsZiJ27NYgR0J_AWC4Puk1h7hQcyc8t3LJE9Bbx-ZZ1zAsIvhtsz1doXiwoodPnWyRLNMb6Uf3a95Sz0Ai7XxADdANY0HVkR9CgH3rwMQ=w1337-h1337-s-no-gm?authuser=0" },
			{ "chinese": "鲨", "english": "Shark", "pinyin": "Shā", "phrase": ["鲨鱼", "大白鲨"], "sentence": "鲨鱼很大，非常凶猛。", "image": "images/chars/AP1GczOHQd_T8-u5nIQk2pDozyPvMckJK94jNJeCgpGZsUBDk9gDSBxYfbVhD2I_nLNoFM152bNdOHMc_rsxZW76XzcELfEVYzDDiprKIJM5-dJL1ABAMN3mdzy18UtGya077BPMQQiC3UKgqQxHGnusoEQzCw=w1339-h1339-s-no-gm?authuser=0" },
			{ "chinese": "鲸", "english": "Whale", "pinyin": "Jīng", "phrase": ["鲸鱼", "蓝鲸", "虎头鲸"], "sentence": "鲸鱼在海里生活，非常大。", "image": "images/chars/AP1GczMbbqxcU2r7w3QoXjsz1-pEf52sNeF76TP_Agvu_nmeXqwBCqC9k5gzs0QT716SH8pWT6DLKiQD7jt5zFZKBrOiSEa0PArvHUrykGRT_thoA6bcmltPXfLKM9lCPYWFFIVaOQ9oWztVeMxos0nySg0S7A=w1339-h1339-s-no-gm?authuser=0" }
		]
	},
	{
		"category": "Bird",
		"cname": "鸟类",
		"words": [
			{ "chinese": "鸟", "english": "Bird", "pinyin": "Niǎo", "phrase": ["小鸟", "鸟叫", "笨鸟先飞"], "sentence": "树上落着一只小鸟。", "image": "images/chars/AP1GczNAVgFzj9g0ANDQCQqOZNuRpdyOKwY-p9hr6FdrnX5cC-5boqHdqNfmJZ0w67FrJYxUp7eY3N_xsZkX7gfrQ2Jd8hps1WPN2BgoPYSkZehHXFrdDp5GpkLyz7LAkXJhM5qJ45K8H3ZRidmbV5-Nb5dyIw=w1339-h1339-s-no-gm?authuser=0" },
			{ "chinese": "鸡", "english": "Chicken", "pinyin": "Jī", "phrase": ["公鸡", "鸡蛋", "鸡犬升天"], "sentence": "公鸡早上会打鸣。", "image": "images/chars/AP1GczPCLZhxh2BRNbnA8FQbirZwi4nUBmbiPieXsUStnTOvSA4Oe9rE6mEsMoI4n730vmrYNvu7ueoPTU4HvTaA-ZQ5x6zeRpwOmqe5-oFUo7t78HMHB1ZB22UD6RgcUEyPWgVARpwsnUaY_l8a_pjhSEDL5A=w1339-h1339-s-no-gm?authuser=0" },
			{ "chinese": "鸭", "english": "Duck", "pinyin": "Yā", "phrase": ["鸭子", "鸭蛋", "赶鸭子上架"], "sentence": "鸡、鸭、鹅都是鸟，但都不会飞了。", "image": "images/chars/AP1GczPfEIp1zQL2z7h2BVfcxy-QycP9KWKpXzFrXmL1AzcUIrmPQtmTpny0ALZNwBnkAP-_AD0KUOyRVE_pW_jZ_ChpaKXEgjwy-_GwEUyRvA9In4LwCVhQ3kquOAQdkjdT1pe348WkVhjA5pt2AnKJy5Yyhw=w1339-h1339-s-no-gm?authuser=0" },
			{ "chinese": "鹅", "english": "Goose", "pinyin": "É", "phrase": ["鹅蛋", "烤鹅", "鹅毛大雪"], "sentence": "鸡、鸭、鹅都是鸟，但都不会飞了。", "image": "images/chars/AP1GczNZsLpJ6MO9i634Dm5W3m8HW8athgdCL69MgTK5m3GrqJAl9ixtX9IaiYw7WpTp64wT02bpzCmEmlKz4UxLFpXbvcvsMfSrO2Kap4o_VEGFxoLr_IieoF0CK3m4tVejSDvEg-kZiftfmNYpc1jkGsXGCQ=w1339-h1339-s-no-gm?authuser=0" },
			{ "chinese": "鹰", "english": "Eagle", "pinyin": "Yīng", "phrase": ["山鹰", "老鹰", "鹰击长空"], "sentence": "鹰是一种大鸟，飞得很高。", "image": "images/chars/AP1GczNmLszTfUpACypJJqXP6tBE6EnoDDNvExTnc7jn6eZkVmcslAgNufrpPuiISbzdbD8oG7ZHA8JRqw2WWho0eFdFW7H8KYF9Fd-QFeIGiIKcKdgHhwQSdshQGoek5hpjvETmwPAZ_vyTztpwkEzvUZOcJA=w1339-h1339-s-no-gm?authuser=0" },
			{ "chinese": "燕", "english": "Swallow", "pinyin": "Yàn", "phrase": ["燕子", "雨燕", "莺歌燕舞"], "sentence": "燕子是一种小鸟，飞得很远。", "image": "images/chars/AP1GczP1HHLE24fRp8EpZvcMVIbd_AcNL31SqR5e4kOrG3y5yu_IT0lZxrUlFlNjgA8vl6gRKtGa8PE4r4kCMqvOW1_arJtSQwruBPHGCn7pMYNhHPoyorEc22zo4nMa2A8GSLomLDWwAfrsZ1uGLXtQwPwA9g=w1339-h1339-s-no-gm?authuser=0" }
		]
	},
	{
		"category": "Insect",
		"cname": "昆虫",
		"words": [
			{ "chinese": "蝶", "english": "Butterfly", "pinyin": "Dié", "phrase": ["蝴蝶", "飞碟", "招蜂引蝶"], "sentence": "蝴蝶有很多种，颜色不一样。", "image": "images/chars/AP1GczP0DihemR4GwN8IorWby7aAj7N_ksSHyZt_TSteYT_f49nZRaAggM4H585yBuc7tCiUCt1sneZJogfAXHl_pkHUf44kQJQcjH7I5fDIeRjanMwU47TbUVQC99MVxjfyUYOcA8y1gznXPmQQOV9aMmX83g=w1337-h1337-s-no-gm?authuser=0" },
			{ "chinese": "虫", "english": "Bug", "pinyin": "Chóng", "phrase": ["虫子", "瓢虫", "花鸟虫鱼"], "sentence": "瓢虫还有一个名字，叫屎壳郎。", "image": "images/chars/AP1GczNemXFDQSShA731VlBBSb5tQXbly4t715ykLY3T_Dn3meqjytvYQPpWdwImBx08OkxQVESXuct6J9C8g8pNV-Tb36JTFvJ2Ksba0YYKk4bF1zlVnFU7Bg6u73__jHsxVRv502DufB3MrVl_QSm1feBXGw=w1337-h1337-s-no-gm?authuser=0" },
			{ "chinese": "蜂", "english": "Bee", "pinyin": "Fēng", "phrase": ["蜜蜂", "马蜂", "蜂拥而至"], "sentence": "花丛中有好多蜜蜂在采蜜。", "image": "images/chars/AP1GczMZM2We41XR5yGRltH4bWKgrjm4L9kf7RJACfmQupbv9zkSFaMn-VSBubMQ9kgkhTpxIj91QzsrPmogBXIII3EJUohijVL7sh_wGsuVC7OcHgKhnIvwBiIyKeJ7xfcUqXtmz63cZF9e8vNr953kzMeEuQ=w1337-h1337-s-no-gm?authuser=0" },
			{ "chinese": "蚊", "english": "Mosquito", "pinyin": "Wén", "phrase": ["蚊虫", "飞蚊", "蚊子腿也是肉"], "sentence": "蚊子一般在晚上出来。", "image": "images/chars/AP1GczOrzx-BFYumOfrwJdKF0lAl3mFhAAEEkBfdfs2lneLyQ0bmoq0Fi4NeHkr0ljDaqBToJ4onUF9kIh7OpGmOq0eM0svTzrG6FVa7_xIpziCQb8iT5JxWsBh6ktcBdthmb6qtpNd9pxdoyQa4klyqNJ7VTA=w1337-h1337-s-no-gm?authuser=0" },
			{ "chinese": "蝇", "english": "Fly", "pinyin": "Yíng", "phrase": ["苍蝇", "果蝇", "蝇头小利"], "sentence": "苍蝇到处落，很脏。", "image": "images/chars/AP1GczPPkDpyhho7T1LQ3WyvzTuRCiCdbjbZXKVb7qx1OMPA7LLKxOpwMRTcc86C2r49WujBZBJNCq5fj4qOsO3k2dX_Arbj9QMfHb_So7fwIEpM6sWAHEKz9hgvMpi2QND0YHHenXA-5Uba0-Xo_mcE-8N5dg=w1337-h1337-s-no-gm?authuser=0" }
		]
	},
	{
		"category": "Plant",
		"cname": "植物",
		"words": [
			{ "chinese": "树", "english": "Tree", "pinyin": "Shù", "phrase": ["杨树", "树枝", "树大招风"], "sentence": "路边上有一棵大树。", "image": "images/chars/AP1GczMPqN1WQlmfHXdDu0qiTGT0rR5aerrxsGpHJ3fxs1btbZxg_32DkEnMPYY827IL8tQ_xVqAuPQTLNpnGsIF7A4VedJq-hnNEGVJQ-F4vjgRFZock80HL678lOmJWWejev7Xjgp8t3vhDuF7dMWI5tOpTw=w1023-h1024-s-no-gm?authuser=0" },
			{ "chinese": "花", "english": "Flower", "pinyin": "Huā", "phrase": ["红花", "花脸", "花红柳绿"], "sentence": "房子前面有很多花。", "image": "images/chars/AP1GczMO8a7Y5J6FCsNaCixOMVeavJfbWz3uIxlhX6UePK0qMGtMTPCOBf_OisJ40xvjp5yp8qfwvVWdvigTl0trBHyIGw74Nm8vdvF71fzuSsfaQWq8gNnYX4V2zrqhv2gdur5NKBK77Dp-GOBbSMM0FlHTGg=w470-h470-s-no-gm?authuser=0" },
			{ "chinese": "草", "english": "Grass", "pinyin": "Cǎo", "phrase": ["草地", "野草", "草木皆兵"], "sentence": "一条大河从草原上流过。", "image": "images/chars/AP1GczPlFwaopVpIGnrIYCHW9KYbPn1xtIASf6TNqKECvw-dz_R4QX1dSJytDakYIuOeTkfkaeuGFr9Szs5u8ime4yqYc6z_p9w-EWv2aWqYe7DCEZWNbI67odbvHVlWUTP8xc4407Gy8YS73CwY9YHRY6sjxw=w1024-h1024-s-no-gm?authuser=0" },
			{ "chinese": "菜", "english": "Vegetable", "pinyin": "Cài", "phrase": ["蔬菜", "种菜", "小菜一碟"], "sentence": "菜园里种的有西红柿。", "image": "images/chars/AP1GczNErJQ40X7Cm7eJJ9_Kzqz9W94R5f22TCgmJyQz2BMWwHjDJRiKb50eAPeaXeMK2IzZ0nQECN7v5tdZr2gvQXk9Xep1iMTc4cOGNIxryk7FcsfxdDeCvT3uUb0pomppqio_dvqm6fbZCRT8j4tgryHnFw=w1330-h1330-s-no-gm?authuser=0" }
		]
	},
	{
		"category": "Date-Time",
		"cname": "时间",
		"words": [
			{ "chinese": "秒", "english": "Second", "pinyin": "Miǎo", "phrase": ["一秒钟", "秒表", "分秒必争"], "sentence": "一秒钟很短，滴答一声就是一秒。", "image": "images/chars/AP1GczNdVTpxtLnKislKarYS-2rygxe92t74wEQUWvJBReagTgiem0xbKak0lcZHSy_lIkZBBpIYh_dnAiyp9THG92h9h5ga_sxzaoDuANftAzJ0ehqs-AQ1cXbco0Q-uwjpwxVun6BDeHaF66nNH1NkwtaPMA=w876-h491-s-no-gm?authuser=0" },
			{ "chinese": "分", "english": "Minute", "pinyin": "Fēn", "phrase": ["三分钟", "分开", "不分昼夜"], "sentence": "六十秒是一分钟。", "image": "images/chars/AP1GczOqWMairNWwgU1PLb6KnXYZ266aO245hKG-4ijzvXBGjlBtbzSY3_Ex3z-X8z_0xs7VvLyBStULn1HBdn8JCFDioFDRENkGGCCWGgnqrW2c9ymKcKIBovGJ_OL1CMyoS8vzBJhTfyJIsqS5BK9A_kyu1g=w701-h492-s-no-gm?authuser=0" },
			{ "chinese": "时", "english": "Hour", "pinyin": "Shí", "phrase": ["小时", "时间", "时来运转"], "sentence": "六十分钟是一个小时。", "image": "images/chars/AP1GczNOC9fvKceyaGJqo4t4mrIaUmUGoOUlMxJyTbwwMUtMxHaqh2I22VGeYcQ2znTZrIH-P1M4gqSA_CKtTfucPqDlBcduNB0NfCp96UNNbBs3j82g-ZlKePvXiHDYW_kyDVcJJ3GMH37rl9I1QXHt5x5-IA=w1120-h1128-s-no-gm?authuser=0" },
			{ "chinese": "天", "english": "Day", "pinyin": "Tiān", "phrase": ["每天", "天气", "天高气爽"], "sentence": "每天早上起来，要先涮牙、洗脸。", "image": "images/chars/AP1GczM40HcH9B2FPT9fJPIwS_bENsJRp6LOJ3b8tibo1M7Rql52LUE7JgqThuXXuuWSdStyOwNoGUl-0NlbOHTNbstzn_U-_G4YMlf_ifjp2JjXC8HDWReH8GxqtApq71U4pnrhK1j9NOsyt1kmdgf35RFoYQ=w1024-h1024-s-no-gm?authuser=0" },
			{ "chinese": "周", "english": "Week", "pinyin": "Zhōu", "phrase": ["一周", "周围", "细心周到"], "sentence": "一周有七天。", "image": "images/chars/AP1GczO5s-3GANiDgRM_86b8PaaJkdlc3zzhYCz45HUhMi3yD7WaF_r6oLcwMqhD58vuj5S5v4AWyLtc-8vAWoCXLNKoQk4hP6bB0s1-8yq4MlxZ0-0Kfeo7UPDuemCbpTSialbTYiVpcOe-CzEyWiINycnD3Q=w1020-h519-s-no-gm?authuser=0" },
			{ "chinese": "月", "english": "Month", "pinyin": "Yuè", "phrase": ["月亮", "月饼", "月朗风清"], "sentence": "晚上可以看到天上的月亮。", "image": "images/chars/AP1GczOIl2QtkOrUGEw-Jg5sbhQT2bYALToKVTyQDHG6YooSa05hueJ53a5hwI_7PLYFvz4mECAbX7VmdfjRzZ9OWdAZHMalEgZ0hBdB2QkwtaIn6A6ENPU_SXMHuRo8NSwaoQ91VF6BsZOAeiT5hnh345Pp7g=w800-h450-s-no-gm?authuser=0" },
			{ "chinese": "年", "english": "Year", "pinyin": "Nián", "phrase": ["一年", "过年", "度日如年"], "sentence": "一年有十二个月，三百六十五天。", "image": "images/chars/AP1GczOBZm4DIwPY3OiQJCJiGF1VdR1b2zwdtF2TQPcmEY4fPm7hSvCicxJ7r9dipWH8fZnpsNxUKNK1Qj_-TPl_fU7Pe0d0NRJ6uA0au-j4H3raI1N_oU5H1FpVgkNMh8XM6fuPMnOcMYgD8UvifIh6wzAD1g=w600-h600-s-no-gm?authuser=0" },
			{ "chinese": "今", "english": "Today", "pinyin": "Jīn", "phrase": ["今天", "今年", "古今中外"], "sentence": "今天是星期天，大家都休息。", "image": "" },
			{ "chinese": "昨", "english": "Yesterday", "pinyin": "Zuó", "phrase": ["昨天", "昨晚", "昨日黄花"], "sentence": "昨天是星期六。", "image": "" },
			{ "chinese": "明", "english": "Tomorrow", "pinyin": "Míng", "phrase": ["明天", "明年", "明知故问"], "sentence": "明天是星期一。", "image": "" },
			{ "chinese": "现", "english": "Now", "pinyin": "Xiàn", "phrase": ["现在", "现金", "昙花一现"], "sentence": "现在十二点钟。", "image": "images/chars/AP1GczNnrGrrBnNSUFj59cFAEuRnGteJqN0b_4SWktzwkEBYk4w8LPhoMDDEy02aK_NUipZtIUyOg9vmD5_g7SJ9TanLm2KyLjsP_AO5O7rAFc29ipsMI7_v_GkSgazyYFLo_4DV85IiwNRu9TDqBB2h9d8SDQ=w1024-h1024-s-no-gm?authuser=0" }
		]
	},
	{
		"category": "Direction",
		"cname": "方向",
		"words": [
			{ "chinese": "上", "english": "Up", "pinyin": "Shàng", "phrase": ["上面", "上个月", "上吐下泻"], "sentence": "哥哥睡在上铺。", "image": "images/chars/AP1GczOQHzctmnZaOYl4FkY7iwv-OtTkurvyFItdHTX6j5vEPfImXPZbrDWw7A-RoL9ZakZ9N2z-AZgCJs-K1S6379Wv0Z0yo4lTvzbv8_vMmlg6qYeFZwRw3H148faVAKHhr_Uq72FLCGsEjGX2HW11lARKQg=w1330-h1330-s-no-gm?authuser=0" },
			{ "chinese": "下", "english": "Down", "pinyin": "Xià", "phrase": ["下面", "下个月", "下不为例"], "sentence": "弟弟睡在下铺。", "image": "images/chars/AP1GczOQHzctmnZaOYl4FkY7iwv-OtTkurvyFItdHTX6j5vEPfImXPZbrDWw7A-RoL9ZakZ9N2z-AZgCJs-K1S6379Wv0Z0yo4lTvzbv8_vMmlg6qYeFZwRw3H148faVAKHhr_Uq72FLCGsEjGX2HW11lARKQg=w1330-h1330-s-no-gm?authuser=0" },
			{ "chinese": "前", "english": "Front", "pinyin": "Qián", "phrase": ["以前", "前方", "前思后想"], "sentence": "以前我不认识字。", "image": "images/chars/AP1GczNiBdSDMR5VoNyCeVjFV3760CG5icBXENS7H7QIEZJydQVITaC2_G3gy-UjmYH8W_yj-go43B-zUU2f-v0zN0zPeOZsR85u6L4lj18xI7ZDKSr67rMl6OexibF6Uo2lBZwjZ9DEblqfBlG_4C75l_S1pQ=w1024-h1024-s-no-gm?authuser=0" },
			{ "chinese": "后", "english": "Back", "pinyin": "Hòu", "phrase": ["以后", "后面", "争先恐后"], "sentence": "以后我可以教弟弟认字。", "image": "images/chars/AP1GczMWcyxxpVly9nDU7LstDSUIi_-iUD383ZpjsFfjA00XE8Jc31H3b4MQLyhEgUlouc8FeLiQUfl7CyHBL6wD-gnTxbLjIKOlYfS92wZQmwPzGJpbkmAfygE9wYOHNOPbsGIrOHz76F2jjBDjShwiw9_e7w=w1024-h1024-s-no-gm?authuser=0" },
			{ "chinese": "左", "english": "Left", "pinyin": "Zuǒ", "phrase": ["左手", "左面", "左右开弓"], "sentence": "前面向左转，再走不远就到了。", "image": "images/chars/AP1GczMBficaT6uYOKA24oEBvjbRtedN9AVQ65SAhbxKkP5PLIEvGnfHalFRLRWg6wRJemBVu8biUhojlWtS0UBO7_1Q2bmugyTeW_WOjc1W-xGtNNamEjULDPLiUu2hirIlDAbFEeIBstA_G6QFJjOWv2PfLQ=w1024-h1024-s-no-gm?authuser=0" },
			{ "chinese": "右", "english": "Right", "pinyin": "Yòu", "phrase": ["右手", "右边", "左右为难"], "sentence": "路的右边是一个电影院。", "image": "images/chars/AP1GczMBficaT6uYOKA24oEBvjbRtedN9AVQ65SAhbxKkP5PLIEvGnfHalFRLRWg6wRJemBVu8biUhojlWtS0UBO7_1Q2bmugyTeW_WOjc1W-xGtNNamEjULDPLiUu2hirIlDAbFEeIBstA_G6QFJjOWv2PfLQ=w1024-h1024-s-no-gm?authuser=0" }
		]
	},
	{
		"category": "Verb-1",
		"cname": "动词",
		"words": [
			{ "chinese": "走", "english": "Walk", "pinyin": "Zǒu", "phrase": ["走路", "行走", "走南闯北"], "sentence": "她正在向公园走去。", "image": "images/chars/AP1GczPN0hNeEzIvwPW9CKd1jDCiRH9KN4md0ITAmudZbmWYmJWF1gWUT8Lmacu-OsGmJvJPExPhfAQej3NfieJ3hMk2GV0Z8bwWA0kOTeEN3STkqEc67wFWV_qswpitxCatPSCUTaq4OG4gw1H5RYX30gxM6w=w1024-h1024-s-no-gm?authuser=0" },
			{ "chinese": "跑", "english": "Run", "pinyin": "Pǎo", "phrase": ["跑步", "逃跑", "东跑西颠"], "sentence": "慢点跑，小心摔跟头。", "image": "images/chars/AP1GczMQF5YpZ19dZZ8EjIhsJbos9VNp-AV0CoAW7Zaid0nDrcPZ9VfG_TTLLA-iCXMRV83ECrXh2VW3flZNUg2ufoXEav8Ud3cseMyc5WlMPsoy2ET_0YMjEb1YwYBRMKbycYCpqJ73GuR9kKKEJqIJ7Y2p-w=w1024-h1024-s-no-gm?authuser=0" },
			{ "chinese": "跳", "english": "Jump", "pinyin": "Tiào", "phrase": ["跳高", "跳舞", "心惊肉跳"], "sentence": "她一下跳到沙坑里去了。", "image": "images/chars/AP1GczPyAXW9rR_ZFr6vnaUOoMrP0XBXJndFXt9Spw7N4zOgq6X-6Xzm6la1FCtwjhJVfgnOpr9cYpMlfcsn0ST3MUxxuoT29LIIhtohYxf30fjSavEGdMW_Hb-9gbgLGVmAKBEm6ehCsRZYZIx24Mm5dwQXpw=w1024-h1024-s-no-gm?authuser=0" },
			{ "chinese": "看", "english": "See", "pinyin": "Kàn", "phrase": ["看书", "看电视", "刮目相看"], "sentence": "她看见天上有两只小鸟。", "image": "images/chars/AP1GczPq0sRhDP1w6kh4YibbBjnR2BqF0KsI7_3oFjZHwgMo5FR0BCGxzRpiX4L3K6HvpIwwKdyKegAzTPNpMcebgvRNqGr-3Seerk4zbb5E8jfnvvxtRNyR5vSIAkGJnKPb-SqML91ZeKD7TJqCDU5EjLPO8g=w1024-h1024-s-no-gm?authuser=0" },
			{ "chinese": "听", "english": "Listen", "pinyin": "Tīng", "phrase": ["听话", "听音乐", "道听途说"], "sentence": "坐在这听一会音乐。", "image": "images/chars/AP1GczNIVQUUkjHUDDdsFueaLzs7z2RJzlZGxc7loxs2XN2lQzNN2qYc0hSpUqIIAIQJq5iEbc92yRwjQoIel2vLh2fZ3sKyuoipvk0kUzDh5TQeN85zi1DxBoc1Y949SCupaQSI930Fv12cZiuCpkAQ1JWivQ=w1024-h1024-s-no-gm?authuser=0" },
			{ "chinese": "说", "english": "Say", "pinyin": "Shuō", "phrase": ["说话", "说明", "道听途说"], "sentence": "姐姐在和弟弟说话。", "image": "images/chars/AP1GczNwTzEtUO9v4OU0_J9wYgPKLnqvEyUh-pt2_6Az9I2zssidd3UUq4iuqSkussgK92f_5yKwP4n-NfoEjXfJ-J_pE5_KKVMlQfVfUakq4NvpqfSH78RgTHp_IarTROtec_pq05_btv2yvBy0NbG19K8dpQ=w1024-h1024-s-no-gm?authuser=0" },
			{ "chinese": "唱", "english": "Sing", "pinyin": "Chàng", "phrase": ["唱歌", "唱词", "一唱一和"], "sentence": "在幼儿园里，老师教我们唱歌。", "image": "images/chars/AP1GczPpB89YZMzoOoj8eU3csE6IjnU8ZXCu6BdMxdAsSZagI67spvhftcWVHoEe1lnIk1X_0aY7n-NiMpKpWXUEvFuslvMJ3qdgCxU3KnJhfsodwDoedeoMGjHSzwuRp6T9ZnD2igZI3BCRc9aGTjgrKMDBTg=w1024-h1024-s-no-gm?authuser=0" },
			{ "chinese": "喊", "english": "Shout", "pinyin": "Hǎn", "phrase": ["高喊", "喊叫", "摇旗呐喊"], "sentence": "她有时会大喊大叫。", "image": "images/chars/AP1GczNAjrycZDnYx4HBhA0P3UWncVbJnO80LSA01Oe3ARZxrc6G_w3Z1SVjB2SvKm2cQ_HIXh7PNa0AAjfrcCg8WnWRFZn-__2OVi549pEqX9zkMGKxbym4zHis7RuzGtJiWI4oABtyriPTb2iq7YmUI6ZZEg=w1024-h1024-s-no-gm?authuser=0" },
			{ "chinese": "笑", "english": "Laugh", "pinyin": "Xiào", "phrase": ["微笑", "笑声", "哄堂大笑"], "sentence": "看见巧克力，我高兴地笑了。", "image": "images/chars/AP1GczMFBloRqjMp_63CSvG9F6uz9_eLsxkaqRZKRuyPbVvzvOkU3L-dIcYM9pBcqUwRF4ckp1BDFHFPZnuWiEsrHag5bONgwtjCQCuuJ0wQTKeNHKW2qVN7XMyNuyi7x_fQmjKHVdwyOn5Sj-XiT6qcsDbmaQ=w1024-h1024-s-no-gm?authuser=0" },
			{ "chinese": "哭", "english": "Cry", "pinyin": "Kū", "phrase": ["大哭", "哭声", "哭天抢地"], "sentence": "她摔了个跟头，坐在地上哭了。", "image": "images/chars/AP1GczP-peTSDWvXDXBy5mxDJ6SyZENoi_PQd2KLea8rLGhV5oez044sA2zc3Cut1vXfRN10JGTg5zj-PYtBNhsSucE2lepVEAavehDfAnLEtsfBDw9X6vIwcLIJKqw6ebgwMjkS_XuDGn07r_cE6vDbZaY4vQ=w1024-h1024-s-no-gm?authuser=0" },
			{ "chinese": "吃", "english": "Eat", "pinyin": "Chī", "phrase": ["吃饭", "口吃", "大吃一惊"], "sentence": "弟弟在学校吃午饭。", "image": "images/chars/AP1GczPPQmNEyeanH2dOEDw1KO-1Dn3-5uUZq-zmcqNw4Q7ERP8VrZEhEOcaQUVRxzattk05EDeJOnS-7ARSq1UjoumvCzRlTaBtIaTMGlTszblfSNZGmur0Z10zYrugoY52281HXDID3ZgN6JY724HgBCqCSA=w1024-h1024-s-no-gm?authuser=0" },
			{ "chinese": "喝", "english": "Drink", "pinyin": "Hē", "phrase": ["喝水", "吃喝", "大吃大喝"], "sentence": "渴了吧？喝一杯水。", "image": "images/chars/AP1GczNtVtAuNyyQ-l-3bJlM9TzSYziQMfw1rhQ39PA7yCxDyay1dEAPsoykEg7HbA3zTGwUWeXxI9VboBSSISgrqEp_YoFuS5z9kSEe1LhKTT1GfbDVHto5NfIKHISqAPbJkT0_gR6DKOVAGwhfw6WR3l6eiQ=w1024-h1024-s-no-gm?authuser=0" },
			{ "chinese": "扔", "english": "Throw", "pinyin": "Rēng", "phrase": ["扔了", "扔东西"], "sentence": "她把球扔得很远。", "image": "images/chars/AP1GczMaeq59UVW6f9E3fwXG17dL-lmrccRVJpRIuFQTuDWXQOde-2ubyhiWl9oEiTPoySoIGAxG6niOPjKOiSySZtsE6H59M-DQn5VXqsjRWR0ZkCbyW8FwY_1WGVHmGvngBYBQrs87hXNVpOY2o6QEpys8tQ=w1024-h1024-s-no-gm?authuser=0" },
			{ "chinese": "打", "english": "Beat", "pinyin": "Dǎ", "phrase": ["打开", "打鼓", "打草惊蛇"], "sentence": "她拿了根棍子打地上的树叶子。", "image": "images/chars/AP1GczPeieZWRBqQmww4spqjclxNaf8Y-_JyQcn4E-w6zbYXHkpfewWU8MYG1hmUVZ8_WSR64NdFFY6p0ixcmfIhcB2xHhm57b86bAieAAbjRQ79JBdO0q3oml5LxWEBr8aJREOPNHCYB5G4RHnZI3Lm30aZPw=w1024-h1024-s-no-gm?authuser=0" },
			{ "chinese": "翻", "english": "Turn", "pinyin": "Fān", "phrase": ["翻篇", "掀翻", "翻箱倒柜"], "sentence": "在公园的草地上，她翻了个跟头。", "image": "images/chars/AP1GczP1tXzI9p4CH8mfJpOMbCvPHk51eAtNvfxSNzh66O7B3W-O3CHEJ1d9O9Nqt--YzLTwySeieCXPxWf28UJC0Py0AodBaO53WDPgBhTP4IU2CMF2Q9sSKc6ca_tSoujMn9Z9yOwaCGWmSz6kt4kbgZ7TMA=w1024-h1024-s-no-gm?authuser=0" },
			{ "chinese": "躺", "english": "Lie", "pinyin": "Tǎng", "phrase": ["躺下", "平躺", "横躺竖卧"], "sentence": "我躺在床上听妈妈讲故事。", "image": "images/chars/AP1GczNOPajDaoFEpbq8M3dEEfMBWcPa2XvzGW95SVF1y-hFOQcysDt98zawK51o0Pa1BETCDZOAi-sUgLZ4mJ47BOD4U1AgutQEuQQVKuYt9xhAYx6URxNtL2yqqCUQG_HRiQzZ1NC56G_7e_pxX8smhBzX8Q=w1024-h1024-s-no-gm?authuser=0" }
		]
	},
	{
		"category": "Verb-2",
		"cname": "动词",
		"words": [
			{ "chinese": "闻", "english": "Smell", "pinyin": "Wén", "phrase": ["闻味", "新闻", "闻所未闻"], "sentence": "这个冰激凌的香味真好闻。", "image": "images/chars/AP1GczP1kenk7wDJU4MOSgEFQpxRgqHQxuDsvUbsIML6DEICPnVZ9ya9YpE8nZgB6H6Iqee1251gHY8tj-2ZbFblAu8rQ7OWh1sOjvpXh4RXSmXBK0WAR4_BmZV-9k7611hoy34WHia1UMi2_QG7LgbwCc5kQg=w1024-h1024-s-no-gm?authuser=0" },
			{ "chinese": "尝", "english": "Teste", "pinyin": "Cháng", "phrase": ["品尝", "尝鲜", "卧薪尝胆"], "sentence": "你来尝尝这种水果。", "image": "images/chars/AP1GczMH5qYlP1H1DB9a9SOKs5a4tkCo4DYLmVRpS-Y-XLr0OxNuNrzjtAolY5Jdu1nzqpS2ZBTINvcv8blywteEBnIfRvCtrERm6-8c_cr_8vwMbrli7G34lbFKTuWDvWDBcgwB6bnymdD3HAFWnG9KvlNsFA=w1024-h1024-s-no-gm?authuser=0" },
			{ "chinese": "摸", "english": "Touch", "pinyin": "Mō", "phrase": ["抚摸", "触摸", "盲人摸象"], "sentence": "小狗喜欢让人拍它，摸它。", "image": "images/chars/AP1GczNXx4ktx7Xh_Udrt2nlwbU2K90N-9oZm_-MAKOyPajky97ul8uuycrV1LQnn82lx17PYzX4GE1F_OPrpAVpTQO5wSH_lZjvlzZStLVRXR4l-aVAOpeGY0Fi7dt-4xPmZZllIndTvcYxLZoUhD1p9NyDbg=w1024-h1024-s-no-gm?authuser=0" },
			{ "chinese": "推", "english": "Push", "pinyin": "Tuī", "phrase": ["推开", "推门", "推陈出新"], "sentence": "弟弟把椅子推到旁边去。", "image": "images/chars/AP1GczNyb26LtL0pctdJSZoMlj1NtOxnIhcZPfw456f6RYfrZ-3O_e_W2Fm_albzQp4qlaOKooEjtAbmQ1irkUxl14dkzp0zgO110Vc2sHw2-kzPjMcF264KJ5Iex9XX0kwPX77Bd9H6lOKVE9CvZPFjZvIGaw=w1024-h1024-s-no-gm?authuser=0" },
			{ "chinese": "拉", "english": "Pull", "pinyin": "Lā", "phrase": ["拉手", "拉车", "东拉西扯"], "sentence": "弟弟把他的狗拉进屋。", "image": "images/chars/AP1GczNxvrTT8n1DcsmZus8-mc7mbMpYGNCNOnZuDSdcVH1-rd80bdLSU_RWnkqsPjppsH33JRpLZULYPj5SErBwNTPQ6c3kiGh6oHvbScIRzapNADNb6cXJrrdOCA4GkztBA6Q7TW4XrMG_nsiehKSWIVG3LQ=w1024-h1024-s-no-gm?authuser=0" },
			{ "chinese": "拿", "english": "Take", "pinyin": "Ná", "phrase": ["拿走", "拿过来", "十拿九稳"], "sentence": "他从书架上拿了一本书。", "image": "images/chars/AP1GczNG05YhBNACLym2wdvlsKq4Be3vmb2b1jP6rj0jNGuwN12my9LxwtbZN_jerl3RYEFQrXw6s2Heec_A5jZnwj5299lTBDDhLPbFzbXrn8KAvqzDy68mHj4OgxglOuvv-zph86sApQc0_kYTx6mxy0Lyvg=w1024-h1024-s-no-gm?authuser=0" },
			{ "chinese": "玩", "english": "Play", "pinyin": "Wán", "phrase": ["玩游戏", "开玩笑", "游山玩水"], "sentence": "姐姐和弟弟在玩积木。", "image": "images/chars/AP1GczM2Fv90DfzTmmONJY3WrzKu6673a9bOrU0Ta9rAhSqFp6IdzGYEYkk4bisBWf-462ialr0gpdgWRqJrfSXavkGxZ9ilBuzF4FUk8KPNsskQfKiNQPFc8_RtAdcoNLnJlzx0iNaruyy4zIPuqPSOAKELAw=w1024-h1024-s-no-gm?authuser=0" },
			{ "chinese": "脱", "english": "Take off", "pinyin": "Tuō", "phrase": ["脱衣", "脱离", "脱口而出"], "sentence": "弟弟进屋以后，把外衣脱了下来。", "image": "images/chars/AP1GczP7KgE4ARZbuCg8lHK4MBnSvDZQZPFh1y8vVjOnlT00QHd9fnvWhY1sfqplefKYz2Wn-cExHmwx-Js8z0uTCpDd_bcNnOQKzZlKQA_8lGZaNmfgUJj521M4Rz_NkFvQkVcau7tIT_ZxRWQK0H-egsWa7A=w1024-h1024-s-no-gm?authuser=0" },
			{ "chinese": "端", "english": "Hold", "pinyin": "Duān", "phrase": ["端着", "端正", "变化多端"], "sentence": "我用双手把一个蛋糕端到桌子上去。", "image": "images/chars/AP1GczOroX6sVkXxgTaO1piukQpFvmQHxl2AZQAbqorZQ_BKZ_3n6pjm6iLqMVUZiwLCEphM0BATWNJl3lSBFdl7ioX8DH_QnudR7eGCjR6idLvjQkFZwCXJ3NrsmOVpC5X0dP3a6vbsJLXxVb4Nb62At5dnrg=w1024-h1024-s-no-gm?authuser=0" },
			{ "chinese": "敲", "english": "Knock", "pinyin": "Qiāo", "phrase": ["敲门", "推敲", "敲山振虎"], "sentence": "有人敲门，爸爸去看谁来了。", "image": "images/chars/AP1GczNPCog7lykfZnp9S4Temz4KVCfmW6IIn4oBQXJlsZuYWUvdcyEVI0mRzZxYE5FwBMIdqbk6SMuThaSwGVtfsJJjjNya-0t0qH3yKRrjZCvaNIL0pIau1XIj7s2rVyKQx-jVtTsQgrY84qIbpaxdYtuLVQ=w1024-h1024-s-no-gm?authuser=0" },
			{ "chinese": "洗", "english": "Wash", "pinyin": "Xǐ", "phrase": ["洗手", "清洗", "碧空如洗"], "sentence": "吃饭前，把手洗干净。", "image": "images/chars/AP1GczME8aIUyUgfCyolX5TTquah66lSErGRV8HpQnHb0AdGDXzYeegg3JBfu9vpfjh-BNsESCJ0847nNtFYYU9aqVcYTsgGVWMX4MaFjmxBdin7rcoT5d1hkmyxAyU4D1_qZEb7pWoMp3iAbG6tvv8AKnkNWw=w1024-h1024-s-no-gm?authuser=0" },
			{ "chinese": "梳", "english": "Comb", "pinyin": "Shū", "phrase": ["梳头", "梳理", "梳洗打扮"], "sentence": "早上起床后，要把头发梳好。", "image": "images/chars/AP1GczM2a7XAlZMAlDgidBKSUiGHgthOxRroB8I_g6wJtK0GQs0JG9adBCnPRLdbGJN3AewDIWmF7ONb0deRtVcKL5LQsos0eIvo7nvDv1MV1udafcPOxwSwgb-ipTKPk2a0xs57NgM6G49lLwtotgb98PtwjA=w1024-h1024-s-no-gm?authuser=0" },
			{ "chinese": "擦", "english": "Wipe", "pinyin": "Cā", "phrase": ["擦洗", "摩擦", "摩拳擦掌"], "sentence": "咱们去把窗户擦干净。", "image": "images/chars/AP1GczOs6hWk4BdsKoXwc_ZyWF0zmGxEpjqcl0wE3TfdB83ABbnt8GaHofWIcdEFU4klv9DhsZUP9op6rbYeYbykDjN3ce79aPa0YJ1hqjRlCKH_tawIkzyUmAcDkKFXMURrchait2j6JyXyzil-vEHSCt1S9Q=w1024-h1024-s-no-gm?authuser=0" },
			{ "chinese": "来", "english": "Come", "pinyin": "Lái", "phrase": ["过来", "起来", "后来居上"], "sentence": "姐姐笑着朝我走过来。", "image": "images/chars/AP1GczNvB65fTcgxk38NWOo5X9aXTmTWwpPy46-LaZ_4n9RAO3hRq3vppx-YARMJbzBifWVaUXbBIErp1kLZqQgIX-5dCe0MgnmL34Cyn6W8VpX_iiAE2thBIKkwFXjpqwoWp7_7OkEibdo5-1HVAybVfFwbdw=w1024-h1024-s-no-gm?authuser=0" },
			{ "chinese": "去", "english": "Go", "pinyin": "Qù", "phrase": ["回去", "去年", "扬长而去"], "sentence": "她向校车走过去。", "image": "images/chars/AP1GczOaGTb_kGLSXLi2tlYrFjURPPTqfKOEF2Ou5Sse5Xk_iSQIjsbpIUJozZ4sQZSTvQjaQ3IGnt6TGdKBk6SzmmwZwDHsAcsyX7rvk4r_1V3gZMwnjNsTG8rrIAzom1_Pdc7zVsb8kT674pbkevkB7i6K2Q=w1024-h1024-s-no-gm?authuser=0" },
			{ "chinese": "洒", "english": "Spill", "pinyin": "Sā", "phrase": ["洒水", "泼洒", "挥洒自如"], "sentence": "我把一整瓶水都洒在桌上了。", "image": "images/chars/AP1GczOTVRBspOLon04RcDmmaJIwQd_10INmjPjTwWlIjzr9ndHgwtRKAQIOakFQI5wBGZPbswzHuB6hMaLGsMJGWao49rV9l9vI1nFKKReoiniAx9dquL919di_gqbXUxPBC6TQUay5u5FftTN-87bz37A86Q=w1024-h1024-s-no-gm?authuser=0" },
			{ "chinese": "摔", "english": "Fall", "pinyin": "Shuāi", "phrase": ["摔倒", "摔破", "破罐破摔"], "sentence": "弟弟在草地上摔了一跤。", "image": "images/chars/AP1GczM3xDhKUUfoWcIhN86154kmZegdOFBzwuAEhZkvw_J-tPr_I5qQvYLKH28_7gbkrueTCplUvT2tFs_cRKbKumAXBC4a8n-bDX0rnXEqHQb9JOUc3o7_mCTOutgxRr8sCuTXz_7495yu6gVlar4LstvZSg=w1024-h1024-s-no-gm?authuser=0" }
		]
	},
	{
		"category": "Adj",
		"cname": "形容词",
		"words": [
			{ "chinese": "大", "english": "Big", "pinyin": "Dà", "phrase": ["大家", "大房子", "大显身手"], "sentence": "篮球比乒乓球大多了。", "image": "images/chars/AP1GczNu44Ka2oYxe4BJ27TsRvNLpjxgVo1eahH9ZZDYAndLJDBVUMAyJdcLXGtFqOwYee29PPH4ysdPF0mp7m0V8vCQfgz2RZWWiVJdzB8B3X1sOAi3KYnmmiNCZS7dgrEmmLtsgnMiu5pWR6A64B_F1Gs7oA=w1024-h1024-s-no-gm?authuser=0" },
			{ "chinese": "小", "english": "Small", "pinyin": "Xiǎo", "phrase": ["小孩", "小人书", "小巧玲珑"], "sentence": "乒乓球比篮球小多了。", "image": "images/chars/AP1GczNu44Ka2oYxe4BJ27TsRvNLpjxgVo1eahH9ZZDYAndLJDBVUMAyJdcLXGtFqOwYee29PPH4ysdPF0mp7m0V8vCQfgz2RZWWiVJdzB8B3X1sOAi3KYnmmiNCZS7dgrEmmLtsgnMiu5pWR6A64B_F1Gs7oA=w1024-h1024-s-no-gm?authuser=0" },
			{ "chinese": "高", "english": "High", "pinyin": "Gāo", "phrase": ["高山", "高兴", "兴高采烈"], "sentence": "这两个大哥哥个子真高。", "image": "images/chars/AP1GczOy08hNlvwVD-ISo1fiFGIAWeMBWVQkCJDzkXQpW3tbErA8Crl9aHlEdSXMfACkNklgBfF-iQBte8O9mEKIiCCSNXmklXB4ZfvMum0x-rLn4wwjPF9WF2vmjwFVnvGsRtwNExJAUcX_Q-l_klq0VT64VQ=w1024-h1024-s-no-gm?authuser=0" },
			{ "chinese": "矮", "english": "Short", "pinyin": "Ǎi", "phrase": ["矮个", "矮小", "高矮不一"], "sentence": "这个小弟弟个矮，以后会长高的。", "image": "images/chars/AP1GczOy08hNlvwVD-ISo1fiFGIAWeMBWVQkCJDzkXQpW3tbErA8Crl9aHlEdSXMfACkNklgBfF-iQBte8O9mEKIiCCSNXmklXB4ZfvMum0x-rLn4wwjPF9WF2vmjwFVnvGsRtwNExJAUcX_Q-l_klq0VT64VQ=w1024-h1024-s-no-gm?authuser=0" },
			{ "chinese": "长", "english": "Long", "pinyin": "Cháng", "phrase": ["很长", "长江", "取长补短"], "sentence": "她的头发很长。", "image": "images/chars/AP1GczNqcEsdYRK78Qt5Lq6CxayoA4If0NS-tQBVydkYyXPrOT6P1Fum0kFipHwcTFsuz1K78_1XceD_soMVXBOQkQuySBfmOeXXrgMqNsXxMwZ8zA97sRSFV-r1VJwFnVaLcD9wwPPy9wyRO_xc3J4AiJk4Rw=w1024-h1024-s-no-gm?authuser=0" },
			{ "chinese": "短", "english": "Short", "pinyin": "Duǎn", "phrase": ["短袖", "短裤", "问长问短"], "sentence": "她的头发很短。", "image": "images/chars/AP1GczNqcEsdYRK78Qt5Lq6CxayoA4If0NS-tQBVydkYyXPrOT6P1Fum0kFipHwcTFsuz1K78_1XceD_soMVXBOQkQuySBfmOeXXrgMqNsXxMwZ8zA97sRSFV-r1VJwFnVaLcD9wwPPy9wyRO_xc3J4AiJk4Rw=w1024-h1024-s-no-gm?authuser=0" },
			{ "chinese": "脏", "english": "Dirty", "pinyin": "Zàng", "phrase": ["脏东西", "肮脏", "贪脏枉法"], "sentence": "吃完饭，桌上很脏。", "image": "images/chars/AP1GczNd0e-wd7w_NmNjTMxgWUZBVT-y6hY93tLiSaFV09kMwaZzGDzo3DAewk-J2Zwpy4f9BcikMhONcN4tBhLL58lMRprFBHF4QSzK4BfnEyM5ekqaqEmjvU4I1ynVdsvlrNXWujljuMT0ePhtkllrr7CsRA=w1024-h1024-s-no-gm?authuser=0" },
			{ "chinese": "净", "english": "Clean", "pinyin": "Jìng", "phrase": ["干净", "净场", "一干二净"], "sentence": "桌子上很干净，放着一盘沙拉。", "image": "images/chars/AP1GczObX2j1myeB_S1B5uzGDLIHL81e07UnIC0UlCUgkzUo-6wXHyAU-cyahdEC7Ca8WFoH24baKR6LCdMW112OIg6fFxJBki27e_oq9f-B2i6qNharD1VNu6JSG1aABAdeRhodnqw2tVPvC77YkapZOP-1pA=w1024-h1024-s-no-gm?authuser=0" },
			{ "chinese": "香", "english": "Fragrant", "pinyin": "Xiāng", "phrase": ["香花", "香气", "香味扑鼻"], "sentence": "奶奶做的面条真香。", "image": "images/chars/AP1GczP69kvkXUoDkDwWGUoKHUn3hF7leKgQ1fXf787uMDWMZlUgUWjX8likL2yZm14wP5pUt3en1FvBYuptXMkystOU7c_NN8R0JKJpi97Nga5CKXHioBECJYLGKxSe2TNu5bBpYaIG8oyRWapqt2yZO-3E4Q=w1024-h1024-s-no-gm?authuser=0" },
			{ "chinese": "臭", "english": "Smelly", "pinyin": "Chòu", "phrase": ["臭味", "臭小子", "臭味相投"], "sentence": "上完厕所把门开着，放放臭味。", "image": "images/chars/AP1GczNunuL3_egh9pmFfxl15wseYeyfiS9fetf8ZKy3jabT917GvPvit0O3p9vNWBhl-fsltPXO000TBQ4yy22KPtTuQzSph9JyRkN_CC9A5U3N2nh_9JRAfEyIhJSPBMcapzMwfeArEbMl7oQNnorFK365PQ=w1024-h1024-s-no-gm?authuser=0" }
		]
	}
]
