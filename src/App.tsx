import { Routes, Route, Link } from "react-router-dom";

import Landing from "./routes/index";
import AboutPage from "./routes/about";
import ServicesPage from "./routes/services";
import CaregiversPublic from "./routes/caregivers";
import HowItWorks from "./routes/how-it-works";
import ContactPage from "./routes/contact";
import HelpCenter from "./routes/help";
import FaqPage from "./routes/faq";
import SupportPage from "./routes/support";

import Login from "./routes/auth.login";
import Forgot from "./routes/auth.forgot-password";
import AuthRegisterLayout from "./routes/auth.register";
import RegisterChoice from "./routes/auth.register.index";
import FamilyRegister from "./routes/auth.register.family";
import CaregiverRegister from "./routes/auth.register.caregiver";
import RegistrationSuccess from "./routes/auth.registration-success";
import PendingVerification from "./routes/auth.pending-verification";
import AccountReview from "./routes/auth.account-review";
import AccessDenied from "./routes/auth.access-denied";
import VerificationApproved from "./routes/auth.verification-approved";
import VerificationRejected from "./routes/auth.verification-rejected";

import DashboardRootLayout from "./routes/dashboard";
import Overview from "./routes/dashboard.index";
import DashProfile from "./routes/dashboard.profile";
import Patients from "./routes/dashboard.patients";
import DashCaregiversBrowse from "./routes/dashboard.caregivers.index";
import CaregiverDetail from "./routes/dashboard.caregivers.$id";
import Saved from "./routes/dashboard.saved";
import Recent from "./routes/dashboard.recent";
import DashServices from "./routes/dashboard.services";
import Bookings from "./routes/dashboard.bookings";
import BookingDetail from "./routes/dashboard.bookings.$id";
import DashHistory from "./routes/dashboard.history";
import MessagesLayout from "./routes/dashboard.messages";
import MessagesEmpty from "./routes/dashboard.messages.index";
import MessagesThread from "./routes/dashboard.messages.$id";
import Notifications from "./routes/dashboard.notifications";
import DashSupport from "./routes/dashboard.support";
import DashSettings from "./routes/dashboard.settings";

import CaregiverLayout from "./routes/caregiver";
import CaregiverHome from "./routes/caregiver.index";
import CgProfile from "./routes/caregiver.profile";
import Availability from "./routes/caregiver.availability";
import CgServices from "./routes/caregiver.services";
import Requests from "./routes/caregiver.requests";
import ActiveVisits from "./routes/caregiver.active-visits";
import Inquiries from "./routes/caregiver.inquiries";
import Callbacks from "./routes/caregiver.callbacks";
import CgMessagesLayout from "./routes/caregiver.messages";
import CgMessagesEmpty from "./routes/caregiver.messages.index";
import CgThread from "./routes/caregiver.messages.$id";
import CareNotes from "./routes/caregiver.care-notes";
import AssignedPatients from "./routes/caregiver.patients";
import Reviews from "./routes/caregiver.reviews";
import Earnings from "./routes/caregiver.earnings";
import Docs from "./routes/caregiver.documents";
import WorkHistory from "./routes/caregiver.history";
import CgNotifications from "./routes/caregiver.notifications";
import CgSettings from "./routes/caregiver.settings";

function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <p className="text-sm font-medium text-primary">404</p>
        <h1 className="mt-2 font-display text-4xl font-semibold">Page not found</h1>
        <p className="mt-3 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="mt-6 inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition hover:opacity-90"
        >
          Back to home
        </Link>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      {/* Public site */}
      <Route path="/" element={<Landing />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/caregivers" element={<CaregiversPublic />} />
      <Route path="/how-it-works" element={<HowItWorks />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/help" element={<HelpCenter />} />
      <Route path="/faq" element={<FaqPage />} />
      <Route path="/support" element={<SupportPage />} />

      {/* Auth */}
      <Route path="/auth/login" element={<Login />} />
      <Route path="/auth/forgot-password" element={<Forgot />} />
      <Route path="/auth/register" element={<AuthRegisterLayout />}>
        <Route index element={<RegisterChoice />} />
        <Route path="family" element={<FamilyRegister />} />
        <Route path="caregiver" element={<CaregiverRegister />} />
      </Route>
      <Route path="/auth/registration-success" element={<RegistrationSuccess />} />
      <Route path="/auth/pending-verification" element={<PendingVerification />} />
      <Route path="/auth/account-review" element={<AccountReview />} />
      <Route path="/auth/access-denied" element={<AccessDenied />} />
      <Route path="/auth/verification-approved" element={<VerificationApproved />} />
      <Route path="/auth/verification-rejected" element={<VerificationRejected />} />

      {/* Family dashboard */}
      <Route path="/dashboard" element={<DashboardRootLayout />}>
        <Route index element={<Overview />} />
        <Route path="profile" element={<DashProfile />} />
        <Route path="patients" element={<Patients />} />
        <Route path="caregivers" element={<DashCaregiversBrowse />} />
        <Route path="caregivers/:id" element={<CaregiverDetail />} />
        <Route path="saved" element={<Saved />} />
        <Route path="recent" element={<Recent />} />
        <Route path="services" element={<DashServices />} />
        <Route path="bookings" element={<Bookings />} />
        <Route path="bookings/:id" element={<BookingDetail />} />
        <Route path="history" element={<DashHistory />} />
        <Route path="messages" element={<MessagesLayout />}>
          <Route index element={<MessagesEmpty />} />
          <Route path=":id" element={<MessagesThread />} />
        </Route>
        <Route path="notifications" element={<Notifications />} />
        <Route path="support" element={<DashSupport />} />
        <Route path="settings" element={<DashSettings />} />
      </Route>

      {/* Caregiver dashboard */}
      <Route path="/caregiver" element={<CaregiverLayout />}>
        <Route index element={<CaregiverHome />} />
        <Route path="profile" element={<CgProfile />} />
        <Route path="availability" element={<Availability />} />
        <Route path="services" element={<CgServices />} />
        <Route path="requests" element={<Requests />} />
        <Route path="active-visits" element={<ActiveVisits />} />
        <Route path="inquiries" element={<Inquiries />} />
        <Route path="callbacks" element={<Callbacks />} />
        <Route path="messages" element={<CgMessagesLayout />}>
          <Route index element={<CgMessagesEmpty />} />
          <Route path=":id" element={<CgThread />} />
        </Route>
        <Route path="care-notes" element={<CareNotes />} />
        <Route path="patients" element={<AssignedPatients />} />
        <Route path="reviews" element={<Reviews />} />
        <Route path="earnings" element={<Earnings />} />
        <Route path="documents" element={<Docs />} />
        <Route path="history" element={<WorkHistory />} />
        <Route path="notifications" element={<CgNotifications />} />
        <Route path="settings" element={<CgSettings />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
