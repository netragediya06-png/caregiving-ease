// Realistic mock data for the platform UI.

export type Caregiver = {
  id: string;
  name: string;
  role: "Registered Nurse" | "Elderly Attendant" | "Physiotherapist" | "Post-Hospital Care";
  city: string;
  experience: number;
  rating: number;
  reviews: number;
  hourlyRate: number;
  availability: "Available now" | "Available this week" | "Booked";
  verified: boolean;
  languages: string[];
  specialties: string[];
  bio: string;
  initials: string;
  gender: "Female" | "Male";
};

export const caregivers: Caregiver[] = [
  {
    id: "cg-001", name: "Anita Sharma", role: "Registered Nurse", city: "Bengaluru",
    experience: 9, rating: 4.9, reviews: 184, hourlyRate: 450,
    availability: "Available now", verified: true, gender: "Female",
    languages: ["English", "Hindi", "Kannada"],
    specialties: ["Diabetes care", "Wound dressing", "Post-op recovery"],
    bio: "RN with 9 years in geriatric and post-surgical home care. Calm, attentive, and family-first.",
    initials: "AS",
  },
  {
    id: "cg-002", name: "Rahul Mehta", role: "Physiotherapist", city: "Mumbai",
    experience: 7, rating: 4.8, reviews: 132, hourlyRate: 700,
    availability: "Available this week", verified: true, gender: "Male",
    languages: ["English", "Hindi", "Marathi"],
    specialties: ["Stroke rehab", "Joint mobility", "Fall prevention"],
    bio: "Physio specialized in elderly mobility and post-stroke rehabilitation programs at home.",
    initials: "RM",
  },
  {
    id: "cg-003", name: "Priya Nair", role: "Elderly Attendant", city: "Kochi",
    experience: 5, rating: 4.7, reviews: 96, hourlyRate: 250,
    availability: "Available now", verified: true, gender: "Female",
    languages: ["English", "Malayalam", "Tamil"],
    specialties: ["Daily living support", "Companion care", "Medication reminders"],
    bio: "Warm, patient elderly attendant with experience caring for parents with dementia.",
    initials: "PN",
  },
  {
    id: "cg-004", name: "Dr. Imran Khan", role: "Post-Hospital Care", city: "Delhi",
    experience: 12, rating: 4.9, reviews: 211, hourlyRate: 900,
    availability: "Available this week", verified: true, gender: "Male",
    languages: ["English", "Hindi", "Urdu"],
    specialties: ["ICU step-down", "Cardiac recovery", "Catheter care"],
    bio: "Critical-care trained nurse for high-acuity transitions from hospital to home.",
    initials: "IK",
  },
  {
    id: "cg-005", name: "Meera Iyer", role: "Registered Nurse", city: "Chennai",
    experience: 6, rating: 4.8, reviews: 118, hourlyRate: 400,
    availability: "Booked", verified: true, gender: "Female",
    languages: ["English", "Tamil", "Telugu"],
    specialties: ["Palliative care", "Pain management", "Family counseling"],
    bio: "Palliative-focused RN bringing dignity and comfort into the family home.",
    initials: "MI",
  },
  {
    id: "cg-006", name: "Suresh Patil", role: "Physiotherapist", city: "Pune",
    experience: 4, rating: 4.6, reviews: 72, hourlyRate: 550,
    availability: "Available now", verified: true, gender: "Male",
    languages: ["English", "Hindi", "Marathi"],
    specialties: ["Arthritis", "Posture", "Home exercise plans"],
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
  caregiverInitials: string;
  patient: string;
  service: string;
  schedule: string;
  status: "Pending" | "Confirmed" | "In progress" | "Completed" | "Cancelled";
  total: number;
};

export const bookings: Booking[] = [
  { id: "BK-10241", caregiver: "Anita Sharma", caregiverInitials: "AS", patient: "Mr. Ramesh Gupta", service: "Registered Nursing", schedule: "Today · 9:00 AM – 1:00 PM", status: "In progress", total: 1800 },
  { id: "BK-10238", caregiver: "Priya Nair", caregiverInitials: "PN", patient: "Mrs. Lakshmi V.", service: "Elderly Attendant", schedule: "Tomorrow · 8:00 AM – 6:00 PM", status: "Confirmed", total: 2500 },
  { id: "BK-10231", caregiver: "Rahul Mehta", caregiverInitials: "RM", patient: "Mr. Ramesh Gupta", service: "Physiotherapy", schedule: "Fri · 5:00 PM – 6:00 PM", status: "Pending", total: 700 },
  { id: "BK-10222", caregiver: "Dr. Imran Khan", caregiverInitials: "IK", patient: "Mrs. Lakshmi V.", service: "Post-Hospital Care", schedule: "Last Tue · 10:00 AM – 4:00 PM", status: "Completed", total: 5400 },
  { id: "BK-10218", caregiver: "Meera Iyer", caregiverInitials: "MI", patient: "Mr. Ramesh Gupta", service: "Palliative Care", schedule: "Last Mon · 7:00 AM – 7:00 PM", status: "Completed", total: 9600 },
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
];

export const stats = [
  { label: "Verified caregivers", value: "2,400+" },
  { label: "Families served", value: "18,500+" },
  { label: "Cities covered", value: "32" },
  { label: "Average rating", value: "4.9 / 5" },
];

export const adminStats = {
  pendingVerifications: 27,
  activeBookings: 184,
  totalUsers: 12480,
  totalCaregivers: 2412,
  monthlyRevenue: 4820000,
  openComplaints: 6,
};
