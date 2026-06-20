// ============================================================
// i18n.js — Shared translation + language auto-detection
// U.S. Visa Processing Portal
// ============================================================

const PT_COUNTRIES = ['PT','BR','AO','MZ','CV','GW','ST','TL']; // Portuguese-speaking
const ES_COUNTRIES = ['ES','MX','AR','CO','PE','VE','CL','EC','GT','CU','BO','DO','HN','PY','SV','NI','CR','PA','UY','GQ']; // Spanish-speaking

const TRANSLATIONS = {
en: {
  nav: { home:'Home', apply:'Apply', status:'Track Status', biometric:'Biometric', startApp:'Start Application →', back:'← Back to Home' },
  gov: 'An official website of the United States Government',
  hero: {
    eyebrow:'Official U.S. Visa Processing Portal',
    title1:'Your Journey to the', title2:'United States', titleEnd:'Begins Here',
    subtitle:'Apply for your U.S. visa, upload required documents, pay your fees, and schedule your biometric appointment — all in one secure portal.',
    startBtn:'▶ Start Your Application', viewBtn:'View Visa Types',
    trackPlaceholder:'Enter Reference No. e.g. US-2024-XXXXXX', trackBtn:'Track →'
  },
  alert: 'Notice: All visa applicants must complete biometric enrollment at a designated U.S. Embassy or Consulate. Appointments can be scheduled through this portal after fee payment.',
  steps: {
    label:'Application Process', title:'How the Visa Process Works', subtitle:'A straightforward five-step process from application to approval.',
    s1t:'Complete Application', s1d:'Fill out the DS-160 online nonimmigrant visa application form with your personal information.',
    s2t:'Upload Documents', s2d:'Submit your passport, photo, financial statements, and supporting documents securely.',
    s3t:'Pay Visa Fee', s3d:'Pay the non-refundable MRV fee online. Fees vary by visa category and nationality.',
    s4t:'Biometric Enrollment', s4d:'Schedule and attend your biometric appointment at the nearest U.S. Embassy or Consulate.',
    s5t:'Visa Decision', s5d:'Receive your visa decision via email and track your passport delivery through this portal.'
  },
  visaTypes: {
    label:'Visa Categories', title:'Select Your Visa Type', subtitle:'Choose the category that best matches your purpose of travel to the United States.',
    b1b2t:'Visitor Visa', b1b2d:'For tourism, business meetings, medical treatment, or visiting friends and family.',
    f1t:'Student Visa', f1d:'For academic studies at accredited U.S. universities, colleges, and language programs.',
    h1bt:'Work Visa', h1bd:'For specialty occupation workers sponsored by a U.S. employer in a qualifying field.',
    j1t:'Exchange Visitor', j1d:'For exchange programs, research scholars, professors, au pairs, and camp counselors.',
    o1t:'Extraordinary Ability', o1d:'For individuals with extraordinary ability or achievement in sciences, arts, education, business or athletics.',
    l1t:'Intracompany Transfer', l1d:'For managers, executives, or specialized knowledge workers transferred within the same company.',
    fee:'MRV Fee'
  },
  features: {
    label:'Portal Features', title:'Everything You Need, Online',
    f1t:'Secure & Encrypted', f1d:'All data is encrypted end-to-end. Your personal information is protected under U.S. federal privacy law.',
    f2t:'Document Upload', f2d:'Upload passport scans, photos, financial statements, and supporting documents in PDF, JPG, or PNG format.',
    f3t:'Online Fee Payment', f3d:'Pay your MRV fee securely using international cards, bank transfers, or mobile payment options.',
    f4t:'Biometric Scheduling', f4d:'Book your biometric appointment at any U.S. Embassy or Consulate after completing your application.',
    f5t:'Real-Time Tracking', f5d:'Monitor your application status at every stage using your unique reference number.',
    f6t:'24/7 Availability', f6d:'Start or continue your application at any time from anywhere in the world.'
  },
  cta: { title:'Ready to Start Your U.S. Visa Application?', subtitle:'Complete your application online in under 30 minutes. Have your passport and travel plans ready.', btn:'Begin Application Now →' },
  footer: {
    desc:'An official service of the U.S. Department of State, Bureau of Consular Affairs.',
    applyH:'Apply', newApp:'New Application', trackApp:'Track Application', bookBio:'Biometric Appointment',
    typesH:'Visa Types', resourcesH:'Resources', docsLink:'Required Documents', feeLink:'Fee Schedule', embassyLink:'Embassy Locations', faqLink:'FAQs',
    bottom:'This is an official U.S. Government website.', privacy:'Privacy Policy', accessibility:'Accessibility'
  },
  apply: {
    pTitle:'Personal Information', pSub:"Enter your name exactly as it appears on your passport.",
    lastName:'Surname / Last Name', firstName:'First / Given Name', middleName:'Middle Name',
    dob:'Date of Birth', gender:'Gender', birthCountry:'Country of Birth', citizenship:'Country of Citizenship',
    contactTitle:'Contact Information', contactSub:'Your primary email will be used for all official correspondence.',
    email:'Email Address', phone:'Phone Number', homeAddress:'Home Address',
    passportTitle:'Passport Information', passportSub:'Enter details from your current, valid passport.',
    passportNum:'Passport Number', passportType:'Passport Type', passportIssue:'Issue Date', passportExpiry:'Expiry Date', passportCountry:'Issuing Country',
    next1:'Next: Travel Info →',
    travelTitle:'Travel Information', travelSub:'Provide details about your intended visit to the United States.',
    visaCategory:'Visa Category', purpose:'Purpose of Visit', arrival:'Intended Arrival Date', departure:'Intended Departure Date', usAddress:'U.S. Address During Visit',
    financeTitle:'Financial Information', funder:'Who is paying for your trip?', tripCost:'Estimated Trip Cost (USD)',
    sponsorQ:'Do you have a U.S. sponsor?', sponsorYes:'Yes, I have a U.S. sponsor', sponsorNo:'No sponsor', sponsorInfo:'Sponsor Name & Contact',
    back:'← Back', next2:'Next: Background →',
    bgTitle:'Background & Security Questions', bgSub:'Answer all questions truthfully. False statements may result in visa denial.',
    bgNotice:'U.S. law requires truthful answers. Misrepresentation is a federal offense under 18 U.S.C. §1001.',
    q1:'Have you ever been refused a U.S. visa or been refused admission to the United States?',
    q2:'Have you ever been arrested, cited, or convicted for any offense or crime, even if subject to a pardon?',
    q3:'Have you ever violated the terms of a U.S. visa?',
    q4:'Do you have a communicable disease of public health significance?',
    q5:'Have you ever been a member of a terrorist organization?',
    yes:'Yes', no:'No',
    empTitle:'Employment Information', occupation:'Current Occupation', employer:'Employer / School Name', jobDesc:'Brief description of your work / studies',
    next3:'Next: Documents →',
    docTitle:'Document Upload', docSub:'Upload clear scans or photos. Accepted formats: PDF, JPG, PNG. Max 5MB per file.',
    next4:'Next: Review →',
    reviewTitle:'Review & Submit', reviewSub:'Review your information before submitting. You will be redirected to pay the MRV fee.',
    certify:'I certify that all information provided is true and accurate. I understand that false statements may result in visa denial and criminal prosecution.',
    submitBtn:'Submit & Pay Fee →',
    successTitle:'Application Submitted Successfully', successSub:'Your reference number is:',
    successHint:'Save this reference number. You will need it to track your application, schedule your biometric appointment, and collect your visa.',
    nextEmail:'Check Email', nextEmailD:'Confirmation sent to your registered email address.',
    nextPay:'Pay MRV Fee', nextPayD:'Your fee payment is being processed. Check your email for receipt.',
    nextBio:'Book Biometric', nextBioD:'Schedule your fingerprint & photo appointment at a U.S. Embassy.',
    nextTrack:'Track Status', nextTrackD:'Monitor your application using your reference number.',
    trackBtn:'Track My Application', bookBtn:'Book Biometric →',
    docs:{ passport:'Passport Bio Page', photo:'Passport-Style Photo', financial:'Bank Statements / Financial Proof', employment:'Employment Letter / Enrollment Proof', itinerary:'Travel Itinerary / Hotel Booking', sponsor_letter:'Sponsor Letter (if applicable)',
      notUploaded:'Not uploaded', uploading:'Uploading...', uploaded:'Uploaded', failed:'Failed — retry', uploadBtn:'Upload', tooLarge:'File too large. Maximum is 5MB.', fillRequired:'Please fill in all required fields.' },
    review:{ fullName:'Full Name', dob:'Date of Birth', citizenship:'Citizenship', email:'Email', phone:'Phone', passportNum:'Passport No.', passportExpiry:'Passport Expiry', visaCategory:'Visa Category', purpose:'Purpose', arrival:'Arrival Date', departure:'Departure Date', docsUploaded:'Documents Uploaded', fee:'MRV Fee (USD)', certifyAlert:'Please certify that your information is accurate before submitting.', processing:'Processing...', paymentFailed:'Payment was not completed. Please try again.' }
  },
  status: {
    title:'Track Your Application', subtitle:'Enter your reference number to view real-time application status.',
    placeholder:'e.g. US-2024-A1B2C3', trackBtn:'Track Status', hint:'Your reference number was provided after submitting your application.',
    notFound:'No application found', notFoundD:'Please check your reference number and try again.',
    error:'Unable to retrieve application', errorD:'Please try again in a moment.',
    visaCategory:'Visa Category', submitted:'Submitted', feeStatus:'Fee Status', paid:'Paid', pending:'Pending',
    bioStatus:'Biometric', scheduled:'Scheduled', notScheduled:'Not scheduled',
    scheduleBtn:'Schedule Biometric →', homeBtn:'Back to Home',
    t1t:'Application Submitted', t1d:'Your DS-160 application has been received.',
    t2t:'Fee Payment Confirmed', t2d:'MRV fee payment has been processed successfully.',
    t3t:'Biometric Appointment', t3d:'Biometric enrollment scheduled or completed.',
    t4t:'Application Under Review', t4d:'Consular officer is reviewing your application.',
    t5t:'Final Decision', t5d:'Visa approved or denied — check email for details.',
    statusLabels:{ pending_payment:'Pending Payment', payment_received:'Payment Received', biometric_scheduled:'Biometric Scheduled', under_review:'Under Review', approved:'Approved', denied:'Denied' }
  },
  biometric: {
    title:'Biometric Appointment', subtitle:'Schedule your fingerprint and photo enrollment at a U.S. Embassy or Consulate near you.',
    refLabel:'Application Reference Number', findBtn:'Find Application',
    notice:'Biometric appointments require fee payment to be completed. Bring your passport and printed confirmation to your appointment.',
    captureTitle:'Biometric Photo Capture', captureSub:"Complete a quick guided photo capture. You'll be asked to look straight, turn your head, and blink — this is reviewed by an officer before your in-person appointment.",
    camNotice:'Camera access is required for biometric photo capture. Your photos are stored securely and only visible to consular staff.',
    enableCam:'Enable Camera →',
    iFront:'Look straight at the camera', iRight:'Slowly turn your head to the right', iLeft:'Slowly turn your head to the left', iBlink:'Blink both eyes, then look straight',
    captureComplete:'Biometric photo capture complete', retake:'Retake photos',
    locTitle:'Select Embassy / Consulate', dateTitle:'Select Date', timeTitle:'Select Time',
    bringTitle:'What to Bring',
    bring1:'Valid passport (original)', bring2:'Printed appointment confirmation', bring3:'Application reference number', bring4:'Visa fee payment receipt', bring5:'One passport-style photograph',
    confirmBtn:'Confirm Biometric Appointment →',
    notFound:'Application not found. Please check your reference number.',
    feeRequired:'Fee payment must be completed before scheduling biometrics.', completePayment:'Complete payment →',
    alreadyScheduled:'Your biometric appointment is already scheduled.',
    confirmedTitle:'Appointment Confirmed', emailSent:'A confirmation email has been sent. Please arrive 15 minutes early with all required documents.',
    trackBtn:'Track Application'
  }
},
pt: {
  nav: { home:'Início', apply:'Solicitar', status:'Acompanhar Status', biometric:'Biometria', startApp:'Iniciar Solicitação →', back:'← Voltar ao Início' },
  gov: 'Um site oficial do Governo dos Estados Unidos',
  hero: {
    eyebrow:'Portal Oficial de Processamento de Vistos dos EUA',
    title1:'Sua Jornada para os', title2:'Estados Unidos', titleEnd:'Começa Aqui',
    subtitle:'Solicite seu visto americano, envie os documentos necessários, pague as taxas e agende seu atendimento biométrico — tudo em um portal seguro.',
    startBtn:'▶ Iniciar Sua Solicitação', viewBtn:'Ver Tipos de Visto',
    trackPlaceholder:'Digite o Número de Referência, ex: US-2024-XXXXXX', trackBtn:'Acompanhar →'
  },
  alert: 'Aviso: Todos os solicitantes de visto devem concluir o cadastro biométrico em uma Embaixada ou Consulado dos EUA designado. Os agendamentos podem ser feitos por este portal após o pagamento da taxa.',
  steps: {
    label:'Processo de Solicitação', title:'Como Funciona o Processo de Visto', subtitle:'Um processo simples de cinco etapas, da solicitação à aprovação.',
    s1t:'Preencher Solicitação', s1d:'Preencha o formulário DS-160 de solicitação de visto de não-imigrante com suas informações pessoais.',
    s2t:'Enviar Documentos', s2d:'Envie seu passaporte, foto, comprovantes financeiros e documentos de apoio com segurança.',
    s3t:'Pagar Taxa do Visto', s3d:'Pague a taxa MRV não reembolsável online. As taxas variam de acordo com a categoria de visto e nacionalidade.',
    s4t:'Cadastro Biométrico', s4d:'Agende e compareça ao seu atendimento biométrico na Embaixada ou Consulado dos EUA mais próximo.',
    s5t:'Decisão do Visto', s5d:'Receba a decisão do seu visto por e-mail e acompanhe a entrega do seu passaporte por este portal.'
  },
  visaTypes: {
    label:'Categorias de Visto', title:'Selecione o Tipo de Visto', subtitle:'Escolha a categoria que melhor corresponde ao seu propósito de viagem aos Estados Unidos.',
    b1b2t:'Visto de Visitante', b1b2d:'Para turismo, reuniões de negócios, tratamento médico ou visita a amigos e familiares.',
    f1t:'Visto de Estudante', f1d:'Para estudos acadêmicos em universidades, faculdades e programas de idiomas credenciados nos EUA.',
    h1bt:'Visto de Trabalho', h1bd:'Para trabalhadores de ocupação especializada patrocinados por um empregador dos EUA em área qualificada.',
    j1t:'Visitante de Intercâmbio', j1d:'Para programas de intercâmbio, pesquisadores, professores, au pairs e monitores de acampamento.',
    o1t:'Habilidade Extraordinária', o1d:'Para indivíduos com habilidade ou conquista extraordinária em ciências, artes, educação, negócios ou esportes.',
    l1t:'Transferência Intracompanhia', l1d:'Para gerentes, executivos ou trabalhadores de conhecimento especializado transferidos dentro da mesma empresa.',
    fee:'Taxa MRV'
  },
  features: {
    label:'Recursos do Portal', title:'Tudo o que Você Precisa, Online',
    f1t:'Seguro e Criptografado', f1d:'Todos os dados são criptografados de ponta a ponta. Suas informações pessoais são protegidas pela lei federal de privacidade dos EUA.',
    f2t:'Envio de Documentos', f2d:'Envie cópias de passaporte, fotos, comprovantes financeiros e documentos de apoio em PDF, JPG ou PNG.',
    f3t:'Pagamento Online', f3d:'Pague sua taxa MRV com segurança usando cartões internacionais, transferências bancárias ou pagamento móvel.',
    f4t:'Agendamento Biométrico', f4d:'Agende seu atendimento biométrico em qualquer Embaixada ou Consulado dos EUA após concluir sua solicitação.',
    f5t:'Acompanhamento em Tempo Real', f5d:'Monitore o status da sua solicitação em cada etapa usando seu número de referência exclusivo.',
    f6t:'Disponível 24/7', f6d:'Inicie ou continue sua solicitação a qualquer momento, de qualquer lugar do mundo.'
  },
  cta: { title:'Pronto para Iniciar sua Solicitação de Visto Americano?', subtitle:'Conclua sua solicitação online em menos de 30 minutos. Tenha seu passaporte e planos de viagem em mãos.', btn:'Iniciar Solicitação Agora →' },
  footer: {
    desc:'Um serviço oficial do Departamento de Estado dos EUA, Bureau de Assuntos Consulares.',
    applyH:'Solicitar', newApp:'Nova Solicitação', trackApp:'Acompanhar Solicitação', bookBio:'Atendimento Biométrico',
    typesH:'Tipos de Visto', resourcesH:'Recursos', docsLink:'Documentos Necessários', feeLink:'Tabela de Taxas', embassyLink:'Localização de Embaixadas', faqLink:'Perguntas Frequentes',
    bottom:'Este é um site oficial do Governo dos Estados Unidos.', privacy:'Política de Privacidade', accessibility:'Acessibilidade'
  },
  apply: {
    pTitle:'Informações Pessoais', pSub:'Digite seu nome exatamente como aparece no seu passaporte.',
    lastName:'Sobrenome', firstName:'Primeiro Nome', middleName:'Nome do Meio',
    dob:'Data de Nascimento', gender:'Gênero', birthCountry:'País de Nascimento', citizenship:'País de Cidadania',
    contactTitle:'Informações de Contato', contactSub:'Seu e-mail principal será usado para toda correspondência oficial.',
    email:'Endereço de E-mail', phone:'Número de Telefone', homeAddress:'Endereço Residencial',
    passportTitle:'Informações do Passaporte', passportSub:'Insira os dados do seu passaporte atual e válido.',
    passportNum:'Número do Passaporte', passportType:'Tipo de Passaporte', passportIssue:'Data de Emissão', passportExpiry:'Data de Validade', passportCountry:'País Emissor',
    next1:'Próximo: Informações de Viagem →',
    travelTitle:'Informações de Viagem', travelSub:'Forneça detalhes sobre sua visita pretendida aos Estados Unidos.',
    visaCategory:'Categoria de Visto', purpose:'Propósito da Visita', arrival:'Data Prevista de Chegada', departure:'Data Prevista de Partida', usAddress:'Endereço nos EUA Durante a Visita',
    financeTitle:'Informações Financeiras', funder:'Quem está pagando pela sua viagem?', tripCost:'Custo Estimado da Viagem (USD)',
    sponsorQ:'Você tem um patrocinador nos EUA?', sponsorYes:'Sim, tenho um patrocinador nos EUA', sponsorNo:'Sem patrocinador', sponsorInfo:'Nome e Contato do Patrocinador',
    back:'← Voltar', next2:'Próximo: Antecedentes →',
    bgTitle:'Perguntas de Antecedentes e Segurança', bgSub:'Responda todas as perguntas com sinceridade. Declarações falsas podem resultar em negação do visto.',
    bgNotice:'A lei dos EUA exige respostas verdadeiras. Declarações falsas são crime federal segundo 18 U.S.C. §1001.',
    q1:'Você já teve um visto americano negado ou já foi recusado entrada nos Estados Unidos?',
    q2:'Você já foi preso, citado ou condenado por algum delito ou crime, mesmo que perdoado?',
    q3:'Você já violou os termos de um visto americano?',
    q4:'Você possui alguma doença transmissível de relevância para a saúde pública?',
    q5:'Você já foi membro de alguma organização terrorista?',
    yes:'Sim', no:'Não',
    empTitle:'Informações de Emprego', occupation:'Ocupação Atual', employer:'Nome do Empregador / Instituição de Ensino', jobDesc:'Breve descrição do seu trabalho / estudos',
    next3:'Próximo: Documentos →',
    docTitle:'Envio de Documentos', docSub:'Envie cópias ou fotos nítidas. Formatos aceitos: PDF, JPG, PNG. Máximo 5MB por arquivo.',
    next4:'Próximo: Revisão →',
    reviewTitle:'Revisão e Envio', reviewSub:'Revise suas informações antes de enviar. Você será redirecionado para pagar a taxa MRV.',
    certify:'Certifico que todas as informações fornecidas são verdadeiras e precisas. Entendo que declarações falsas podem resultar em negação do visto e ação penal.',
    submitBtn:'Enviar e Pagar Taxa →',
    successTitle:'Solicitação Enviada com Sucesso', successSub:'Seu número de referência é:',
    successHint:'Guarde este número de referência. Você precisará dele para acompanhar sua solicitação, agendar seu atendimento biométrico e retirar seu visto.',
    nextEmail:'Verifique o E-mail', nextEmailD:'Confirmação enviada para seu e-mail cadastrado.',
    nextPay:'Pagar Taxa MRV', nextPayD:'Seu pagamento está sendo processado. Verifique seu e-mail para o recibo.',
    nextBio:'Agendar Biometria', nextBioD:'Agende seu atendimento de impressão digital e foto em uma Embaixada dos EUA.',
    nextTrack:'Acompanhar Status', nextTrackD:'Monitore sua solicitação usando seu número de referência.',
    trackBtn:'Acompanhar Minha Solicitação', bookBtn:'Agendar Biometria →',
    docs:{ passport:'Página de Dados do Passaporte', photo:'Foto Estilo Passaporte', financial:'Extratos Bancários / Comprovante Financeiro', employment:'Carta de Emprego / Comprovante de Matrícula', itinerary:'Itinerário de Viagem / Reserva de Hotel', sponsor_letter:'Carta do Patrocinador (se aplicável)',
      notUploaded:'Não enviado', uploading:'Enviando...', uploaded:'Enviado', failed:'Falhou — tentar novamente', uploadBtn:'Enviar', tooLarge:'Arquivo muito grande. Máximo é 5MB.', fillRequired:'Por favor, preencha todos os campos obrigatórios.' },
    review:{ fullName:'Nome Completo', dob:'Data de Nascimento', citizenship:'Cidadania', email:'E-mail', phone:'Telefone', passportNum:'Nº do Passaporte', passportExpiry:'Validade do Passaporte', visaCategory:'Categoria de Visto', purpose:'Propósito', arrival:'Data de Chegada', departure:'Data de Partida', docsUploaded:'Documentos Enviados', fee:'Taxa MRV (USD)', certifyAlert:'Por favor, certifique que suas informações estão corretas antes de enviar.', processing:'Processando...', paymentFailed:'O pagamento não foi concluído. Tente novamente.' }
  },
  status: {
    title:'Acompanhe Sua Solicitação', subtitle:'Digite seu número de referência para ver o status em tempo real.',
    placeholder:'ex: US-2024-A1B2C3', trackBtn:'Acompanhar Status', hint:'Seu número de referência foi fornecido após o envio da sua solicitação.',
    notFound:'Nenhuma solicitação encontrada', notFoundD:'Verifique seu número de referência e tente novamente.',
    error:'Não foi possível recuperar a solicitação', errorD:'Tente novamente em instantes.',
    visaCategory:'Categoria de Visto', submitted:'Enviado', feeStatus:'Status da Taxa', paid:'Pago', pending:'Pendente',
    bioStatus:'Biometria', scheduled:'Agendado', notScheduled:'Não agendado',
    scheduleBtn:'Agendar Biometria →', homeBtn:'Voltar ao Início',
    t1t:'Solicitação Enviada', t1d:'Sua solicitação DS-160 foi recebida.',
    t2t:'Pagamento da Taxa Confirmado', t2d:'O pagamento da taxa MRV foi processado com sucesso.',
    t3t:'Atendimento Biométrico', t3d:'Cadastro biométrico agendado ou concluído.',
    t4t:'Solicitação em Análise', t4d:'Um oficial consular está analisando sua solicitação.',
    t5t:'Decisão Final', t5d:'Visto aprovado ou negado — verifique seu e-mail para detalhes.',
    statusLabels:{ pending_payment:'Pagamento Pendente', payment_received:'Pagamento Recebido', biometric_scheduled:'Biometria Agendada', under_review:'Em Análise', approved:'Aprovado', denied:'Negado' }
  },
  biometric: {
    title:'Atendimento Biométrico', subtitle:'Agende seu cadastro de impressão digital e foto em uma Embaixada ou Consulado dos EUA perto de você.',
    refLabel:'Número de Referência da Solicitação', findBtn:'Buscar Solicitação',
    notice:'Atendimentos biométricos exigem que o pagamento da taxa esteja concluído. Leve seu passaporte e a confirmação impressa ao atendimento.',
    captureTitle:'Captura de Foto Biométrica', captureSub:'Conclua uma rápida captura de foto guiada. Você será solicitado a olhar para frente, virar a cabeça e piscar — isso é revisado por um oficial antes do seu atendimento presencial.',
    camNotice:'O acesso à câmera é necessário para a captura da foto biométrica. Suas fotos são armazenadas com segurança e visíveis apenas para a equipe consular.',
    enableCam:'Ativar Câmera →',
    iFront:'Olhe diretamente para a câmera', iRight:'Vire a cabeça lentamente para a direita', iLeft:'Vire a cabeça lentamente para a esquerda', iBlink:'Pisque os dois olhos e depois olhe para frente',
    captureComplete:'Captura de foto biométrica concluída', retake:'Refazer fotos',
    locTitle:'Selecionar Embaixada / Consulado', dateTitle:'Selecionar Data', timeTitle:'Selecionar Horário',
    bringTitle:'O que Levar',
    bring1:'Passaporte válido (original)', bring2:'Confirmação de agendamento impressa', bring3:'Número de referência da solicitação', bring4:'Comprovante de pagamento da taxa', bring5:'Uma foto no estilo passaporte',
    confirmBtn:'Confirmar Atendimento Biométrico →',
    notFound:'Solicitação não encontrada. Verifique seu número de referência.',
    feeRequired:'O pagamento da taxa deve ser concluído antes de agendar a biometria.', completePayment:'Concluir pagamento →',
    alreadyScheduled:'Seu atendimento biométrico já está agendado.',
    confirmedTitle:'Atendimento Confirmado', emailSent:'Um e-mail de confirmação foi enviado. Chegue com 15 minutos de antecedência com todos os documentos necessários.',
    trackBtn:'Acompanhar Solicitação'
  }
},
es: {
  nav: { home:'Inicio', apply:'Solicitar', status:'Consultar Estado', biometric:'Biometría', startApp:'Iniciar Solicitud →', back:'← Volver al Inicio' },
  gov: 'Un sitio web oficial del Gobierno de los Estados Unidos',
  hero: {
    eyebrow:'Portal Oficial de Procesamiento de Visas de EE. UU.',
    title1:'Tu Camino hacia los', title2:'Estados Unidos', titleEnd:'Comienza Aquí',
    subtitle:'Solicita tu visa estadounidense, sube los documentos requeridos, paga tus tarifas y programa tu cita biométrica — todo en un portal seguro.',
    startBtn:'▶ Iniciar Tu Solicitud', viewBtn:'Ver Tipos de Visa',
    trackPlaceholder:'Ingresa el Número de Referencia, ej: US-2024-XXXXXX', trackBtn:'Consultar →'
  },
  alert: 'Aviso: Todos los solicitantes de visa deben completar el registro biométrico en una Embajada o Consulado de EE. UU. designado. Las citas se pueden programar a través de este portal después del pago de la tarifa.',
  steps: {
    label:'Proceso de Solicitud', title:'Cómo Funciona el Proceso de Visa', subtitle:'Un proceso sencillo de cinco pasos, desde la solicitud hasta la aprobación.',
    s1t:'Completar Solicitud', s1d:'Complete el formulario DS-160 de solicitud de visa de no inmigrante en línea con su información personal.',
    s2t:'Subir Documentos', s2d:'Envíe su pasaporte, foto, estados financieros y documentos de respaldo de forma segura.',
    s3t:'Pagar Tarifa de Visa', s3d:'Pague la tarifa MRV no reembolsable en línea. Las tarifas varían según la categoría de visa y la nacionalidad.',
    s4t:'Registro Biométrico', s4d:'Programe y asista a su cita biométrica en la Embajada o Consulado de EE. UU. más cercano.',
    s5t:'Decisión de Visa', s5d:'Reciba la decisión de su visa por correo electrónico y rastree la entrega de su pasaporte a través de este portal.'
  },
  visaTypes: {
    label:'Categorías de Visa', title:'Selecciona Tu Tipo de Visa', subtitle:'Elige la categoría que mejor coincida con tu propósito de viaje a los Estados Unidos.',
    b1b2t:'Visa de Visitante', b1b2d:'Para turismo, reuniones de negocios, tratamiento médico o visitas a amigos y familiares.',
    f1t:'Visa de Estudiante', f1d:'Para estudios académicos en universidades, colegios y programas de idiomas acreditados en EE. UU.',
    h1bt:'Visa de Trabajo', h1bd:'Para trabajadores de ocupación especializada patrocinados por un empleador de EE. UU. en un campo calificado.',
    j1t:'Visitante de Intercambio', j1d:'Para programas de intercambio, investigadores, profesores, au pairs y consejeros de campamento.',
    o1t:'Habilidad Extraordinaria', o1d:'Para personas con habilidad o logro extraordinario en ciencias, artes, educación, negocios o deportes.',
    l1t:'Transferencia Intracompañía', l1d:'Para gerentes, ejecutivos o trabajadores de conocimiento especializado transferidos dentro de la misma empresa.',
    fee:'Tarifa MRV'
  },
  features: {
    label:'Funciones del Portal', title:'Todo lo que Necesitas, En Línea',
    f1t:'Seguro y Encriptado', f1d:'Todos los datos están encriptados de extremo a extremo. Tu información personal está protegida por la ley federal de privacidad de EE. UU.',
    f2t:'Carga de Documentos', f2d:'Sube escaneos de pasaporte, fotos, estados financieros y documentos de respaldo en formato PDF, JPG o PNG.',
    f3t:'Pago de Tarifas en Línea', f3d:'Paga tu tarifa MRV de forma segura usando tarjetas internacionales, transferencias bancarias u opciones de pago móvil.',
    f4t:'Programación Biométrica', f4d:'Reserva tu cita biométrica en cualquier Embajada o Consulado de EE. UU. después de completar tu solicitud.',
    f5t:'Seguimiento en Tiempo Real', f5d:'Monitorea el estado de tu solicitud en cada etapa usando tu número de referencia único.',
    f6t:'Disponible 24/7', f6d:'Inicia o continúa tu solicitud en cualquier momento desde cualquier parte del mundo.'
  },
  cta: { title:'¿Listo para Iniciar tu Solicitud de Visa Estadounidense?', subtitle:'Completa tu solicitud en línea en menos de 30 minutos. Ten tu pasaporte y planes de viaje listos.', btn:'Comenzar Solicitud Ahora →' },
  footer: {
    desc:'Un servicio oficial del Departamento de Estado de EE. UU., Oficina de Asuntos Consulares.',
    applyH:'Solicitar', newApp:'Nueva Solicitud', trackApp:'Rastrear Solicitud', bookBio:'Cita Biométrica',
    typesH:'Tipos de Visa', resourcesH:'Recursos', docsLink:'Documentos Requeridos', feeLink:'Tabla de Tarifas', embassyLink:'Ubicación de Embajadas', faqLink:'Preguntas Frecuentes',
    bottom:'Este es un sitio web oficial del Gobierno de los Estados Unidos.', privacy:'Política de Privacidad', accessibility:'Accesibilidad'
  },
  apply: {
    pTitle:'Información Personal', pSub:'Ingresa tu nombre exactamente como aparece en tu pasaporte.',
    lastName:'Apellido', firstName:'Primer Nombre', middleName:'Segundo Nombre',
    dob:'Fecha de Nacimiento', gender:'Género', birthCountry:'País de Nacimiento', citizenship:'País de Ciudadanía',
    contactTitle:'Información de Contacto', contactSub:'Tu correo electrónico principal se usará para toda la correspondencia oficial.',
    email:'Correo Electrónico', phone:'Número de Teléfono', homeAddress:'Dirección de Domicilio',
    passportTitle:'Información del Pasaporte', passportSub:'Ingresa los datos de tu pasaporte actual y válido.',
    passportNum:'Número de Pasaporte', passportType:'Tipo de Pasaporte', passportIssue:'Fecha de Emisión', passportExpiry:'Fecha de Vencimiento', passportCountry:'País Emisor',
    next1:'Siguiente: Información de Viaje →',
    travelTitle:'Información de Viaje', travelSub:'Proporciona detalles sobre tu visita prevista a los Estados Unidos.',
    visaCategory:'Categoría de Visa', purpose:'Propósito de la Visita', arrival:'Fecha de Llegada Prevista', departure:'Fecha de Salida Prevista', usAddress:'Dirección en EE. UU. Durante la Visita',
    financeTitle:'Información Financiera', funder:'¿Quién paga tu viaje?', tripCost:'Costo Estimado del Viaje (USD)',
    sponsorQ:'¿Tienes un patrocinador en EE. UU.?', sponsorYes:'Sí, tengo un patrocinador en EE. UU.', sponsorNo:'Sin patrocinador', sponsorInfo:'Nombre y Contacto del Patrocinador',
    back:'← Atrás', next2:'Siguiente: Antecedentes →',
    bgTitle:'Preguntas de Antecedentes y Seguridad', bgSub:'Responde todas las preguntas con sinceridad. Las declaraciones falsas pueden resultar en la negación de la visa.',
    bgNotice:'La ley de EE. UU. requiere respuestas veraces. La tergiversación es un delito federal según 18 U.S.C. §1001.',
    q1:'¿Alguna vez se le ha negado una visa estadounidense o se le ha negado la entrada a los Estados Unidos?',
    q2:'¿Alguna vez ha sido arrestado, citado o condenado por algún delito, incluso si fue indultado?',
    q3:'¿Alguna vez ha violado los términos de una visa estadounidense?',
    q4:'¿Padece alguna enfermedad transmisible de importancia para la salud pública?',
    q5:'¿Alguna vez ha sido miembro de una organización terrorista?',
    yes:'Sí', no:'No',
    empTitle:'Información Laboral', occupation:'Ocupación Actual', employer:'Nombre del Empleador / Institución Educativa', jobDesc:'Breve descripción de tu trabajo / estudios',
    next3:'Siguiente: Documentos →',
    docTitle:'Carga de Documentos', docSub:'Sube escaneos o fotos claras. Formatos aceptados: PDF, JPG, PNG. Máximo 5MB por archivo.',
    next4:'Siguiente: Revisión →',
    reviewTitle:'Revisión y Envío', reviewSub:'Revisa tu información antes de enviarla. Serás redirigido para pagar la tarifa MRV.',
    certify:'Certifico que toda la información proporcionada es verdadera y precisa. Entiendo que las declaraciones falsas pueden resultar en la negación de la visa y un proceso penal.',
    submitBtn:'Enviar y Pagar Tarifa →',
    successTitle:'Solicitud Enviada con Éxito', successSub:'Tu número de referencia es:',
    successHint:'Guarda este número de referencia. Lo necesitarás para rastrear tu solicitud, programar tu cita biométrica y recoger tu visa.',
    nextEmail:'Revisa tu Correo', nextEmailD:'Confirmación enviada a tu correo electrónico registrado.',
    nextPay:'Pagar Tarifa MRV', nextPayD:'Tu pago se está procesando. Revisa tu correo para el recibo.',
    nextBio:'Reservar Biometría', nextBioD:'Programa tu cita de huellas dactilares y foto en una Embajada de EE. UU.',
    nextTrack:'Rastrear Estado', nextTrackD:'Monitorea tu solicitud usando tu número de referencia.',
    trackBtn:'Rastrear Mi Solicitud', bookBtn:'Reservar Biometría →',
    docs:{ passport:'Página de Datos del Pasaporte', photo:'Foto Tipo Pasaporte', financial:'Estados de Cuenta / Comprobante Financiero', employment:'Carta de Empleo / Comprobante de Matrícula', itinerary:'Itinerario de Viaje / Reserva de Hotel', sponsor_letter:'Carta del Patrocinador (si aplica)',
      notUploaded:'No subido', uploading:'Subiendo...', uploaded:'Subido', failed:'Falló — reintentar', uploadBtn:'Subir', tooLarge:'Archivo demasiado grande. El máximo es 5MB.', fillRequired:'Por favor completa todos los campos requeridos.' },
    review:{ fullName:'Nombre Completo', dob:'Fecha de Nacimiento', citizenship:'Ciudadanía', email:'Correo Electrónico', phone:'Teléfono', passportNum:'Núm. de Pasaporte', passportExpiry:'Vencimiento del Pasaporte', visaCategory:'Categoría de Visa', purpose:'Propósito', arrival:'Fecha de Llegada', departure:'Fecha de Salida', docsUploaded:'Documentos Subidos', fee:'Tarifa MRV (USD)', certifyAlert:'Por favor certifica que tu información es correcta antes de enviar.', processing:'Procesando...', paymentFailed:'El pago no se completó. Inténtalo de nuevo.' }
  },
  status: {
    title:'Rastrea Tu Solicitud', subtitle:'Ingresa tu número de referencia para ver el estado en tiempo real.',
    placeholder:'ej: US-2024-A1B2C3', trackBtn:'Consultar Estado', hint:'Tu número de referencia se proporcionó después de enviar tu solicitud.',
    notFound:'No se encontró ninguna solicitud', notFoundD:'Verifica tu número de referencia e inténtalo de nuevo.',
    error:'No se pudo recuperar la solicitud', errorD:'Inténtalo de nuevo en un momento.',
    visaCategory:'Categoría de Visa', submitted:'Enviada', feeStatus:'Estado de la Tarifa', paid:'Pagada', pending:'Pendiente',
    bioStatus:'Biometría', scheduled:'Programada', notScheduled:'No programada',
    scheduleBtn:'Programar Biometría →', homeBtn:'Volver al Inicio',
    t1t:'Solicitud Enviada', t1d:'Tu solicitud DS-160 ha sido recibida.',
    t2t:'Pago de Tarifa Confirmado', t2d:'El pago de la tarifa MRV se ha procesado con éxito.',
    t3t:'Cita Biométrica', t3d:'Registro biométrico programado o completado.',
    t4t:'Solicitud en Revisión', t4d:'Un oficial consular está revisando tu solicitud.',
    t5t:'Decisión Final', t5d:'Visa aprobada o denegada — revisa tu correo para más detalles.',
    statusLabels:{ pending_payment:'Pago Pendiente', payment_received:'Pago Recibido', biometric_scheduled:'Biometría Programada', under_review:'En Revisión', approved:'Aprobada', denied:'Denegada' }
  },
  biometric: {
    title:'Cita Biométrica', subtitle:'Programa tu registro de huellas dactilares y foto en una Embajada o Consulado de EE. UU. cerca de ti.',
    refLabel:'Número de Referencia de la Solicitud', findBtn:'Buscar Solicitud',
    notice:'Las citas biométricas requieren que el pago de la tarifa esté completo. Lleva tu pasaporte y la confirmación impresa a tu cita.',
    captureTitle:'Captura de Foto Biométrica', captureSub:'Completa una captura de foto guiada rápida. Se te pedirá mirar al frente, girar la cabeza y parpadear — esto es revisado por un oficial antes de tu cita presencial.',
    camNotice:'Se requiere acceso a la cámara para la captura de foto biométrica. Tus fotos se almacenan de forma segura y solo son visibles para el personal consular.',
    enableCam:'Activar Cámara →',
    iFront:'Mira directamente a la cámara', iRight:'Gira la cabeza lentamente hacia la derecha', iLeft:'Gira la cabeza lentamente hacia la izquierda', iBlink:'Parpadea ambos ojos y luego mira al frente',
    captureComplete:'Captura de foto biométrica completa', retake:'Repetir fotos',
    locTitle:'Seleccionar Embajada / Consulado', dateTitle:'Seleccionar Fecha', timeTitle:'Seleccionar Hora',
    bringTitle:'Qué Traer',
    bring1:'Pasaporte válido (original)', bring2:'Confirmación de cita impresa', bring3:'Número de referencia de la solicitud', bring4:'Comprobante de pago de la tarifa', bring5:'Una fotografía tipo pasaporte',
    confirmBtn:'Confirmar Cita Biométrica →',
    notFound:'Solicitud no encontrada. Verifica tu número de referencia.',
    feeRequired:'El pago de la tarifa debe completarse antes de programar la biometría.', completePayment:'Completar pago →',
    alreadyScheduled:'Tu cita biométrica ya está programada.',
    confirmedTitle:'Cita Confirmada', emailSent:'Se ha enviado un correo de confirmación. Llega 15 minutos antes con todos los documentos requeridos.',
    trackBtn:'Rastrear Solicitud'
  }
}
};

function t(key, lang){
  const parts = key.split('.');
  let obj = TRANSLATIONS[lang] || TRANSLATIONS.en;
  for(const p of parts){ obj = obj ? obj[p] : undefined; }
  if(obj !== undefined) return obj;
  let fallback = TRANSLATIONS.en;
  for(const p of parts){ fallback = fallback ? fallback[p] : undefined; }
  return fallback !== undefined ? fallback : key;
}

function applyTranslations(lang){
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    el.textContent = t(el.getAttribute('data-i18n'), lang);
  });
  document.querySelectorAll('[data-i18n-html]').forEach(el=>{
    el.innerHTML = t(el.getAttribute('data-i18n-html'), lang);
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el=>{
    el.placeholder = t(el.getAttribute('data-i18n-placeholder'), lang);
  });
  document.querySelectorAll('.lang-switch-btn').forEach(b=>{
    b.classList.toggle('active', b.dataset.lang===lang);
  });
}

async function detectLanguage(){
  const saved = localStorage.getItem('visa_lang');
  if(saved) return saved;
  try{
    const res = await fetch('https://ipapi.co/json/');
    const data = await res.json();
    const cc = (data.country_code||'').toUpperCase();
    if(PT_COUNTRIES.includes(cc)) return 'pt';
    if(ES_COUNTRIES.includes(cc)) return 'es';
  } catch(e){ /* geolocation lookup failed — fall back to English */ }
  return 'en';
}

window.getCurrentLang = function(){
  return localStorage.getItem('visa_lang') || 'en';
};

window.setLanguage = function(lang){
  localStorage.setItem('visa_lang', lang);
  applyTranslations(lang);
};

window.initI18n = async function(){
  const lang = await detectLanguage();
  applyTranslations(lang);
  return lang;
};
