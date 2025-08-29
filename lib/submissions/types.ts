export type Submission = {
  id: string
  createdAt: number
  locale: string
  applicant: {
    givenName: string
    familyName: string
    email: string
    nationality: string
    passportNumber: string
    dob: string
  }
  travel: {
    plannedArrival?: string
    plannedDeparture?: string
  }
  eligibility: {
    criminalHistory?: boolean
    communicableDisease?: boolean
    overstayedBefore?: boolean
  }
  notes?: string
  status: 'received'|'in_review'|'submitted'|'approved'|'rejected'
}
