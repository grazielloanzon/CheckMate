/* ==========================================================================
   INITIALIZATION & SEED DATA
   ========================================================================== */

function initializeSharedEvents() {
    const SEED_VERSION = '3';

    const communityEvents = [
        {
            id: 1001,
            title: "Free Legal Assistance",
            date: "2026-07-31",
            startTime: "10:00",
            endTime: "12:00",
            location: "Barangay San Dionisio Session Hall",
            category: "Public Service",
            status: "completed",
            description: "A free legal assistance program provided to residents of Barangay San Dionisio who need legal advice and assistance.",
            requirements: "Appointment at the Barangay Secretary's Office. Walk-ins are not accepted. Only the first five clients will be accommodated."
        },
        {
            id: 1002,
            title: "Project Tagumpay – Free Civil Service Exam Review Program",
            date: "2026-07-11",
            startTime: "10:00",
            endTime: "15:00",
            location: "Barangay San Dionisio Session Hall",
            category: "Education",
            status: "completed",
            description: "A free review program designed to help residents prepare for the Civil Service Examination (CSE) for Professional.",
            requirements: "Registration through the provided QR code."
        },
        {
            id: 1003,
            title: "CHED Tulong Dunong Scholarship Program",
            date: "2026-08-14",
            startTime: "09:00",
            endTime: "15:00",
            location: "Office of the Barangay Secretary",
            category: "Education",
            status: "completed",
            description: "A scholarship opportunity offering 70 slots for incoming first-year to fourth-year college students who are residents of Barangay San Dionisio.",
            requirements: `Must be a resident of Barangay San Dionisio.
Updated voter's certification as of 2026.
Accomplished application form.
Two pieces of 2x2 ID pictures.
Certified true copy of Certificate of Enrollment or Registration with subjects and units indicated for SY 2026–2027.
Barangay indigency certificate for CHED requirements.
Photocopy of School ID or National ID.
One set of original documents and one set of photocopies.`
        },
        {
            id: 1004,
            title: "TESDA Orientation for Shielded Metal Arc Welding NC I and NC II",
            date: "2026-11-28",
            startTime: "09:00",
            endTime: "15:00",
            location: "New Barangay Hall Session Hall",
            category: "Education",
            status: "upcoming",
            description: "An orientation program for residents interested in TESDA training for Shielded Metal Arc Welding NC I and NC II.",
            requirements: `SRA Enrollment Form.
Photocopy of Diploma.
Photocopy of Birth Certificate.
Photocopy of TOR/Form 137/SF10.
Valid ID with three specimen signatures.
Three 1x1 ID pictures.
Three 2x2 ID pictures.
Two passport-size ID pictures with formal attire, white background, and name tag.`
        },
        {
            id: 1005,
            title: "Free Zumba",
            date: "2026-12-03",
            startTime: "07:00",
            endTime: "08:00",
            location: "Barangay San Dionisio Old Gym",
            category: "Health",
            status: "upcoming",
            description: "A free Zumba activity encouraging residents to exercise, stay active, and maintain a healthy lifestyle.",
            requirements: "No specific requirements mentioned."
        },
        {
            id: 1006,
            title: "Free Pneumococcal Vaccine for Senior Citizens",
            date: "2026-08-27",
            startTime: "13:00",
            endTime: "15:00",
            location: "San Dionisio Health Center",
            category: "Health",
            status: "completed",
            description: "A free pneumococcal vaccination program for senior citizens of Barangay San Dionisio to help protect them against pneumococcal diseases.",
            requirements: `OSCA ID (white card), not OSCA CARES ID or HELP card.
YAKAP ID, PhilHealth ID, or PhilHealth number.
Previous vaccination card for those vaccinated five years ago.
eGovPH App on mobile phone.`
        },
        {
            id: 1007,
            title: "Trabaho Caravan Mini-Job Fair",
            date: "2026-12-08",
            startTime: "08:00",
            endTime: "15:00",
            location: "88 Square Mall",
            category: "Public Service",
            status: "upcoming",
            description: "A job fair organized by PESO in coordination with Barangay San Dionisio to provide employment opportunities and help residents find jobs.",
            requirements: "Specific requirements are not shown in the provided information. Applicants should prepare their resumes and identification documents."
        },
        {
            id: 1008,
            title: "Mind Matters: Empowering the Youth",
            date: "2026-12-15",
            startTime: "08:00",
            endTime: "12:00",
            location: "Barangay San Dionisio Old Gym",
            category: "Health",
            status: "upcoming",
            description: "A free mental health seminar sponsored by Congressman Eric L. Olivarez. It aims to promote mental health awareness and encourage young people to speak about their feelings and experiences.",
            requirements: "Open to youth ages 15–30 from all barangays in District 1. Free registration through the provided link."
        },
        {
            id: 1009,
            title: "Health and Wellness Awareness for Senior Citizens and PWDs",
            date: "2026-12-10",
            startTime: "08:00",
            endTime: "12:00",
            location: "Barangay San Dionisio Old Gymnasium",
            category: "Health",
            status: "upcoming",
            description: "A health and wellness awareness program offering PhilHealth YAKAP profiling for 100 persons with disabilities and 100 senior citizens.",
            requirements: "Registration at the Social Services Office. Look for Mrs. Miramis Mijares."
        },
        {
            id: 1010,
            title: "Zumbarangay",
            date: "2026-12-15",
            startTime: "08:00",
            endTime: "10:00",
            location: "Barangay San Dionisio Old Gymnasium",
            category: "Health",
            status: "upcoming",
            description: "A community Zumba activity that encourages residents to exercise, dance, enjoy themselves, and promote a healthy lifestyle.",
            requirements: "Register at the Office of San Dionisio Old Gymnasium. Look for Mr. Michael Sta. Ana."
        },
        {
            id: 1011,
            title: "Health & Wellness Awareness",
            date: "2026-10-07",
            startTime: "08:00",
            endTime: "12:00",
            location: "Barangay San Dionisio Old Gymnasium",
            category: "Health",
            status: "completed",
            description: "Encourages healthy lifestyles, positive habits, and overall physical and mental well-being.",
            requirements: "None."
        },
        {
            id: 1012,
            title: "Mind Matters: Empowering The Youth",
            date: "2026-09-19",
            startTime: "08:00",
            endTime: "12:00",
            location: "Barangay San Dionisio Old Gymnasium",
            category: "Health",
            status: "completed",
            description: "Promotes youth mental health awareness, emotional well-being, and the importance of self-care and support.",
            requirements: "None."
        },
        {
            id: 1013,
            title: "Trabaho Caravan Mini-Job Fair",
            date: "2026-09-08",
            startTime: "08:00",
            endTime: "15:00",
            location: "88 Square Mall",
            category: "Public Service",
            status: "completed",
            description: "Provides job opportunities by connecting job seekers with employers and offering career support to help individuals find employment.",
            requirements: "Must be a resident of Barangay San Dionisio."
        },
        {
            id: 1014,
            title: "Free Zumba",
            date: "2026-09-19",
            startTime: "08:00",
            endTime: "12:00",
            location: "Barangay San Dionisio Old Gymnasium",
            category: "Health",
            status: "completed",
            description: "Encourages an active and healthy lifestyle through enjoyable dance workouts that promote fitness, wellness, and community engagement.",
            requirements: "None."
        },
        {
            id: 1015,
            title: "Libreng Pneumococcal Vaccine",
            date: "",
            schedule: "Monday–Friday (Except Holidays)",
            startTime: "13:00",
            endTime: "15:00",
            location: "San Dionisio Health Center",
            category: "Health",
            status: "completed",
            description: "Provides free pneumococcal vaccination to help protect individuals against pneumonia and other serious infections.",
            requirements: `OSCA ID (white card) — NOT OSCA CARES ID or HELP card.
YAKAP ID / PhilHealth Number.
Previous vaccination card for those who received the Pneumococcal Vaccine (Pneumovax) five years ago.
eGovPH App on your cellphone.`
        },
        {
            id: 1016,
            title: "TESDA Orientation",
            date: "2026-08-28",
            startTime: "08:00",
            endTime: "12:00",
            location: "New Barangay Hall Session Hall",
            category: "Education",
            status: "completed",
            description: "Provides information about TESDA programs, skills training, and certification opportunities to support career development and employment.",
            requirements: `SRAI Enrollment Form.
Photocopy of Diploma.
Photocopy of Birth Certificate.
Photocopy of TOR/Form 137/SF10.
Three 1x1 ID pictures.
Valid ID with three specimen signatures.
Three 2x2 ID pictures.
Two passport-size ID pictures (formal attire, white background, and name tag).`
        },
        {
            id: 1017,
            title: "CHED Tulong Dunong Program",
            date: "2026-12-19",
            startTime: "08:00",
            endTime: "12:00",
            location: "Office of Barangay Secretary",
            category: "Education",
            status: "upcoming",
            description: "Offers educational support and financial assistance to deserving students to help them continue their studies and pursue their dreams.",
            requirements: `Must be a resident of Barangay San Dionisio.
Updated Voter's Certification as of 2026.
Duly accomplished application form.
Two pieces of 2x2 ID pictures.
Certified true copy of Certificate of Enrollment (COE) or Certificate of Registration with subjects and units indicated, signed by the School Registrar for SY 2026–2027.
Barangay Indigency with the purpose: CHED Requirements.
Photocopy of School ID or National ID.
Submit one set of original documents and one set of photocopies.`
        },
        {
            id: 1018,
            title: "Free Legal Assistance",
            date: "2026-11-30",
            startTime: "10:00",
            endTime: "12:00",
            location: "Barangay San Dionisio Session Hall",
            category: "Public Service",
            status: "upcoming",
            description: "Provides free legal advice and guidance to help individuals understand their rights and access justice.",
            requirements: "Walk-ins will not be accepted. Only the first five clients will be accommodated."
        },
        {
            id: 1019,
            title: "PROJECT TAGUMPAY: Serbisyo Para sa Bayan",
            date: "2026-12-01",
            startTime: "08:00",
            endTime: "17:00",
            location: "Barangay San Dionisio Old Gymnasium",
            category: "Public Service",
            status: "upcoming",
            description: "Provides essential community services and assistance to promote public welfare and improve the quality of life of residents.",
            requirements: "No specific requirements provided."
        },
        {
            id: 1020,
            title: "Barangay Clean-Up Drive",
            date: "2026-12-12",
            startTime: "06:00",
            endTime: "10:00",
            location: "Different areas of Barangay San Dionisio",
            category: "Environment",
            status: "upcoming",
            description: "Residents are encouraged to participate in cleaning streets, collecting garbage, and maintaining a clean community.",
            requirements: `Registration form.
Gloves.
Face mask.
Cleaning materials (broom, dustpan, garbage bags).`
        },
        {
            id: 1021,
            title: "Green San Dionisio: Tree Planting Activity",
            date: "2027-01-09",
            startTime: "07:00",
            endTime: "11:00",
            location: "Barangay San Dionisio",
            category: "Environment",
            status: "upcoming",
            description: "A community activity that encourages residents to plant trees and help protect the environment.",
            requirements: `Registration form.
Gardening gloves.
Water bottle.
Hat or cap.
Gardening tools (if available).`
        },
        {
            id: 1022,
            title: "Christmas Gift-Giving Program",
            date: "2026-12-19",
            startTime: "09:00",
            endTime: "12:00",
            location: "Barangay San Dionisio Covered Court",
            category: "Community",
            status: "upcoming",
            description: "A gift-giving activity that aims to share happiness and provide gifts to children and families in need.",
            requirements: `Registration form.
Barangay ID or valid ID.
Proof of residency.`
        },
        {
            id: 1023,
            title: "Buwan ng Sining at Kultura",
            date: "2026-12-05",
            startTime: "08:00",
            endTime: "17:00",
            location: "Barangay San Dionisio Old Gymnasium",
            category: "Culture",
            status: "upcoming",
            description: "A celebration showcasing Filipino culture through traditional dances, music, arts, and local performances.",
            requirements: `Registration form.
Valid ID.
Traditional or cultural attire (optional).`
        },
        {
            id: 1024,
            title: "Larong Pinoy: Traditional Games Festival",
            date: "2027-01-16",
            startTime: "13:00",
            endTime: "17:00",
            location: "Barangay San Dionisio Sports Complex",
            category: "Culture",
            status: "upcoming",
            description: "A fun event where residents can enjoy traditional Filipino games such as patintero, piko, tumbang preso, and luksong tinik.",
            requirements: `Registration form.
Valid ID.
Comfortable clothes.
Parental consent for minors.`
        },
        {
            id: 1025,
            title: "Alagang San Dionisio: Health, Wellness, and Dengue Prevention Caravan",
            date: "2026-12-05",
            startTime: "08:00",
            endTime: "12:00",
            location: "San Dionisio Barangay Hall / Covered Court",
            category: "Health",
            status: "upcoming",
            description: "Free basic health screening, blood-pressure and blood-sugar checks, nutrition guidance, dengue-prevention education, and distribution of health information materials for families and senior citizens.",
            requirements: "Barangay health workers, nurses or volunteer medical personnel, blood-pressure monitors, glucometers, registration desks, chairs, tents, drinking water, and information flyers."
        },
        {
            id: 1026,
            title: "Libreng Anti-Rabies Vaccination & Pet Microchipping Drive",
            date: "2026-09-28",
            startTime: "08:00",
            endTime: "12:00",
            location: "Barangay San Dionisio Hall Grounds, Parañaque City",
            category: "Public Service",
            status: "completed",
            description: "Held in observance of World Rabies Day in coordination with the Parañaque City Veterinary Services Office, providing free anti-rabies shots, deworming, and pet registration for resident dogs and cats.",
            requirements: "Barangay residency ID. Pets must be at least 3 months old, healthy, and securely leashed or placed inside a pet carrier."
        },
        {
            id: 1027,
            title: "Community Disaster Preparedness & Earthquake/Fire Drill",
            date: "2026-07-18",
            startTime: "08:00",
            endTime: "12:00",
            location: "Barangay San Dionisio Evacuation Center & Multi-Purpose Hall, Parañaque City",
            category: "Education",
            status: "completed",
            description: "Conducted during National Disaster Resilience Month by the Barangay Disaster Risk Reduction and Management Committee (BDRRMC), training residents, barangay tanod, and household representatives in basic first aid, fire extinguisher use, and evacuation protocols.",
            requirements: "Prior registration at the Barangay Hall. Participants should wear comfortable clothing and closed shoes."
        },
        {
            id: 1028,
            title: "Sunduan sa San Dionisio (Traditional Courtship & Fiesta Procession)",
            date: "2026-04-05",
            startTime: "04:00",
            endTime: "07:00",
            location: "Cathedral and Parish of St. Andrew (Parañaque Cathedral) & Barangay San Dionisio Streets, Parañaque City",
            category: "Culture",
            status: "completed",
            description: "A centuries-old Parañaque Easter tradition where a 22- to 24-member dance troupe representing Barangay San Dionisio performs the Sayaw ng Pagbati, waving 60-centimeter flower-adorned flaglets in elaborate formal attire, to welcome the meeting of the statues of the Resurrected Christ and the Virgin Mary.",
            requirements: "Open to the public for viewing. Troupe performers are selected and trained by the barangay's cultural committee."
        },
        {
            id: 1029,
            title: "Sayaw ng Pagbati (Easter Sunday Dawn Ritual Dance)",
            date: "2026-04-05",
            startTime: "04:00",
            endTime: "07:00",
            location: "Cathedral and Parish of St. Andrew (Parañaque Cathedral) & Barangay San Dionisio Streets, Parañaque City",
            category: "Culture",
            status: "completed",
            description: "A centuries-old Parañaque Easter tradition where a 22- to 24-member dance troupe representing Barangay San Dionisio performs the Sayaw ng Pagbati, waving 60-centimeter flower-adorned flaglets in elaborate formal attire, to welcome the meeting of the statues of the Resurrected Christ and the Virgin Mary.",
            requirements: "Open to the public for viewing. Troupe performers are selected and trained by the barangay's cultural committee."
        },
        {
            id: 1030,
            title: "Barangay San Dionisio Senior Citizens' Medical & Eye Check-Up Mission",
            date: "2026-10-03",
            startTime: "07:30",
            endTime: "12:00",
            location: "Barangay San Dionisio Covered Court, Parañaque City",
            category: "Health",
            status: "completed",
            description: "A specialized health outreach organized by the Barangay San Dionisio Office for Senior Citizens Affairs (OSCA) chapter in partnership with Parañaque City Health Office, offering free blood pressure and blood sugar screening, cataract/vision exams, reading glasses distribution, and flu/pneumonia vaccinations.",
            requirements: "Parañaque OSCA Senior Citizen ID and Barangay San Dionisio residency verification."
        }
    ];

    // Load existing events without deleting user-created events.
    let storedEvents = [];

    try {
        storedEvents = JSON.parse(
            localStorage.getItem('checkmate_events') || '[]'
        );

        if (!Array.isArray(storedEvents)) {
            storedEvents = [];
        }
    } catch (error) {
        console.error("Could not read saved events:", error);
        storedEvents = [];
    }

    // Import the community events only once per seed version.
    if (localStorage.getItem('checkmate_events_seed_version') !== SEED_VERSION) {

        // Remove the three old sample records from the original admin.js.
        const oldSampleTitles = [
            "Barangay Clean-up Drive",
            "Free Health & Dental Checkup",
            "Youth Basketball Tournament"
        ];

        storedEvents = storedEvents.filter(event => {
            const isOldSample =
                [1, 2, 3].includes(Number(event.id)) &&
                oldSampleTitles.includes(event.title);

            return !isOldSample;
        });

        communityEvents.forEach(event => {
    const existingIndex = storedEvents.findIndex(existing =>
        Number(existing.id) === Number(event.id) ||
        existing.sourceId === `community-${event.id}`
    );

    if (existingIndex !== -1) {
        // Update the categories of the two existing premade events.
        if ([1005, 1010].includes(Number(event.id))) {
            storedEvents[existingIndex].category = 'Health';
        }
    } else {
        // Add new premade events without replacing existing records.
        storedEvents.push({
            ...event,
            source: 'preloaded',
            sourceId: `community-${event.id}`
        });
    }
});

        localStorage.setItem(
            'checkmate_events',
            JSON.stringify(storedEvents)
        );

        localStorage.setItem(
            'checkmate_events_seed_version',
            SEED_VERSION
        );
    }

    // Add categories to older event records if missing.
    const categoryDefaults = {
        1: 'Environment',
        2: 'Health',
        3: 'Sports'
    };

    let changed = false;

    storedEvents.forEach(event => {
        if (!event.category) {
            event.category = categoryDefaults[event.id] || 'Community';
            changed = true;
        }
    });

    if (changed) {
        localStorage.setItem(
            'checkmate_events',
            JSON.stringify(storedEvents)
        );
    }
}

const CM_ADMIN_DEFAULT_ACCOUNTS = [
    {
        id: 1,
        firstName: 'Vance Andri',
        surname: 'Rosaceña',
        email: 'vanceanrirosacena@gmail.com'
    },
    {
        id: 2,
        firstName: 'Marian Nicole',
        surname: 'Calising',
        email: 'sacayanmarian@gmail.com'
    },
    {
        id: 3,
        firstName: 'Shaynna kaye',
        surname: 'Cachila',
        email: 'shaynnakayec@gmail.com'
    },
    {
        id: 4,
        firstName: 'Sunshine',
        surname: 'Avenido',
        email: 'sunshinecahilaavenido@gmail.com'
    },
    {
        id: 5,
        firstName: 'Victor',
        surname: 'Asuncion',
        email: 'asuncionvictor@gmail.com'
    },
    {
        id: 6,
        firstName: 'Maria',
        surname: 'Santos',
        email: 'mariasantos@gmail.com'
    },
    {
        id: 7,
        firstName: 'James',
        surname: 'Cruz',
        email: 'jamescruz@gmail.com'
    },
    {
        id: 8,
        firstName: 'John',
        surname: 'Smith',
        email: 'johnsmith@gmail.com'
    },
    {
        id: 9,
        firstName: 'Angela',
        surname: 'Reyes',
        email: 'angelareyes@gmail.com'
    },
    {
        id: 10,
        firstName: 'Michael',
        surname: 'Garcia',
        email: 'michaelgarcia@gmail.com'
    },
    {
        id: 11,
        firstName: 'Sophia',
        surname: 'Lopez',
        email: 'sophialopez@gmail.com'
    },
    {
        id: 12,
        firstName: 'Daniel',
        surname: 'Flores',
        email: 'danielflores@gmail.com'
    },
    {
        id: 13,
        firstName: 'Andrea',
        surname: 'Ramos',
        email: 'andrearamos@gmail.com'
    },
    {
        id: 14,
        firstName: 'Nicole',
        surname: 'Hernandez',
        email: 'nicolehernandez@gmail.com'
    },
    {
        id: 15,
        firstName: 'Daren',
        surname: 'Abadiano',
        email: 'abadianodaren56@gmail.com'
    },
    {
        id: 16,
        firstName: 'John Michael',
        surname: 'Reyes',
        email: 'john.reyes12@gmail.com'
    },
    {
        id: 17,
        firstName: 'Angela',
        surname: 'Sinfuego',
        email: 'angelasinfuego29@gmail.com'
    },
    {
        id: 18,
        firstName: 'Princess Diane',
        surname: 'Doroin',
        email: 'dianedoroin030626@gmail.com'
    },
    {
        id: 19,
        firstName: 'Samantha',
        surname: 'Lopez',
        email: 'samantha.lopez@gmail.com'
    },
    {
        id: 20,
        firstName: 'Daniel',
        surname: 'Mendoza',
        email: 'daniel.mendoza6@gmail.com'
    },
    {
        id: 21,
        firstName: 'Chryzle',
        surname: 'Baal',
        email: 'baalchryzle@gmail.com'
    },
    {
        id: 22,
        firstName: 'Mark Anthony',
        surname: 'Dela Cruz',
        email: 'markdelacruz20@gmail.com'
    },
    {
        id: 23,
        firstName: 'Jia',
        surname: 'Paderan',
        email: 'jiapaderan01@gmail.com'
    },
    {
        id: 24,
        firstName: 'Gabriel',
        surname: 'Torres',
        email: 'gabriel.torres6@gmail.com'
    },
    {
        id: 25,
        firstName: 'Annica',
        surname: 'Oronan',
        email: 'annicaoronan21@gmail.com'
    },
    {
        id: 26,
        firstName: 'Christian',
        surname: 'Bautista',
        email: 'christianbautista@gmail.com'
    },
    {
        id: 27,
        firstName: 'Patricia Anne',
        surname: 'Villanueva',
        email: 'patriciavillanueva125@gmail.com'
    },
    {
        id: 28,
        firstName: 'Kevin Joseph',
        surname: 'Aquino',
        email: 'kevinaquino@gmail.com'
    },
    {
        id: 29,
        firstName: 'Isabelle Marie',
        surname: 'Castillo',
        email: 'Gehleepretty@gmail.com'
    }
];

function initializeDefaultAccounts() {
    const USERS_KEY = 'checkmate_users';
    const DEFAULT_PASSWORD = 'asdasd123';

    let users = [];

    try {
        users = JSON.parse(localStorage.getItem(USERS_KEY)) || [];

        if (!Array.isArray(users)) {
            users = [];
        }
    } catch (error) {
        users = [];
    }

    CM_ADMIN_DEFAULT_ACCOUNTS.forEach(account => {
        const existingUser = users.find(user =>
            (user.email || '').toLowerCase() === account.email.toLowerCase()
        );

        if (!existingUser) {
            users.push({
                id: Math.max(0, ...users.map(user => Number(user.id) || 0)) + 1,
                name: `${account.firstName} ${account.surname}`,
                firstName: account.firstName,
                surname: account.surname,
                email: account.email,
                password: DEFAULT_PASSWORD,
                role: 'Citizen',
                joined: new Date().toISOString().split('T')[0]
            });
        }
    });

    localStorage.setItem(USERS_KEY, JSON.stringify(users));
}
