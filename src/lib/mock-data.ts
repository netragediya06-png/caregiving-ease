// Realistic mock data for the platform UI.

import caregiver1 from "@/assets/caregiver-1.jpg";
import caregiver2 from "@/assets/caregiver-2.jpg";
import caregiver3 from "@/assets/caregiver-3.jpg";
import caregiver4 from "@/assets/caregiver-4.jpg";
import caregiver5 from "@/assets/caregiver-5.jpg";

export const cities = [
  "Bengaluru", "Mumbai", "Delhi", "Chennai", "Pune", "Kochi", "Hyderabad", "Kolkata", "Ahmedabad", "Jaipur",
];

export type Caregiver = {
  id: string;
  name: string;
  role: "Registered Nurse" | "Elderly Attendant" | "Physiotherapist" | "Post-Hospital Care";
  city: string;
  serviceAreas: string[];
  homeVisit: boolean;
  experience: number;
  rating: number;
  reviews: number;
  hourlyRate: number;
  availability: "Available now" | "Available this week" | "Booked";
  verified: boolean;
  languages: string[];
  specialties: string[];
  qualifications: string[];
  certifications: string[];
  bio: string;
  initials: string;
  gender: "Female" | "Male";
  photo?: string;
};

export const caregivers: Caregiver[] = [
  {
    id: "cg-001", name: "Anita Sharma", role: "Registered Nurse", city: "Bengaluru",
    serviceAreas: ["Indiranagar", "Koramangala", "HSR Layout", "Whitefield"], homeVisit: true,
    experience: 9, rating: 4.9, reviews: 184, hourlyRate: 450,
    availability: "Available now", verified: true, gender: "Female",
    languages: ["English", "Hindi", "Kannada"],
    specialties: ["Diabetes care", "Wound dressing", "Post-op recovery"],
    qualifications: ["B.Sc. Nursing — Manipal Academy", "Diploma in Geriatric Nursing"],
    certifications: ["BLS / First Aid", "Certified in Geriatric Home Care (CGHC)"],
    bio: "RN with 9 years in geriatric and post-surgical home care. Calm, attentive, and family-first.",
    initials: "AS", photo: caregiver1,
  },
  {
    id: "cg-002", name: "Rahul Mehta", role: "Physiotherapist", city: "Mumbai",
    serviceAreas: ["Bandra", "Andheri West", "Juhu", "Powai"], homeVisit: true,
    experience: 7, rating: 4.8, reviews: 132, hourlyRate: 700,
    availability: "Available this week", verified: true, gender: "Male",
    languages: ["English", "Hindi", "Marathi"],
    specialties: ["Stroke rehab", "Joint mobility", "Fall prevention"],
    qualifications: ["Master of Physiotherapy (Neuro) — MUHS"],
    certifications: ["Bobath Certified", "Advanced Cardiac Rehab"],
    bio: "Physio specialized in elderly mobility and post-stroke rehabilitation programs at home.",
    initials: "RM", photo: caregiver2,
  },
  {
    id: "cg-003", name: "Priya Nair", role: "Elderly Attendant", city: "Kochi",
    serviceAreas: ["Kadavanthra", "Panampilly Nagar", "Edappally"], homeVisit: true,
    experience: 5, rating: 4.7, reviews: 96, hourlyRate: 250,
    availability: "Available now", verified: true, gender: "Female",
    languages: ["English", "Malayalam", "Tamil"],
    specialties: ["Daily living support", "Companion care", "Medication reminders"],
    qualifications: ["Diploma in Elderly Care"],
    certifications: ["Dementia Care Certified"],
    bio: "Warm, patient elderly attendant with experience caring for parents with dementia.",
    initials: "PN", photo: caregiver3,
  },
  {
    id: "cg-004", name: "Dr. Imran Khan", role: "Post-Hospital Care", city: "Delhi",
    serviceAreas: ["South Delhi", "Gurugram", "Noida"], homeVisit: true,
    experience: 12, rating: 4.9, reviews: 211, hourlyRate: 900,
    availability: "Available this week", verified: true, gender: "Male",
    languages: ["English", "Hindi", "Urdu"],
    specialties: ["ICU step-down", "Cardiac recovery", "Catheter care"],
    qualifications: ["B.Sc. Nursing", "PG Diploma Critical Care"],
    certifications: ["ACLS", "Ventilator management"],
    bio: "Critical-care trained nurse for high-acuity transitions from hospital to home.",
    initials: "IK", photo: caregiver4,
  },
  {
    id: "cg-005", name: "Meera Iyer", role: "Registered Nurse", city: "Chennai",
    serviceAreas: ["Adyar", "Besant Nagar", "T. Nagar"], homeVisit: true,
    experience: 6, rating: 4.8, reviews: 118, hourlyRate: 400,
    availability: "Booked", verified: true, gender: "Female",
    languages: ["English", "Tamil", "Telugu"],
    specialties: ["Palliative care", "Pain management", "Family counseling"],
    qualifications: ["B.Sc. Nursing"],
    certifications: ["Palliative Care Certified"],
    bio: "Palliative-focused RN bringing dignity and comfort into the family home.",
    initials: "MI", photo: caregiver5,
  },
  {
    id: "cg-006", name: "Suresh Patil", role: "Physiotherapist", city: "Pune",
    serviceAreas: ["Kothrud", "Baner", "Aundh"], homeVisit: true,
    experience: 4, rating: 4.6, reviews: 72, hourlyRate: 550,
    availability: "Available now", verified: true, gender: "Male",
    languages: ["English", "Hindi", "Marathi"],
    specialties: ["Arthritis", "Posture", "Home exercise plans"],
    qualifications: ["Bachelor of Physiotherapy"],
    certifications: ["Musculoskeletal Rehab"],
    bio: "Gentle, structured physiotherapy plans tailored for seniors at home.",
    initials: "SP",
  },
];

export const services = [
  { id: "s1", title: "Registered Nursing", desc: "Skilled medical care at home — injections, wound care, vitals.", icon: "Stethoscope", from: 450 },
  { id: "s2", title: "Elderly Attendant", desc: "Compassionate daily living support and companionship.", icon: "HeartHandshake", from: 250 },
  { id: "s3", title: "Physiotherapy", desc: "Mobility, rehab, and fall-prevention programs at home.", icon: "Activity", from: 550 },
  { id: "s4", title: "Post-Hospital Care", desc: "Smooth, supervised recovery after discharge.", icon: "BedDouble", from: 700 },
  { id: "s5", title: "Dementia & Memory Care", desc: "Specialized routines for Alzheimer's and dementia.", icon: "Brain", from: 600 },
  { id: "s6", title: "Palliative & Hospice", desc: "Dignified comfort care with family support.", icon: "Flower2", from: 800 },
];

export type Booking = {
  id: string;
  caregiver: string;
  caregiverId: string;
  caregiverInitials: string;
  caregiverPhoto?: string;
  patient: string;
  service: string;
  schedule: string;
  address?: string;
  status: "Pending" | "Confirmed" | "In progress" | "Completed" | "Cancelled";
  total: number;
};

export const bookings: Booking[] = [
  { id: "BK-10241", caregiver: "Anita Sharma", caregiverId: "cg-001", caregiverInitials: "AS", caregiverPhoto: caregiver1, patient: "Mr. Ramesh Gupta", service: "Registered Nursing", schedule: "Today · 9:00 AM – 1:00 PM", address: "12 Neeladri Road, Indiranagar, Bengaluru", status: "In progress", total: 1800 },
  { id: "BK-10238", caregiver: "Priya Nair", caregiverId: "cg-003", caregiverInitials: "PN", caregiverPhoto: caregiver3, patient: "Mrs. Lakshmi V.", service: "Elderly Attendant", schedule: "Tomorrow · 8:00 AM – 6:00 PM", address: "12 Neeladri Road, Indiranagar, Bengaluru", status: "Confirmed", total: 2500 },
  { id: "BK-10231", caregiver: "Rahul Mehta", caregiverId: "cg-002", caregiverInitials: "RM", caregiverPhoto: caregiver2, patient: "Mr. Ramesh Gupta", service: "Physiotherapy", schedule: "Fri · 5:00 PM – 6:00 PM", status: "Pending", total: 700 },
  { id: "BK-10222", caregiver: "Dr. Imran Khan", caregiverId: "cg-004", caregiverInitials: "IK", caregiverPhoto: caregiver4, patient: "Mrs. Lakshmi V.", service: "Post-Hospital Care", schedule: "Last Tue · 10:00 AM – 4:00 PM", status: "Completed", total: 5400 },
  { id: "BK-10218", caregiver: "Meera Iyer", caregiverId: "cg-005", caregiverInitials: "MI", caregiverPhoto: caregiver5, patient: "Mr. Ramesh Gupta", service: "Palliative Care", schedule: "Last Mon · 7:00 AM – 7:00 PM", status: "Completed", total: 9600 },
];

export const patients = [
  { id: "p1", name: "Mr. Ramesh Gupta", relation: "Father", age: 78, conditions: ["Type 2 diabetes", "Mild arthritis"], notes: "Prefers morning visits. Hindi speaker." },
  { id: "p2", name: "Mrs. Lakshmi V.", relation: "Mother-in-law", age: 82, conditions: ["Post-hip-replacement", "Hypertension"], notes: "Needs help with mobility and medications." },
];

export const testimonials = [
  { name: "Anjali R.", role: "Daughter, Bengaluru", quote: "Finally a service that treats our parents like family. The nurse assigned to Dad has been a blessing — thoughtful, skilled, and on time, every visit.", initials: "AR" },
  { name: "Vikram S.", role: "Son, Mumbai", quote: "From booking to billing, everything is transparent. The caregiver verification gave us real peace of mind.", initials: "VS" },
  { name: "Dr. Neha P.", role: "Family physician", quote: "I recommend SilverCare for post-discharge patients. Their nurses follow plans precisely and communicate with us clearly.", initials: "NP" },
];

export const faqs = [
  { q: "How are caregivers verified?", a: "Every caregiver passes a multi-step verification — government ID, certifications, background check, in-person interview, and a skills assessment before joining the platform." },
  { q: "Can I book for just a few hours?", a: "Yes. We support hourly, daily, and long-term bookings, with flexible cancellation up to 4 hours before the visit." },
  { q: "What if I need to change my caregiver?", a: "You can request a different caregiver from your dashboard at any time. Our care team will help match a new professional within 24 hours." },
  { q: "How is pricing handled?", a: "Pricing is transparent and shown upfront based on service type, hours, and caregiver experience. No surprise fees, ever." },
  { q: "Do you provide care for dementia patients?", a: "Yes. We have caregivers specifically trained in dementia and memory care, with structured routines tailored to your loved one." },
  { q: "Is medical equipment included?", a: "Basic supplies are included. Specialized equipment can be arranged through partner vendors at member pricing." },
  { q: "Can I contact the caregiver directly before booking?", a: "For safety and privacy, direct phone numbers are shared only after a booking is confirmed. You can send inquiries or request a callback from any caregiver profile." },
  { q: "What areas do you currently serve?", a: "SilverCare operates in 32 Indian cities with plans to expand. Enter your city on the home page to see caregivers available near you." },
];

export const helpCategories = [
  { title: "Getting started", desc: "Create an account, add a family member, and book your first visit.", articles: 8, icon: "Sparkles" },
  { title: "Bookings & scheduling", desc: "How to schedule, reschedule, or cancel visits.", articles: 12, icon: "CalendarCheck" },
  { title: "Caregivers & verification", desc: "How we vet caregivers and how you can review them.", articles: 6, icon: "ShieldCheck" },
  { title: "Billing & payments", desc: "Invoices, refunds, and payment methods.", articles: 9, icon: "Wallet" },
  { title: "Care plans", desc: "Setting up long-term care and medication routines.", articles: 7, icon: "ClipboardList" },
  { title: "Safety & privacy", desc: "How your data and family information is protected.", articles: 5, icon: "Lock" },
];

export const stats = [
  { label: "Verified caregivers", value: "2,400+" },
  { label: "Families served", value: "18,500+" },
  { label: "Cities covered", value: "32" },
  { label: "Average rating", value: "4.9 / 5" },
];

// ---- Communication mock data ----

export type Conversation = {
  id: string;
  peerId: string;
  peerName: string;
  peerRole: string;
  peerInitials: string;
  peerPhoto?: string;
  bookingRef?: string;
  lastMessage: string;
  lastAt: string;
  unread: number;
  online?: boolean;
};

export const conversations: Conversation[] = [
  { id: "cv-1", peerId: "cg-001", peerName: "Anita Sharma", peerRole: "Registered Nurse", peerInitials: "AS", peerPhoto: caregiver1, bookingRef: "BK-10241", lastMessage: "I'll be there at 9 sharp. Please have Dad's medication list handy.", lastAt: "10:24 AM", unread: 2, online: true },
  { id: "cv-2", peerId: "cg-003", peerName: "Priya Nair", peerRole: "Elderly Attendant", peerInitials: "PN", peerPhoto: caregiver3, bookingRef: "BK-10238", lastMessage: "Sounds good — see you tomorrow morning.", lastAt: "Yesterday", unread: 0 },
  { id: "cv-3", peerId: "cg-002", peerName: "Rahul Mehta", peerRole: "Physiotherapist", peerInitials: "RM", peerPhoto: caregiver2, bookingRef: "BK-10231", lastMessage: "Shared the home exercise plan document.", lastAt: "Wed", unread: 0 },
];

export type ChatMessage = {
  id: string;
  from: "me" | "peer";
  text: string;
  time: string;
};

export const chatThreads: Record<string, ChatMessage[]> = {
  "cv-1": [
    { id: "m1", from: "peer", text: "Hi Anjali — confirmed for tomorrow 9 AM. Anything specific I should prepare?", time: "9:58 AM" },
    { id: "m2", from: "me", text: "Hi Anita! Dad is a bit anxious about the new BP medication. Could you review his readings first?", time: "10:02 AM" },
    { id: "m3", from: "peer", text: "Absolutely. I'll bring the log sheet and go through last week's readings with him.", time: "10:05 AM" },
    { id: "m4", from: "peer", text: "I'll be there at 9 sharp. Please have Dad's medication list handy.", time: "10:24 AM" },
  ],
  "cv-2": [
    { id: "m1", from: "me", text: "Hi Priya, confirming tomorrow's visit for Mom.", time: "Yesterday" },
    { id: "m2", from: "peer", text: "Sounds good — see you tomorrow morning.", time: "Yesterday" },
  ],
  "cv-3": [
    { id: "m1", from: "peer", text: "Shared the home exercise plan document.", time: "Wed" },
  ],
};

// ---- Inquiries & callbacks ----

export type Inquiry = {
  id: string;
  from: string;
  fromInitials: string;
  subject: string;
  message: string;
  preferredTime?: string;
  receivedAt: string;
  status: "New" | "Responded" | "Archived";
};

export const inquiries: Inquiry[] = [
  { id: "iq-1", from: "Anjali Rao", fromInitials: "AR", subject: "Diabetes care for my father", message: "Hi Anita — my father (78) has Type 2 diabetes and needs help with insulin. Are you available for daily morning visits starting next week?", preferredTime: "Weekday mornings", receivedAt: "10 min ago", status: "New" },
  { id: "iq-2", from: "Sameer Bose", fromInitials: "SB", subject: "Post-op cardiac care", message: "My father was discharged after bypass surgery. We need overnight care for 2 weeks. Do you offer live-in service?", preferredTime: "Any evening", receivedAt: "2 hrs ago", status: "New" },
  { id: "iq-3", from: "Kavita Menon", fromInitials: "KM", subject: "Weekly companion visits", message: "Looking for a warm caregiver for weekly companionship visits with my mother.", receivedAt: "Yesterday", status: "Responded" },
];

export type CallbackRequest = {
  id: string;
  from: string;
  fromInitials: string;
  phoneHint: string;
  window: string;
  note?: string;
  requestedAt: string;
  status: "Pending" | "Called" | "Missed";
};

export const callbacks: CallbackRequest[] = [
  { id: "cb-1", from: "Vikram Shetty", fromInitials: "VS", phoneHint: "+91 98•••• ••42", window: "Today, 4 – 6 PM", note: "Best reached after 4 PM.", requestedAt: "1 hr ago", status: "Pending" },
  { id: "cb-2", from: "Anjali Rao", fromInitials: "AR", phoneHint: "+91 99•••• ••18", window: "Tomorrow morning", requestedAt: "3 hrs ago", status: "Pending" },
  { id: "cb-3", from: "Neha Prasad", fromInitials: "NP", phoneHint: "+91 97•••• ••02", window: "Yesterday, 6 PM", note: "Reviewing options for mother.", requestedAt: "Yesterday", status: "Called" },
];

// ---- Notifications ----

export type NotificationItem = {
  id: string;
  kind: "booking" | "message" | "payment" | "system";
  title: string;
  body: string;
  time: string;
  unread?: boolean;
};

export const familyNotifications: NotificationItem[] = [
  { id: "n1", kind: "booking", title: "Anita confirmed tomorrow's visit", body: "Booking BK-10238 · 9:00 AM home visit for Mr. Ramesh Gupta.", time: "10 min ago", unread: true },
  { id: "n2", kind: "message", title: "New message from Anita Sharma", body: "\"I'll be there at 9 sharp. Please have Dad's medication list handy.\"", time: "12 min ago", unread: true },
  { id: "n3", kind: "payment", title: "Invoice INV-2081 paid", body: "₹5,400 charged to card ending 4421.", time: "Yesterday" },
  { id: "n4", kind: "system", title: "Care plan updated", body: "Dr. Neha added a new medication to your father's care plan.", time: "2 days ago" },
];

// ---- Saved / recently viewed ----

export const savedCaregiverIds = ["cg-001", "cg-002", "cg-004"];
export const recentlyViewedIds = ["cg-005", "cg-003", "cg-001", "cg-006"];

// ---- Reviews ----

export const sampleReviews = [
  { n: "Anjali R.", r: 5, t: "Truly exceptional. Caring, prompt, and very skilled. Highly recommend.", when: "2 weeks ago" },
  { n: "Vikram S.", r: 5, t: "Made a huge difference in my father's recovery. Family is grateful.", when: "1 month ago" },
  { n: "Sunita M.", r: 4, t: "Professional and reliable. Communication could be a little faster.", when: "1 month ago" },
  { n: "Rahul K.", r: 5, t: "Kind, gentle with my mother, and follows the care plan meticulously.", when: "2 months ago" },
];
