const chapterTitles = {
    chapter1: "पाठ 1: मङ्गलम्", chapter2: "पाठ 2: पाटलिपुत्रवैभवम्", chapter3: "पाठ 3: अलसकथा", chapter4: "पाठ 4: संस्कृतसाहित्ये लेखिकाः", chapter5: "पाठ 5: भारतमहिमा", chapter6: "पाठ 6: भारतीयसंस्काराः", chapter7: "पाठ 7: नीतिश्लोकाः", chapter8: "पाठ 8: कर्मवीर कथा", chapter9: "पाठ 9: स्वामी दयानन्दः", chapter10: "पाठ 10: मन्दाकिनीवर्णनम्", chapter11: "पाठ 11: व्याघ्रपथिककथा", chapter12: "पाठ 12: कर्णस्य दानवीरता", chapter13: "पाठ 13: विश्वशान्तिः"
};

const allRawQuestions = {
    chapter1: [
        { question: "‘मङ्गलम्’ पाठ कहाँ से संकलित है?", options: ["वेद से", "पुराण से", "उपनिषद् से", "वेदांग से"], answer: "उपनिषद् से" },
        { question: "मङ्गलम् पाठ में कितने मन्त्र हैं?", options: ["चत्वारः (चार)", "पञ्च (पाँच)", "सप्त (सात)", "अष्ट (आठ)"], answer: "पञ्च (पाँच)" },
        { question: "उपनिषद् के रचनाकार कौन हैं?", options: ["कालिदास", "वाल्मीकि", "वेदव्यास", "चाणक्य"], answer: "वेदव्यास" },
        { question: "अणोः अणीयान् कः?", options: ["आत्मा", "परमात्मा", "संसार", "ईश्वर"], answer: "आत्मा" },
        { question: "किसकी विजय होती है?", options: ["सत्य की", "असत्य की", "धर्म की", "अधर्म की"], answer: "सत्य की" },
        { question: "बहती नदी कहाँ मिलती है?", options: ["सरोवर में", "नदी में", "समुद्र में", "तालाब में"], answer: "समुद्र में" },
        { question: "सत्य का मुख किस पात्र से ढका है?", options: ["हिरण्मय पात्र से", "ताम्र पात्र से", "रजत पात्र से", "लौह पात्र से"], answer: "हिरण्मय पात्र से" },
        { question: "वेदाहमेतं पुरुषं महान्तम्………” यह मन्त्र किस उपनिषद् से लिया गया है?", options: ["कठोपनिषद् से", "श्वेताश्वतरोपनिषद् से", "मुण्डकोपनिषद् से", "ईशावास्योपनिषद् से"], answer: "श्वेताश्वतरोपनिषद् से" },
        { question: "उपनिषद् किसका अंतिम भाग है?", options: ["वैदिक साहित्य का", "आधुनिक साहित्य का", "लौकिक साहित्य का", "रामायण का"], answer: "वैदिक साहित्य का" },
        { question: "आत्मा के गूढ़ रहस्य की किसमें व्याख्या की गई है?", options: ["कठोपनिषद् में", "ईशावास्योपनिषद् में", "श्वेताश्वतरोपनिषद् में", "मुण्डकोपनिषद् में"], answer: "कठोपनिषद् में" },
        { question: "देवलोक का मार्ग किससे प्राप्त होता है?", options: ["सत्य से", "असत्य से", "क्रोध से", "मोह से"], answer: "सत्य से" },
        { question: "नदियाँ नाम और रूप को छोड़कर किसमें मिलती हैं?", options: ["समुद्र में", "मानसरोवर में", "तालाब में", "झील में"], answer: "समुद्र में" },
        { question: "महान् से भी महान् क्या है?", options: ["आत्मा", "देवता", "ऋषि", "दानव"], answer: "आत्मा" },
        { question: "छोटे से भी छोटा कौन है?", options: ["आत्मा", "परमात्मा", "ईश्वर", "संसार"], answer: "आत्मा" },
        { question: "किसकी विजय नहीं होती है?", options: ["सत्य की", "धर्म की", "असत्य की", "शक्ति की"], answer: "असत्य की" }
    ],
    chapter2: [
        { question: "पाटलिपुत्रवैभवम्’ पाठ में किस नगर का वर्णन है?", options: ["भागलपुर का", "वाराणसी का", "पटना का", "इलाहाबाद का"], answer: "पटना का" },
        { question: "मेगास्थनीज पटना किसके समय में आया था?", options: ["अशोक के समय में", "मुगलवंश काल में", "चन्द्रगुप्त मौर्य के समय में", "अंग्रेजों के समय में"], answer: "चन्द्रगुप्त मौर्य के समय में" },
        { question: "पटना में कौमुदी महोत्सव कब मनाया जाता था?", options: ["गुप्तवंश काल में", "मौर्यवंश काल में", "अशोक के शासनकाल में", "अंग्रेजों के शासनकाल में"], answer: "गुप्तवंश काल में" },
        { question: "पाटलिपुत्र पटना के नाम से कब से प्रसिद्ध हुआ?", options: ["मध्यकाल में", "आधुनिक काल में", "गुप्तवंश काल में", "मौर्यवंश काल में"], answer: "मध्यकाल में" },
        { question: "सिखों के दसवें गुरु कौन थे?", options: ["गुरु नानक", "गुरु तेगबहादुर", "गुरु गोविन्द सिंह", "गुरु रामदास"], answer: "गुरु गोविन्द सिंह" },
        { question: "दामोदरगुप्त ने किस काव्य की रचना की?", options: ["काव्यमीमांसा", "कुट्टनीमत", "मुद्राराक्षस", "यात्रा संस्मरण"], answer: "कुट्टनीमत" },
        { question: "किसके काल में पाटलिपुत्र की रक्षा-व्यवस्था उत्कृष्ट थी?", options: ["चन्द्रगुप्त मौर्य", "समुद्रगुप्त", "कुमारगुप्त", "अशोक"], answer: "चन्द्रगुप्त मौर्य" },
        { question: "पटना का इतिहास कितना पुराना है?", options: ["2500 वर्ष", "2000 वर्ष", "1500 वर्ष", "1000 वर्ष"], answer: "2500 वर्ष" },
        { question: "काव्यमीमांसा के रचनाकार कौन हैं?", options: ["दामोदरगुप्त", "राजशेखर", "पाणिनि", "पतंजलि"], answer: "राजशेखर" },
        { question: "गाँधी सेतु पुल कहाँ अवस्थित है?", options: ["सासाराम", "पहाड़पुर", "आरा", "पाटलिपुत्र"], answer: "पाटलिपुत्र" },
        { question: "गोलघर कहाँ अवस्थित है?", options: ["पटना में", "गया में", "नवादा में", "बक्सर में"], answer: "पटना में" },
        { question: "यूनान का राजदूत कौन था?", options: ["फाह्यान", "ह्वेनसांग", "मेगास्थनीज", "इत्सिंग"], answer: "मेगास्थनीज" },
        { question: "पाटलिपुत्र किस नदी के किनारे स्थित है?", options: ["गंगा", "यमुना", "गण्डक", "कोसी"], answer: "गंगा" },
        { question: "गुरु गोविन्द सिंह का जन्म-स्थल कहाँ है?", options: ["पाटलिपुत्रम्", "कलिंगम्", "उत्कल-प्रान्तः", "इनमें से कोई नहीं"], answer: "पाटलिपुत्रम्" },
        { question: "पटना नगर की पालिका देवी कौन हैं?", options: ["शीतला देवी", "काली देवी", "पटन देवी", "गौरी"], answer: "पटन देवी" }
    ],
    chapter3: [
        { question: "‘अलसकथा’ पाठ कहाँ से संकलित है?", options: ["अग्निपुराण से", "पुरुषपरीक्षा से", "रामायण से", "महाभारत से"], answer: "पुरुषपरीक्षा से" },
        { question: "‘अलसकथा’ पाठ के लेखक कौन हैं?", options: ["कालिदास", "विद्यापति", "नारायण पण्डित", "वेदव्यास"], answer: "विद्यापति" },
        { question: "वीरेश्वर कौन था?", options: ["मिथिला का राजा", "मिथिला का मन्त्री", "मिथिला का राजकुमार", "मिथिला का संतरी"], answer: "मिथिला का मन्त्री" },
        { question: "संसार में बच्चों का सच्चा रक्षक कौन है?", options: ["माता", "पिता", "भाई", "बहन"], answer: "माता" },
        { question: "घर में लगी आग को देखकर कौन लोग पलायन हो गए?", options: ["आलसी लोग", "समझदार लोग", "धूर्त लोग", "फुर्तीले लोग"], answer: "धूर्त लोग" },
        { question: "मैथिली कवि कौन था?", options: ["भास", "कालिदास", "विद्यापति", "नारायण पण्डित"], answer: "विद्यापति" },
        { question: "चारों आलसियों को कैसे बाहर किया गया?", options: ["पैर पकड़कर", "हाथ पकड़कर", "केश पकड़कर", "बाँह पकड़कर"], answer: "केश पकड़कर" },
        { question: "अरे हल्ला कैसा?” यह किसने बोला?", options: ["प्रथम पुरुष", "द्वितीय पुरुष", "तृतीय पुरुष", "चतुर्थ पुरुष"], answer: "प्रथम पुरुष" },
        { question: "लगता है इस घर में आग लग गई है” यह किस पुरुष ने कहा?", options: ["प्रथम पुरुष", "द्वितीय पुरुष", "तृतीय पुरुष", "चतुर्थ पुरुष"], answer: "द्वितीय पुरुष" },
        { question: "आलसियों की शरण देने वाला कौन होता है?", options: ["विद्वान", "धूर्त", "कारुणिक", "राजा"], answer: "कारुणिक" },
        { question: "बनावटी आलस्य दिखाकर कौन भोजन ग्रहण करते थे?", options: ["विद्वान", "मूर्ख", "धूर्त", "जानकार"], answer: "धूर्त" },
        { question: "विद्यापति किस भाषा के कवि थे?", options: ["हिन्दी", "संस्कृत", "मैथिली", "भोजपुरी"], answer: "मैथिली" },
        { question: "पुरुषपरीक्षा किस रूप में विभिन्न मानव गुणों के महत्त्व का वर्णन करता है?", options: ["पद्य रूप में", "श्लोक रूप में", "कथा रूप में", "नाटक रूप में"], answer: "कथा रूप में" },
        { question: "नीतिकार आलस्य को क्या मानते हैं?", options: ["गुण", "शत्रु", "मित्र", "धर्म"], answer: "शत्रु" },
        { question: "आलसशाला में आग क्यों लगाई गई?", options: ["आलसियों को भगाने के लिए", "आलसियों की परीक्षा करने के लिए", "आलसशाला की सम्पत्ति हड़पने के लिए", "इनमें से कोई नहीं"], answer: "आलसियों की परीक्षा करने के लिए" }
    ],
    chapter4: [
        { question: "आधुनिक काल की संस्कृत कवयित्री कौन हैं?", options: ["तिरूमलाम्बा", "विजयाङ्का", "पण्डिता क्षमाराव", "सुलभा"], answer: "पण्डिता क्षमाराव" },
        { question: "याज्ञवल्क्य ने अपनी पत्नी को किसकी शिक्षा दी?", options: ["नीति की", "धर्म की", "अर्थ की", "आत्मतत्व की"], answer: "आत्मतत्व की" },
        { question: "विजयाङ्का का काल किस शतक में माना जाता है?", options: ["पंचम", "सप्तम", "नवम", "अष्टम"], answer: "अष्टम" },
        { question: "दक्षिण भारतीय संस्कृत लेखिका कौन हैं?", options: ["शीला भट्टारिका", "रामभद्राम्बा", "देवकुमारिका", "सभी"], answer: "सभी" },
        { question: "समाज की गाड़ी कैसे चलती है?", options: ["पुरुषों से", "नारियों से", "पुरुष और नारी दोनों से", "बच्चों से"], answer: "पुरुष और नारी दोनों से" },
        { question: "‘सर्वशुक्ला सरस्वती’ किसने कहा है?", options: ["याज्ञवल्क्य ने", "बाणभट्ट ने", "जनक ने", "दण्डी ने"], answer: "दण्डी ने" },
        { question: "जनक की सभा में शास्त्रार्थ-कुशल कौन थी?", options: ["सुलभा", "गार्गी", "मैत्रेयी", "यमी"], answer: "गार्गी" },
        { question: "शंकर-चरितम् के रचनाकार कौन हैं?", options: ["पण्डिता क्षमाराव", "वनमाला भवालकर", "विजयाङ्का", "मिथिलेश कुमारी मिश्र"], answer: "पण्डिता क्षमाराव" },
        { question: "ऋग्वेद में कितनी महिला ऋषिकाओं का वर्णन प्राप्त है?", options: ["24", "25", "23", "26"], answer: "24" },
        { question: "मैत्रेयी का वर्णन किस उपनिषद् में मिलता है?", options: ["कठोपनिषद् में", "बृहदारण्यकोपनिषद् में", "मुण्डकोपनिषद् में", "ईशावास्योपनिषद् में"], answer: "बृहदारण्यकोपनिषद् में" },
        { question: "लौकिक संस्कृत साहित्य में लगभग कितनी कवयित्रियों के पद्य मिलते हैं?", options: ["तीस", "चौबीस", "चार सौ", "चालीस"], answer: "चालीस" },
        { question: "याज्ञवल्क्य की पत्नी कौन थी?", options: ["मैत्रेयी", "सुलभा", "देवकुमारिका", "रामभद्राम्बा"], answer: "मैत्रेयी" },
        { question: "अथर्ववेद में कितनी मन्त्रदर्शनवती ऋषिकाओं का उल्लेख है?", options: ["पाँच", "चार", "दो", "तीन"], answer: "पाँच" },
        { question: "पंडिता क्षमाराव द्वारा रचित ‘सत्याग्रह गीता’ किसके दर्शन द्वारा प्रभावित है?", options: ["महात्मा गाँधी", "जवाहरलाल नेहरू", "रानी लक्ष्मीबाई", "इंदिरा गाँधी"], answer: "महात्मा गाँधी" },
        { question: "अच्युतराय की पत्नी कौन थी?", options: ["विजयाङ्का", "तिरूमलाम्बा", "गार्गी", "मैत्रेयी"], answer: "तिरूमलाम्बा" },
        { question: "किस युग में मन्त्रों की दर्शिका न केवल ऋषि, बल्कि ऋषिकाएँ भी थीं?", options: ["सामन्त युग", "कलियुग", "वैदिक युग", "सतयुग"], answer: "वैदिक युग" },
        { question: "गंगा देवी का समय क्या है?", options: ["14वीं सदी", "8वीं सदी", "9वीं सदी", "12वीं सदी"], answer: "14वीं सदी" },
        { question: "‘मधुराविजयम्’ किसकी रचना है?", options: ["तिरूमलाम्बा", "गंगा देवी", "पण्डिता क्षमाराव", "विजयाङ्का"], answer: "गंगा देवी" },
        { question: "‘वनमाला भवालकर’ किस काल की संस्कृत कवयित्री थीं?", options: ["प्राचीन काल", "अतिप्राचीन काल", "मध्यकाल", "वर्तमान काल"], answer: "वर्तमान काल" },
        { question: "चंद्रादित्य किस वंश के राजा थे?", options: ["मौर्य वंश", "गुप्त वंश", "चालुक्य वंश", "मुगल वंश"], answer: "चालुक्य वंश" }
    ],
    chapter5: [
        { question: "भारत महिमा’ पाठ का द्वितीय श्लोक किस पुराण से संकलित है?", options: ["विष्णु पुराण से", "भागवत पुराण से", "पद्म पुराण से", "वायु पुराण से"], answer: "भागवत पुराण से" },
        { question: "भारतभूमि पर जन्म लेने वालों की तुलना किससे की गई है?", options: ["दानव से", "देवता से", "पशु से", "नेता से"], answer: "देवता से" },
        { question: "भारत की शोभा से कौन प्रसन्न होते हैं?", options: ["ईश्वर", "दैत्य", "आलसी", "क्रोधी"], answer: "ईश्वर" },
        { question: "किसकी महिमा सर्वत्र गाई जाती है?", options: ["श्रीलंका की", "भूटान की", "भारत की", "बांग्लादेश की"], answer: "भारत की" },
        { question: "जगत का गौरव कैसा है?", options: ["चौकोर", "गोल", "शोभनीय", "समतल"], answer: "शोभनीय" },
        { question: "पुराण के रचनाकार कौन हैं?", options: ["चाणक्य", "कालिदास", "महर्षि वेदव्यास", "भर्तृहरि"], answer: "महर्षि वेदव्यास" },
        { question: "हम सबों का कर्त्तव्य क्या है?", options: ["राष्ट्रभक्ति", "देशभक्ति", "मित्रभक्ति", "शत्रुभक्ति"], answer: "राष्ट्रभक्ति" },
        { question: "हमारी भारतीय धारा कैसी है?", options: ["हरी-भरी", "ऊँची", "नीची", "विशाला"], answer: "विशाला" },
        { question: "कौन गीत गाते हैं?", options: ["दैत्य", "मानव", "देवता", "दानव"], answer: "देवता" },
        { question: "भारत की महिमा कहाँ गाई जाती है?", options: ["पटना में", "यहाँ", "सर्वत्र", "मथुरा में"], answer: "सर्वत्र" },
        { question: "मोक्ष प्रदान करने वाली भूमि कौन है?", options: ["भारत", "श्रीलंका", "चीन", "इराक"], answer: "भारत" },
        { question: "निर्मला’ का क्या अर्थ है?", options: ["स्वच्छ", "मैला", "सुंदर", "अद्भुत"], answer: "स्वच्छ" },
        { question: "भारत का प्रथम श्लोक कहाँ से लिया गया है?", options: ["विष्णु पुराण से", "भागवत पुराण से", "शिव पुराण से", "गरुड़ पुराण से"], answer: "विष्णु पुराण से" },
        { question: "देवतागण क्या गाते हैं?", options: ["गीत", "लोरी", "स्तुति", "कुछ नहीं"], answer: "गीत" },
        { question: "भारतभूमि किससे सेवित है?", options: ["सागर से", "पर्वत से", "झरना से", "उपर्युक्त सभी"], answer: "उपर्युक्त सभी" }
    ],
    chapter6: [
        { question: "भारतीय संस्काराः’ पाठ भारत के किस व्यक्तित्व की रचना करता है?", options: ["सहज व्यक्तित्व का", "सुन्दर व्यक्तित्व का", "मनोवैज्ञानिक व्यक्तित्व का", "आकर्षक व्यक्तित्व का"], answer: "सहज व्यक्तित्व का" },
        { question: "संस्कार कितने होते हैं?", options: ["16", "12", "14", "6"], answer: "16" },
        { question: "प्राचीन काल में शिष्य को क्या कहते थे?", options: ["छात्र", "ब्रह्मचारी", "धनुर्धारी", "अन्तेवासी"], answer: "ब्रह्मचारी" },
        { question: "विवाह संस्कार के अन्तर्गत क्या नहीं आता है?", options: ["गोदान", "वाग्दान", "कन्यादान", "सिंदूरदान"], answer: "गोदान" },
        { question: "जन्म से पूर्व कितने संस्कार हैं?", options: ["दो", "तीन", "पाँच", "छह"], answer: "तीन" },
        { question: "सप्तपदी क्रिया किस संस्कार में सम्पन्न की जाती है?", options: ["जातकर्म", "निष्क्रमण", "विवाह", "समावर्तन"], answer: "विवाह" },
        { question: "पुंसवन’ संस्कार कब होता है?", options: ["मरणोपरान्त", "जन्मोपरान्त", "जन्म से पहले", "गृहस्थाश्रम में"], answer: "जन्म से पहले" },
        { question: "अन्त्येष्टि संस्कार कब होता है?", options: ["मरने के बाद", "जन्म के पहले", "शिक्षा प्राप्ति के समय", "विवाह के पहले"], answer: "मरने के बाद" },
        { question: "साहित्यिक ग्रन्थों में केशान्त संस्कार का दूसरा नाम क्या है?", options: ["उपनयन", "समावर्तन", "वेदारम्भ", "गोदान"], answer: "गोदान" },
        { question: "भारतीय संस्कृति का परिचय किससे मिलता है?", options: ["संस्कृत से", "ज्ञान से", "संस्कारों से", "विज्ञान से"], answer: "संस्कारों से" },
        { question: "‘सीमन्तोनयन’ किस प्रकार का संस्कार है?", options: ["जन्मपूर्व संस्कार", "शैशव संस्कार", "शैक्षणिक संस्कार", "इनमें से कोई नहीं"], answer: "जन्मपूर्व संस्कार" },
        { question: "गुरु के घर से अलग होकर गृहस्थ जीवन में प्रवेश करना किस संस्कार के अन्तर्गत आता है?", options: ["उपनयन", "समावर्तन", "वेदारम्भ", "विवाह"], answer: "विवाह" },
        { question: "सिन्दूरदान किस संस्कार के अन्तर्गत आता है?", options: ["शैक्षणिक संस्कार", "शैशव संस्कार", "विवाह संस्कार", "जन्मपूर्व संस्कार"], answer: "विवाह संस्कार" },
        { question: "कौन शब्द सीमित व्यंग्य रूप में व्यवहार होता है?", options: ["विकार", "अकार", "संस्कार", "सत्कार"], answer: "संस्कार" },
        { question: "वेदारम्भ करना किस संस्कार के अन्तर्गत है?", options: ["गृहस्थ", "विवाह", "शिक्षा", "जन्म-पूर्व"], answer: "शिक्षा" }
    ],
    chapter7: [
        { question: "‘नीतिश्लोकाः’ पाठ किस ग्रंथ से संकलित है?", options: ["विदुरनीति से", "नीतिशतक से", "चाणक्य नीति-दर्पण से", "शुक्रनीति से"], answer: "विदुरनीति से" },
        { question: "अपनी उन्नति चाहने वालों को कितने दोषों को त्याग देना चाहिए?", options: ["सात", "छह", "पाँच", "आठ"], answer: "छह" },
        { question: "रूप की रक्षा किससे होती है?", options: ["सत्य से", "अभ्यास से", "मृजया (उबटन) से", "आचरण से"], answer: "मृजया (उबटन) से" },
        { question: "विदुरनीति के रचनाकार कौन हैं?", options: ["चाणक्य", "विदुर", "मनु", "वाल्मीकि"], answer: "विदुर" },
        { question: "धर्म की रक्षा किससे होती है?", options: ["सत्य से", "अभ्यास से", "बुद्धि से", "आचरण से"], answer: "सत्य से" },
        { question: "नरक के कितने द्वार होते हैं?", options: ["एक", "दो", "तीन", "चार"], answer: "तीन" },
        { question: "क्षमा किसकी हत्या करती है?", options: ["क्रोध की", "लोभ की", "मोह की", "काम की"], answer: "क्रोध की" },
        { question: "कौन सर्वश्रेष्ठ धन है?", options: ["धर्म", "अर्थ", "काम", "क्रोध"], answer: "धर्म" },
        { question: "किससे सुख की प्राप्ति होती है?", options: ["धर्म से", "अहिंसा से", "काम से", "क्रोध से"], answer: "अहिंसा से" },
        { question: "कौन ऐसा धन है जिससे संतुष्टि मिलती है?", options: ["अर्थ", "धर्म", "विद्या", "क्रोध"], answer: "विद्या" },
        { question: "किससे विद्या की रक्षा होती है?", options: ["सत्य से", "अभ्यास से", "उबटन से", "आचरण से"], answer: "अभ्यास से" },
        { question: "काम, क्रोध और लोभ किसके द्वार हैं?", options: ["स्वर्ग के", "नरक के", "पाताल के", "पृथ्वी के"], answer: "नरक के" },
        { question: "बिना बुलाए कौन आता है?", options: ["सज्जन", "दुर्जन", "मूर्ख", "कोई नहीं"], answer: "मूर्ख" },
        { question: "महाराज धृतराष्ट्र के प्रश्नों का समुचित उत्तर कौन देते हैं?", options: ["मंत्री विदुर", "दुर्योधन", "अर्जुन", "कृष्ण"], answer: "मंत्री विदुर" },
        { question: "सभी जीवों के सत्य को जानने वाला कौन है?", options: ["पंडित", "राजा", "मंत्री", "शिष्य"], answer: "पंडित" },
        { question: "कुल की रक्षा किससे होती है?", options: ["शरीर से", "स्वभाव से", "आचरण से", "धन से"], answer: "आचरण से" }
    ],
    chapter8: [
        { question: "कर्मवीर कथा’ समाज के किस वर्ग की कथा है?", options: ["धनी", "दलित", "कुलीन", "अल्पसंख्यक"], answer: "दलित" },
        { question: "भीखनटोला किस प्रान्त में है?", options: ["बिहार", "उत्तर प्रदेश", "मध्य प्रदेश", "राजस्थान"], answer: "बिहार" },
        { question: "रामप्रवेश राम ने किस परीक्षा में विश्वविद्यालय में प्रथम स्थान प्राप्त किया?", options: ["उच्च विद्यालय की", "स्नातक की", "अन्तरस्नातक की", "केन्द्रीय लोक सेवा की"], answer: "स्नातक की" },
        { question: "कर्मवीर कौन था?", options: ["रामप्रवेश राम", "दुर्योधन", "अर्जुन", "वीरेश्वर"], answer: "रामप्रवेश राम" },
        { question: "कर्मवीर कथा से क्या शिक्षा मिलती है?", options: ["कर्म करने की", "अकर्म करने की", "आलसी बनने की", "भाषण देने की"], answer: "कर्म करने की" },
        { question: "रामप्रवेश के गाँव का क्या नाम था?", options: ["भीखनटोला", "रामपुर", "हरिजनटोला", "नयाटोला"], answer: "भीखनटोला" },
        { question: "कौन स्नान करके हाथ में कुश लिए तालाब के किनारे बोल रहा था?", options: ["व्याघ्र", "भल्लुक", "वानर", "मनुष्य"], answer: "व्याघ्र" },
        { question: "उद्योगिनं पुरुषसिंहमुपैति………..?", options: ["लक्ष्मी", "सरस्वती", "दुर्गा", "गणेश"], answer: "लक्ष्मी" },
        { question: "दलित ग्रामवासी पुरुष की कथा कौन है?", options: ["कर्मवीर कथा", "अलसकथा", "व्याघ्रपथिक कथा", "विश्वशांति"], answer: "कर्मवीर कथा" },
        { question: "शिक्षक ने किसे पढ़ाना आरम्भ किया?", options: ["बालक को", "बालिका को", "महिला को", "रामप्रवेश राम को"], answer: "रामप्रवेश राम को" },
        { question: "किसके अर्थाभाव में भी रामप्रवेश ने महाविद्यालय में प्रवेश पाया?", options: ["पिता के", "माता के", "स्वयं के", "शिक्षक के"], answer: "शिक्षक के" },
        { question: "भीखनटोला गाँव देखने कौन आया था?", options: ["शिक्षक", "नेता", "अभिनेता", "छात्र"], answer: "शिक्षक" },
        { question: "रामप्रवेश राम उच्च विद्यालय में कौन-सा स्थान प्राप्त किया?", options: ["पहला", "दूसरा", "तीसरा", "चौथा"], answer: "पहला" },
        { question: "लक्ष्मी किसका वरण करती है?", options: ["मूर्ख का", "उद्योगी पुरुष का", "लोभी का", "क्रोधी का"], answer: "उद्योगी पुरुष का" },
        { question: "भीखनटोला गाँव से कितनी दूर पर प्राथमिक विद्यालय था?", options: ["एक कोस", "दो कोस", "तीन कोस", "चार कोस"], answer: "एक कोस" }
    ],
    chapter9: [
        { question: "स्वामी दयानन्द’ के बचपन का नाम क्या था?", options: ["शंकर", "शिवशंकर", "मूलशंकर", "उमाशंकर"], answer: "मूलशंकर" },
        { question: "स्वामी दयानन्द का जन्म किस ग्राम में हुआ था?", options: ["झंकारा", "टंकारा", "लंकारा", "अंकारा"], answer: "टंकारा" },
        { question: "‘आर्य समाज’ की स्थापना किस नगर में हुई?", options: ["बंगलुरु", "मद्रास", "मुम्बई", "पटना"], answer: "मुम्बई" },
        { question: "स्वामी दयानन्द का जन्म कब हुआ था?", options: ["1822 ई. में", "1824 ई. में", "1826 ई. में", "1828 ई. में"], answer: "1824 ई. में" },
        { question: "सत्यार्थ प्रकाश’ के रचनाकार कौन हैं?", options: ["स्वामी दयानन्द", "स्वामी विवेकानन्द", "राजा राममोहन राय", "रामकृष्ण परमहंस"], answer: "स्वामी दयानन्द" },
        { question: "स्वामी दयानन्द के गुरु कौन थे?", options: ["रामकृष्ण परमहंस", "विवेकानन्द", "विरजानन्द", "कबीरदास"], answer: "विरजानन्द" },
        { question: "घर छोड़कर घूमते हुए मूलशंकर कहाँ पहुँचे?", options: ["मथुरा", "वृन्दावन", "काशी", "अयोध्या"], answer: "मथुरा" },
        { question: "डी.ए.वी. विद्यालय की स्थापना किसने की?", options: ["स्वामी दयानन्द ने", "स्वामी विरजानन्द ने", "स्वामी दयानन्द के अनुयायियों ने", "राजा राममोहन राय ने"], answer: "स्वामी दयानन्द के अनुयायियों ने" },
        { question: "स्वामी दयानन्द का निधन कब हुआ?", options: ["1880 में", "1883 में", "1885 में", "1887 में"], answer: "1883 में" },
        { question: "समाज सुधारक कौन थे?", options: ["स्वामी दयानन्द", "राधा मोहन ओझा", "पंडित रामस्वरूप शुक्ल", "गणेश ओझा"], answer: "स्वामी दयानन्द" },
        { question: "आर्य समाज’ की स्थापना कब हुई?", options: ["1875 ई. में", "1880 ई. में", "1883 ई. में", "1885 ई. में"], answer: "1875 ई. में" },
        { question: "किसकी शाखा देश-विदेश में है?", options: ["ब्रह्म समाज", "आर्य समाज", "रामकृष्ण मिशन", "प्रार्थना समाज"], answer: "आर्य समाज" },
        { question: "मूलशंकर को किसके प्रति अनास्था हुई?", options: ["दुर्गा पूजा के प्रति", "सूर्य पूजा के प्रति", "मूर्तिपूजा के प्रति", "शास्त्र पूजा के प्रति"], answer: "मूर्तिपूजा के प्रति" },
        { question: "कौन प्रसाद को खा रहा था?", options: ["चूहा", "बाघ", "बैल", "बकरा"], answer: "चूहा" },
        { question: "स्वामी दयानन्द का जन्म किस प्रांत में हुआ था?", options: ["बिहार में", "उत्तर प्रदेश में", "गुजरात में", "महाराष्ट्र में"], answer: "गुजरात में" }
    ],
    chapter10: [
        { question: "मन्दाकिनीवर्णनम्’ पाठ के रचनाकार कौन हैं?", options: ["महात्मा विदुर", "महर्षि वाल्मीकि", "महर्षि वेदव्यास", "महाकवि कालिदास"], answer: "महर्षि वाल्मीकि" },
        { question: "रामायण’ पाठ के रचनाकार कौन हैं?", options: ["सूरदास", "वाल्मीकि", "वेदव्यास", "कालिदास"], answer: "वाल्मीकि" },
        { question: "मन्दाकिनी नदी किस पर्वत के निकट बहती है?", options: ["मलय पर्वत", "मन्दार पर्वत", "चित्रकूट पर्वत", "गृद्धकूट पर्वत"], answer: "चित्रकूट पर्वत" },
        { question: "मन्दाकिनीवर्णनम्’ पाठ रामायण के किस काण्ड से संगृहीत है?", options: ["अरण्य काण्ड से", "अयोध्या काण्ड से", "किष्किन्धा काण्ड से", "सुन्दर काण्ड से"], answer: "अयोध्या काण्ड से" },
        { question: "कालिदास की कौन-सी रचना है?", options: ["रामायण", "हर्षचरित", "रघुवंशम्", "गीत-गोविन्द"], answer: "रघुवंशम्" },
        { question: "सीता, रामचन्द्र की कौन थीं?", options: ["माता", "पुत्री", "बहन", "पत्नी"], answer: "पत्नी" },
        { question: "राम ने विशालाक्षी से किसको सम्बोधित किया है?", options: ["सीता को", "लक्ष्मण को", "हनुमान को", "शत्रुघ्न को"], answer: "सीता को" },
        { question: "जटा और मृगचर्म कौन धारण किए हुए हैं?", options: ["मुनि", "छात्र", "शिक्षक", "राजा"], answer: "मुनि" },
        { question: "दोनों भुजाओं को ऊपर कर कौन उपासना करते हैं?", options: ["देवतागण", "मुनि लोग", "सैनिक", "सीता"], answer: "मुनि लोग" },
        { question: "नाचने के समान कौन प्रतीत होता है?", options: ["पर्वत", "नदी", "वृक्ष", "पक्षी"], answer: "पर्वत" },
        { question: "हंस और सारस से युक्त कौन-सी नदी है?", options: ["मन्दाकिनी", "यमुना", "सरस्वती", "गंगा"], answer: "मन्दाकिनी" },
        { question: "रंग-बिरंगे तटों वाली कौन-सी नदी है?", options: ["यमुना", "सरयू", "मन्दाकिनी", "गण्डक"], answer: "मन्दाकिनी" },
        { question: "अयोध्याकाण्ड किस ग्रन्थ का भाग है?", options: ["रामायण का", "महाभारत का", "रघुवंश का", "भागवत गीता का"], answer: "रामायण का" },
        { question: "रघुवंश काव्य की रचना किसने की है?", options: ["महात्मा विदुर ने", "महर्षि वाल्मीकि ने", "महर्षि वेदव्यास ने", "कालिदास ने"], answer: "कालिदास ने" },
        { question: "मन्दाकिनी नदी में कौन स्नान करते हैं?", options: ["पक्षी", "नर", "ऋषि", "पशु"], answer: "ऋषि" },
        { question: "राम, मन्दाकिनी नदी किसको दिखा रहे हैं?", options: ["सीता को", "लक्ष्मण को", "भरत को", "विभीषण को"], answer: "सीता को" }
    ],
    chapter11: [
        { question: "व्याघ्रपथिककथा’ हितोपदेश के किस भाग से संकलित है?", options: ["मित्रलाभ", "सुहृदभेद", "विग्रह", "सन्धि"], answer: "मित्रलाभ" },
        { question: "‘इदं सुवर्णकङ्कणं गृह्यताम्’ यह उक्ति किसकी है?", options: ["पथिक की", "कथाकार की", "बाघ की", "दानी की"], answer: "बाघ की" },
        { question: "किसके बिना ज्ञान भार होता है?", options: ["क्रिया के बिना", "ध्यान के बिना", "सम्मान के बिना", "धन के बिना"], answer: "क्रिया के बिना" },
        { question: "हितोपदेश’ के रचनाकार कौन हैं?", options: ["विष्णुशर्मा", "नारायण पण्डित", "दण्डी", "बाणभट्ट"], answer: "नारायण पण्डित" },
        { question: "बूढ़े बाघ के हाथ में क्या था?", options: ["सोने का कंगन", "चाँदी का कंगन", "ताँबे का कंगन", "लकड़ी का कंगन"], answer: "सोने का कंगन" },
        { question: "पथिक कहाँ फँस गया?", options: ["नदी में", "तालाब में", "कीचड़ में", "गंगा तट पर"], answer: "कीचड़ में" },
        { question: "पथिक को किसने मारा?", options: ["व्याघ्र ने", "सिंह ने", "मनुष्य ने", "सर्प ने"], answer: "व्याघ्र ने" },
        { question: "कौन वंशहीन था?", options: ["व्याघ्र", "दुर्जन", "सज्जन", "पथिक"], answer: "व्याघ्र" },
        { question: "दानशील कौन था?", options: ["व्याघ्र", "दुर्जन", "सज्जन", "दानव"], answer: "व्याघ्र" },
        { question: "अविश्वासी पात्र पर विश्वास करने से क्या होता है?", options: ["लाभ", "हानि", "ज्ञानी", "मूर्ख"], answer: "हानि" },
        { question: "मैं वंशहीन हूँ, किसने कहा?", options: ["पथिक", "बाघ", "राजा", "लेखक"], answer: "बाघ" },
        { question: "‘व्याघ्रपथिककथा’ पाठ में किसके दुष्परिणाम का वर्णन किया गया है?", options: ["क्रोध", "लोभ", "मोह", "काम"], answer: "लोभ" },
        { question: "दवा किसका मित्र है?", options: ["रोगी का", "निरोगी का", "स्वस्थ का", "राजा का"], answer: "रोगी का" },
        { question: "भाग्य से ही क्या संभव है?", options: ["अनहोनी", "असंभव", "संभव", "असंभव"], answer: "असंभव" },
        { question: "पथिक स्नान करने कहाँ गया?", options: ["तालाब में", "नदी में", "झरने में", "समुद्र में"], answer: "तालाब में" }
    ],
    chapter12: [
        { question: "कर्णस्य दानवीरता’ पाठ किस ग्रन्थ से संकलित है?", options: ["कर्णभार से", "वासवदत्ता से", "प्रतिमानाटक से", "मृच्छकटिक से"], answer: "कर्णभार से" },
        { question: "‘कर्णभार’ नाटक किसकी रचना है?", options: ["भास की", "कालिदास की", "तुलसीदास की", "मैथिलीशरण गुप्त की"], answer: "भास की" },
        { question: "कर्ण किसका पुत्र था?", options: ["कुन्ती का", "कौशल्या का", "कैकेयी का", "शकुन्तला का"], answer: "कुन्ती का" },
        { question: "‘न दातव्यं, न दातव्यं’ यह किसने कहा?", options: ["शक्र ने", "कर्ण ने", "शल्य ने", "कृष्ण ने"], answer: "शल्य ने" },
        { question: "कर्ण ने कवच-कुण्डल देने से पूर्व अन्ततः क्या देने की इच्छा प्रकट की?", options: ["स्वर्ण", "पृथ्वी", "अपना सिर", "चाँदी"], answer: "अपना सिर" },
        { question: "कर्ण किस देश का राजा था?", options: ["अंग", "मगध", "मिथिला", "काशी"], answer: "अंग" },
        { question: "समय परिवर्तन के साथ कौन नष्ट हो जाता है?", options: ["शिक्षा", "भिक्षा", "धन", "सभी"], answer: "शिक्षा" },
        { question: "इन्द्र किस रूप में कर्ण के समक्ष आया?", options: ["साधु", "पाचक", "दाता", "ब्राह्मण"], answer: "ब्राह्मण" },
        { question: "कर्ण के कवच-कुण्डल की क्या विशेषता थी?", options: ["वह बड़ा था", "उसे भेदा नहीं जा सकता था", "वह सोने का था", "वह अति सुन्दर था"], answer: "उसे भेदा नहीं जा सकता था" },
        { question: "कर्ण शक्र को चौथी बार क्या देना चाहा?", options: ["हाथी", "घोड़ा", "गाय", "सोना"], answer: "सोना" },
        { question: "‘महत्तरां भिक्षां याचे’ यह किसकी उक्ति है?", options: ["कर्ण की", "शल्य की", "शक्र की", "कृष्ण की"], answer: "शक्र की" },
        { question: "सूर्यपुत्र कौन था?", options: ["भीम", "अर्जुन", "कर्ण", "युधिष्ठिर"], answer: "कर्ण" },
        { question: "भास के कितने नाटक हैं?", options: ["10", "13", "15", "11"], answer: "13" },
        { question: "ब्राह्मण के वेष में कौन प्रवेश करता है?", options: ["शक्र", "कर्ण", "शल्य", "अर्जुन"], answer: "शक्र" },
        { question: "कर्ण सर्वप्रथम शक्र को क्या देना चाहा?", options: ["गाय", "हाथी", "घोड़ा", "सोना"], answer: "गाय" }
    ],
    chapter13: [
        { question: "विश्वशान्तिः’ पाठ में किस वातावरण का चित्रण किया गया है?", options: ["अशान्ति", "शान्ति", "देशभक्ति", "वैज्ञानिक"], answer: "अशान्ति" },
        { question: "दुःख का विषय क्या है?", options: ["भ्रान्ति", "शान्ति", "अशान्ति", "क्रान्ति"], answer: "अशान्ति" },
        { question: "अशान्ति मानवता का क्या कर रही है?", options: ["उन्नति", "विनाश", "ऊपर", "नीचे"], answer: "विनाश" },
        { question: "किसके बिना ज्ञान भारस्वरूप है?", options: ["शास्त्र", "विवेक", "व्यवहार", "पुस्तक"], answer: "व्यवहार" },
        { question: "क्रिया के बिना क्या भार है?", options: ["धन", "दौलत", "ज्ञान", "सम्पत्ति"], answer: "ज्ञान" },
        { question: "अनेकों राज्यों में परस्पर क्या चल रहे हैं?", options: ["उष्ण युद्ध", "अस्त्र युद्ध", "शस्त्र युद्ध", "शीत युद्ध"], answer: "शीत युद्ध" },
        { question: "शत्रुता को कौन बढ़ाता है?", options: ["स्वार्थ", "परार्थ", "परमार्थ", "लोक कल्याण"], answer: "स्वार्थ" },
        { question: "‘वसुधैव कुटुम्बकम्’ की भावना को कौन जन्म देता है?", options: ["उदार हृदय", "संकीर्ण हृदय", "विशाल हृदय", "शांत हृदय"], answer: "उदार हृदय" },
        { question: "एक देश दूसरे देश की उन्नति देखकर क्या करता है?", options: ["प्रेम", "लड़ाई", "ईर्ष्या", "शांति वार्ता"], answer: "ईर्ष्या" },
        { question: "हम सबों को किसका त्याग करना चाहिए?", options: ["परमार्थ का", "स्वार्थ का", "दूसरे का", "लोक कल्याण का"], answer: "स्वार्थ का" },
        { question: "किससे असहिष्णुता जन्म लेती है?", options: ["प्रेम से", "करुणा से", "द्वेष से", "क्षमा से"], answer: "द्वेष से" },
        { question: "किससे शान्ति होती है?", options: ["अपकार से", "परोपकार से", "स्वार्थ से", "क्रोध से"], answer: "परोपकार से" },
        { question: "अशान्ति के कितने कारण हैं?", options: ["एक", "दो", "तीन", "चार"], answer: "दो" },
        { question: "‘शान्ति का कारण क्या है?", options: ["स्वार्थ", "परोपकार", "परपीडन", "असहिष्णुता"], answer: "परोपकार" },
        { question: "वैरेण वैरस्य शमनम् असम्भवम्’ यह किसकी उक्ति है?", options: ["महात्मा बुद्ध", "भगवान महावीर", "चन्द्रगुप्त", "कर्ण"], answer: "महात्मा बुद्ध" }
    ]
};

// ===================================================================================
// QUIZ APPLICATION LOGIC (Don't edit below this line)
// ===================================================================================
document.addEventListener('DOMContentLoaded', () => {
    // DOM Elements
    const screens = { home: document.getElementById('home-screen'), parts: document.getElementById('parts-screen'), start: document.getElementById('start-screen'), quiz: document.getElementById('quiz-screen'), result: document.getElementById('result-screen'), review: document.getElementById('review-screen') };
    const chapterListEl = document.getElementById('chapter-list');
    const partsChapterTitleEl = document.getElementById('parts-chapter-title');
    const partListEl = document.getElementById('part-list');
    const backToPartsBtn = document.getElementById('back-to-parts-btn');
    const backToHomeBtn = document.getElementById('back-to-home-btn');
    const homeFromResultBtn = document.getElementById('home-from-result-btn');
    const startTitle = document.getElementById('start-title');
    const questionCountInfo = document.getElementById('question-count-info');
    const timeSelect = document.getElementById('time-select');
    const shuffleToggle = document.getElementById('shuffle-toggle');
    const startBtn = document.getElementById('start-btn');
    const quizHeaderTitle = document.getElementById('quiz-header-title');
    const questionCounter = document.getElementById('question-counter');
    const timerDisplay = document.getElementById('timer');
    const questionText = document.getElementById('question-text');
    const optionsContainer = document.getElementById('options-container');
    const feedback = document.getElementById('feedback');
    const prevBtn = document.getElementById('prev-btn');
    const skipBtn = document.getElementById('skip-btn');
    const submitQuizBtn = document.getElementById('submit-quiz-btn');
    const starRating = document.getElementById('star-rating');
    const resultSummary = document.getElementById('result-summary');
    const correctCountEl = document.getElementById('correct-count');
    const incorrectCountEl = document.getElementById('incorrect-count');
    const percentageEl = document.getElementById('percentage');
    const reviewBtn = document.getElementById('review-btn');
    const restartBtn = document.getElementById('restart-btn');
    const reviewHeaderTitle = document.getElementById('review-header-title');
    const reviewQuestionText = document.getElementById('review-question-text');
    const reviewOptionsContainer = document.getElementById('review-options-container');
    const reviewCounter = document.getElementById('review-counter');
    const prevReviewBtn = document.getElementById('prev-review-btn');
    const nextReviewBtn = document.getElementById('next-review-btn');
    const backToResultsBtn = document.getElementById('back-to-results-btn');

    // State Variables
    let currentChapterKey, currentPartIndex, partQuestions, quizData, currentQuestionIndex, timer, userAnswers, incorrectAnswerIndices, reviewIndex;

    // --- Core Functions ---
    function showScreen(screenName) {
        for (const key in screens) { screens[key].classList.add('hidden'); }
        screens[screenName].classList.remove('hidden');
    }

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    // --- Screen Rendering ---
    function renderChapterList() {
        chapterListEl.innerHTML = '';
        for (const key in chapterTitles) {
            const li = document.createElement('li');
            li.className = 'list-item';
            li.innerHTML = `<div>${chapterTitles[key]}</div>`;
            li.onclick = () => showPartsScreen(key);
            chapterListEl.appendChild(li);
        }
        showScreen('home');
    }

    function showPartsScreen(chapterKey) {
        currentChapterKey = chapterKey;
        partsChapterTitleEl.textContent = chapterTitles[chapterKey];
        partListEl.innerHTML = '';
        const questions = allRawQuestions[chapterKey];
        if (!questions) {
            partListEl.innerHTML = "<li><div>इस अध्याय के लिए प्रश्न उपलब्ध नहीं हैं।</div></li>";
            showScreen('parts');
            return;
        }
        const partSize = 15;
        const totalParts = Math.ceil(questions.length / partSize);
        for (let i = 0; i < totalParts; i++) {
            const startNum = i * partSize + 1;
            const endNum = Math.min((i + 1) * partSize, questions.length);
            const li = document.createElement('li');
            li.className = 'list-item';
            li.innerHTML = `<div>भाग ${i + 1} (प्रश्न ${startNum} - ${endNum})</div>`;
            li.onclick = () => showStartScreen(i);
            partListEl.appendChild(li);
        }
        showScreen('parts');
    }
    
    function showStartScreen(partIndex) {
        currentPartIndex = partIndex;
        const partSize = 15;
        const startIndex = currentPartIndex * partSize;
        const endIndex = startIndex + partSize;
        partQuestions = allRawQuestions[currentChapterKey].slice(startIndex, endIndex);
        startTitle.textContent = `${chapterTitles[currentChapterKey]} - भाग ${currentPartIndex + 1}`;
        questionCountInfo.textContent = partQuestions.length;
        backToPartsBtn.onclick = () => showPartsScreen(currentChapterKey);
        showScreen('start');
    }

    // --- Quiz Logic ---
    function startQuiz() {
        if (shuffleToggle.checked) { quizData = shuffleArray([...partQuestions]); } else { quizData = [...partQuestions]; }
        const selectedTime = parseInt(timeSelect.value);
        currentQuestionIndex = 0;
        userAnswers = new Array(quizData.length).fill(null);
        incorrectAnswerIndices = [];
        quizHeaderTitle.textContent = `${chapterTitles[currentChapterKey]} - भाग ${currentPartIndex + 1}`;
        showScreen('quiz');
        loadQuestion(selectedTime);
    }
    
    function loadQuestion(timeLimit) {
        clearStatus();
        const currentQuestion = quizData[currentQuestionIndex];
        questionCounter.innerText = `${currentQuestionIndex + 1} / ${quizData.length}`;
        questionText.innerText = currentQuestion.question;
        optionsContainer.innerHTML = '';
        currentQuestion.options.forEach(optionText => {
            const li = document.createElement('li');
            li.innerText = optionText;
            li.className = 'option';
            li.onclick = () => selectOption(li, optionText);
            optionsContainer.appendChild(li);
        });
        prevBtn.disabled = currentQuestionIndex === 0;
        startTimer(timeLimit);
    }
    
    function startTimer(timeLimit) {
        clearInterval(timer);
        const timerContainer = document.querySelector('.timer-settings-container');
        if (timeLimit <= 0) { timerContainer.classList.add('hidden'); return; }
        timerContainer.classList.remove('hidden');
        let timeLeft = timeLimit;
        timerDisplay.innerText = `00:${timeLeft < 10 ? '0' : ''}${timeLeft}`;
        timer = setInterval(() => {
            timeLeft--;
            timerDisplay.innerText = `00:${timeLeft < 10 ? '0' : ''}${timeLeft}`;
            if (timeLeft <= 0) {
                clearInterval(timer);
                feedback.innerText = "समय समाप्त!";
                feedback.style.color = '#dc3545';
                showCorrectAnswer();
                setTimeout(goToNextQuestion, 2000);
            }
        }, 1000);
    }
    
    function selectOption(selectedLi, selectedOption) {
        if (optionsContainer.querySelector('.disabled')) return;
        clearInterval(timer);
        userAnswers[currentQuestionIndex] = selectedOption;
        document.querySelectorAll('#quiz-screen .option').forEach(opt => opt.classList.add('disabled'));
        const correctAnswr = quizData[currentQuestionIndex].answer;
        if (selectedOption === correctAnswr) {
            selectedLi.classList.add('correct');
            feedback.innerText = "सही जवाब!";
            feedback.style.color = '#28a745';
        } else {
            selectedLi.classList.add('wrong');
            document.querySelectorAll('#quiz-screen .option').forEach(opt => { if (opt.innerText === correctAnswr) opt.classList.add('correct'); });
            feedback.innerText = `गलत! सही उत्तर हाइलाइट किया गया है।`;
            feedback.style.color = '#dc3545';
        }
        setTimeout(goToNextQuestion, 2000);
    }
    
    function showCorrectAnswer() {
        const correctAnswr = quizData[currentQuestionIndex].answer;
        document.querySelectorAll('#quiz-screen .option').forEach(opt => { opt.classList.add('disabled'); if (opt.innerText === correctAnswr) opt.classList.add('correct'); });
    }

    function goToNextQuestion() {
        if (currentQuestionIndex < quizData.length - 1) { currentQuestionIndex++; loadQuestion(parseInt(timeSelect.value)); } else { showResults(); }
    }
    
    function showPreviousQuestion() {
        if (currentQuestionIndex > 0) { clearInterval(timer); currentQuestionIndex--; loadQuestion(parseInt(timeSelect.value)); }
    }
    
    function clearStatus() { feedback.innerText = ''; }
    
    function showResults() {
        clearInterval(timer);
        let correctAnswers = 0;
        incorrectAnswerIndices = [];
        userAnswers.forEach((answer, index) => { if (answer === quizData[index].answer) correctAnswers++; else if (answer !== null) incorrectAnswerIndices.push(index); });
        const incorrectAnswersCount = userAnswers.filter(a => a !== null).length - correctAnswers;
        const percentage = quizData.length > 0 ? Math.round((correctAnswers / quizData.length) * 100) : 0;
        resultSummary.innerText = 'आपका प्रदर्शन';
        correctCountEl.innerHTML = `<strong>सही:</strong> ${correctAnswers}`;
        incorrectCountEl.innerHTML = `<strong>गलत:</strong> ${incorrectAnswersCount}`;
        percentageEl.innerHTML = `<strong>अंक:</strong> ${percentage}%`;
        displayStars(percentage);
        if (incorrectAnswerIndices.length > 0) reviewBtn.classList.remove('hidden'); else reviewBtn.classList.add('hidden');
        showScreen('result');
    }
    
    function displayStars(percentage) {
        let starHTML = '';
        let filledStars = 0;
        if (percentage >= 90) filledStars = 5; else if (percentage >= 70) filledStars = 4; else if (percentage >= 50) filledStars = 3; else if (percentage >= 30) filledStars = 2; else if (percentage > 0) filledStars = 1;
        for(let i=0; i<5; i++) starHTML += `<span class="star ${i < filledStars ? '' : 'empty'}">★</span>`;
        starRating.innerHTML = starHTML;
    }
    
    function startReview() {
        reviewIndex = 0;
        reviewHeaderTitle.textContent = `${chapterTitles[currentChapterKey]} - गलत उत्तर`;
        showScreen('review');
        loadReviewQuestion();
    }
    
    function loadReviewQuestion() {
        const questionDataIndex = incorrectAnswerIndices[reviewIndex];
        const question = quizData[questionDataIndex];
        const userAnswer = userAnswers[questionDataIndex];
        reviewQuestionText.innerText = `प्रश्न: ${question.question}`;
        reviewOptionsContainer.innerHTML = '';
        question.options.forEach(option => {
            const li = document.createElement('li');
            li.innerText = option;
            li.className = 'option disabled';
            if (option === question.answer) li.classList.add('correct');
            else if (option === userAnswer) li.classList.add('wrong');
            reviewOptionsContainer.appendChild(li);
        });
        reviewCounter.innerText = `${reviewIndex + 1} / ${incorrectAnswerIndices.length}`;
        prevReviewBtn.disabled = reviewIndex === 0;
        nextReviewBtn.disabled = reviewIndex === incorrectAnswerIndices.length - 1;
    }

    // --- Event Listeners ---
    startBtn.addEventListener('click', startQuiz);
    prevBtn.addEventListener('click', showPreviousQuestion);
    skipBtn.addEventListener('click', () => { clearInterval(timer); goToNextQuestion(); });
    submitQuizBtn.addEventListener('click', showResults);
    restartBtn.addEventListener('click', () => showStartScreen(currentPartIndex));
    reviewBtn.addEventListener('click', startReview);
    backToResultsBtn.addEventListener('click', () => showScreen('result'));
    prevReviewBtn.addEventListener('click', () => { if(reviewIndex > 0) { reviewIndex--; loadReviewQuestion(); } });
    nextReviewBtn.addEventListener('click', () => { if(reviewIndex < incorrectAnswerIndices.length - 1) { reviewIndex++; loadReviewQuestion(); } });
    backToHomeBtn.addEventListener('click', () => renderChapterList());
    homeFromResultBtn.addEventListener('click', () => renderChapterList());

    // --- Initial Load ---
    renderChapterList();
});
</script>
</body>
</html>