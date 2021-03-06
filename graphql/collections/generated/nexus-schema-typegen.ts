/**
 * This file was automatically generated by Nexus 0.11.7
 * Do not make changes to this file directly
 */




declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
  JobFilter: { // input type
    experience?: string | null; // String
    location?: string | null; // String
    remoteFriendly?: boolean | null; // Boolean
    type?: string | null; // String
  }
  TagInputType: { // input type
    id?: string | null; // String
    text?: string | null; // String
  }
  UserFilter: { // input type
    city?: string | null; // String
    country?: string | null; // String
    countrystate?: string | null; // String
    gender?: string | null; // String
    language?: string | null; // String
    tag?: string | null; // String
    timezone?: string | null; // String
  }
  createChannelInputType: { // input type
    channelMemberId?: string | null; // String
    type?: string | null; // String
  }
  createMessageInputType: { // input type
    channel?: string | null; // String
    message?: string | null; // String
  }
  createOrganisationType: { // input type
    domain: string; // String!
    name?: string | null; // String
  }
  updateCompanyType: { // input type
    domain?: string | null; // String
    location?: string | null; // String
    logo?: string | null; // String
    name?: string | null; // String
  }
  updateJobType: { // input type
    company?: NexusGenInputs['updateCompanyType'] | null; // updateCompanyType
    experience?: string | null; // String
    expiredOn?: string | null; // String
    id: string; // String!
    isAvailable?: boolean | null; // Boolean
    jobInfoUrl?: string | null; // String
    logoImageFile?: string | null; // String
    postedBy?: NexusGenInputs['updateUserType'] | null; // updateUserType
    publishedOn?: string | null; // String
    remoteFriendly?: boolean | null; // Boolean
    title?: string | null; // String
    type?: string | null; // String
    updatedAt?: string | null; // String
  }
  updateOrganisationType: { // input type
    domain?: string | null; // String
    id: string; // String!
    name?: string | null; // String
  }
  updateUpdateType: { // input type
    author?: string | null; // String
    body?: string | null; // String
    error?: string | null; // String
    id: string; // String!
    product?: string | null; // String
    publishedon?: string | null; // String
    title?: string | null; // String
    type?: string | null; // String
    updatedon?: string | null; // String
  }
  updateUserType: { // input type
    about?: string | null; // String
    accountCreatedOn?: string | null; // String
    accountUpdatedOn?: string | null; // String
    avatarUrl?: string | null; // String
    behance?: string | null; // String
    city?: string | null; // String
    codepen?: string | null; // String
    country?: string | null; // String
    countrystate?: string | null; // String
    dribbble?: string | null; // String
    email?: string | null; // String
    email_verified?: boolean | null; // Boolean
    employer?: string | null; // String
    facebook?: string | null; // String
    firstname?: string | null; // String
    gender?: string | null; // String
    github?: string | null; // String
    have_perform_role?: string | null; // String
    hear_about_us?: string | null; // String
    id?: string | null; // String
    instagram?: string | null; // String
    isAvailable?: boolean | null; // Boolean
    isEmployed?: boolean | null; // Boolean
    isEnabled?: boolean | null; // Boolean
    isRegistrationWizardCompleted?: boolean | null; // Boolean
    jobTitle?: string | null; // String
    language?: string | null; // String
    last_login?: string | null; // String
    lastname?: string | null; // String
    latitude?: string | null; // String
    linkedin?: string | null; // String
    location?: string | null; // String
    longitude?: string | null; // String
    medium?: string | null; // String
    name?: string | null; // String
    pinterest?: string | null; // String
    role?: string | null; // String
    slideshare?: string | null; // String
    tags?: Array<NexusGenInputs['TagInputType'] | null> | null; // [TagInputType]
    timezone?: string | null; // String
    twitter?: string | null; // String
    userinfo_access_token?: string | null; // String
    username?: string | null; // String
    website?: string | null; // String
    why_perform_role?: string | null; // String
    years_of_experience?: string | null; // String
    youtube?: string | null; // String
    zipcode?: string | null; // String
  }
}

export interface NexusGenEnums {
}

export interface NexusGenRootTypes {
  AlgoliaJob: { // root type
    company?: NexusGenRootTypes['Company'] | null; // Company
    description?: string | null; // String
    experience?: string | null; // String
    expiredOn?: string | null; // String
    id?: string | null; // String
    isAvailable?: string | null; // String
    jobInfoUrl?: string | null; // String
    postedBy?: NexusGenRootTypes['User'] | null; // User
    publishedOn?: string | null; // String
    remoteFriendly?: string | null; // String
    source?: string | null; // String
    title?: string | null; // String
    type?: string | null; // String
  }
  Channel: { // root type
    channel?: string | null; // String
    createdby?: string | null; // String
    createdon?: string | null; // String
    id?: string | null; // String
    image?: string | null; // String
    last_message?: string | null; // String
    last_message_on?: string | null; // String
    name?: string | null; // String
    type?: string | null; // String
    unreadMessages?: number | null; // Int
  }
  Company: { // root type
    domain?: string | null; // String
    location?: string | null; // String
    logo?: string | null; // String
    name?: string | null; // String
  }
  DefaultCountType: { // root type
    error?: string | null; // String
    total?: number | null; // Int
  }
  DefaultPayloadType: { // root type
    email_verified?: boolean | null; // Boolean
    error?: string | null; // String
    generatedId?: string | null; // String
    id?: string | null; // String
    message?: string | null; // String
    role?: string | null; // String
  }
  Donation: { // root type
    amount?: string | null; // String
    date?: string | null; // String
    id?: string | null; // String
    method?: string | null; // String
    type?: string | null; // String
  }
  Feed: { // root type
    cursor?: string | null; // String
    messages?: Array<NexusGenRootTypes['Message'] | null> | null; // [Message]
  }
  Inbox: { // root type
    channels?: Array<NexusGenRootTypes['Channel'] | null> | null; // [Channel]
    cursor?: string | null; // String
  }
  Job: { // root type
    company?: NexusGenRootTypes['Company'] | null; // Company
    description?: string | null; // String
    experience?: string | null; // String
    expiredOn?: string | null; // String
    id?: string | null; // String
    isAvailable?: boolean | null; // Boolean
    jobInfoUrl?: string | null; // String
    publishedOn?: string | null; // String
    remoteFriendly?: boolean | null; // Boolean
    source?: string | null; // String
    title?: string | null; // String
    type?: string | null; // String
  }
  JobFeed: { // root type
    jobFeed?: Array<NexusGenRootTypes['Job'] | null> | null; // [Job]
    lastKey?: string | null; // String
  }
  JobListInfo: { // root type
    currentPage?: number | null; // Int
    jobFeed?: Array<NexusGenRootTypes['AlgoliaJob'] | null> | null; // [AlgoliaJob]
    totalJobs?: string | null; // String
    totalPage?: number | null; // Int
  }
  Message: { // root type
    channel?: string | null; // String
    createdon?: string | null; // String
    file?: string | null; // String
    filename?: string | null; // String
    filetype?: string | null; // String
    id?: string | null; // String
    message?: string | null; // String
    sender?: string | null; // String
  }
  Mutation: {};
  News: { // root type
    author?: string | null; // String
    body?: string | null; // String
    id?: string | null; // String
    product?: string | null; // String
    publishedon?: string | null; // String
    title?: string | null; // String
    type?: string | null; // String
  }
  Organisation: { // root type
    avatarUrl?: string | null; // String
    createdAt?: string | null; // String
    domain?: string | null; // String
    id?: string | null; // String
    name?: string | null; // String
    status?: string | null; // String
    updatedAt?: string | null; // String
  }
  OrganisationFeed: { // root type
    lastKey?: string | null; // String
    organisations?: Array<NexusGenRootTypes['Organisation'] | null> | null; // [Organisation]
  }
  Query: {};
  TagBaseType: { // root type
    id?: string | null; // String
    text?: string | null; // String
  }
  UploadType: { // root type
    signedUrl?: string | null; // String
  }
  User: { // root type
    about?: string | null; // String
    accountCreatedOn?: string | null; // String
    approved?: boolean | null; // Boolean
    avatarUrl?: string | null; // String
    behance?: string | null; // String
    city?: string | null; // String
    codepen?: string | null; // String
    country?: string | null; // String
    countrystate?: string | null; // String
    dribbble?: string | null; // String
    email?: string | null; // String
    email_verified?: boolean | null; // Boolean
    employer?: string | null; // String
    facebook?: string | null; // String
    firstname?: string | null; // String
    gender?: string | null; // String
    github?: string | null; // String
    have_perform_role?: string | null; // String
    hear_about_us?: string | null; // String
    id?: string | null; // String
    instagram?: string | null; // String
    isAvailable?: boolean | null; // Boolean
    isEmployed?: boolean | null; // Boolean
    isEnabled?: boolean | null; // Boolean
    isInternal?: boolean | null; // Boolean
    isMentee?: boolean | null; // Boolean
    isMentor?: boolean | null; // Boolean
    isRecruiter?: boolean | null; // Boolean
    isRegistrationWizardCompleted?: boolean | null; // Boolean
    jobTitle?: string | null; // String
    language?: string | null; // String
    last_login?: string | null; // String
    lastname?: string | null; // String
    latitude?: string | null; // String
    linkedin?: string | null; // String
    location?: string | null; // String
    longitude?: string | null; // String
    medium?: string | null; // String
    name?: string | null; // String
    pinterest?: string | null; // String
    responding_region?: string | null; // String
    role?: string | null; // String
    slideshare?: string | null; // String
    tags?: Array<NexusGenRootTypes['TagBaseType'] | null> | null; // [TagBaseType]
    timezone?: string | null; // String
    twitter?: string | null; // String
    username?: string | null; // String
    website?: string | null; // String
    why_perform_role?: string | null; // String
    years_of_experience?: string | null; // String
    youtube?: string | null; // String
    zipcode?: string | null; // String
  }
  UserFeed: { // root type
    lastKey?: string | null; // String
    userFeed?: Array<NexusGenRootTypes['User'] | null> | null; // [User]
  }
  UserListInfo: { // root type
    currentOffset?: number | null; // Int
    currentPage?: number | null; // Int
    filters?: string | null; // String
    totalOffset?: number | null; // Int
    totalPage?: number | null; // Int
    totalUsers?: string | null; // String
    userFeed?: Array<NexusGenRootTypes['User'] | null> | null; // [User]
  }
  String: string;
  Int: number;
  Float: number;
  Boolean: boolean;
  ID: string;
}

export interface NexusGenAllTypes extends NexusGenRootTypes {
  JobFilter: NexusGenInputs['JobFilter'];
  TagInputType: NexusGenInputs['TagInputType'];
  UserFilter: NexusGenInputs['UserFilter'];
  createChannelInputType: NexusGenInputs['createChannelInputType'];
  createMessageInputType: NexusGenInputs['createMessageInputType'];
  createOrganisationType: NexusGenInputs['createOrganisationType'];
  updateCompanyType: NexusGenInputs['updateCompanyType'];
  updateJobType: NexusGenInputs['updateJobType'];
  updateOrganisationType: NexusGenInputs['updateOrganisationType'];
  updateUpdateType: NexusGenInputs['updateUpdateType'];
  updateUserType: NexusGenInputs['updateUserType'];
}

export interface NexusGenFieldTypes {
  AlgoliaJob: { // field return type
    company: NexusGenRootTypes['Company'] | null; // Company
    description: string | null; // String
    experience: string | null; // String
    expiredOn: string | null; // String
    id: string | null; // String
    isAvailable: string | null; // String
    jobInfoUrl: string | null; // String
    postedBy: NexusGenRootTypes['User'] | null; // User
    publishedOn: string | null; // String
    remoteFriendly: string | null; // String
    source: string | null; // String
    title: string | null; // String
    type: string | null; // String
  }
  Channel: { // field return type
    channel: string | null; // String
    createdby: string | null; // String
    createdon: string | null; // String
    id: string | null; // String
    image: string | null; // String
    last_message: string | null; // String
    last_message_on: string | null; // String
    name: string | null; // String
    type: string | null; // String
    unreadMessages: number | null; // Int
  }
  Company: { // field return type
    domain: string | null; // String
    location: string | null; // String
    logo: string | null; // String
    name: string | null; // String
  }
  DefaultCountType: { // field return type
    error: string | null; // String
    total: number | null; // Int
  }
  DefaultPayloadType: { // field return type
    email_verified: boolean | null; // Boolean
    error: string | null; // String
    generatedId: string | null; // String
    id: string | null; // String
    message: string | null; // String
    role: string | null; // String
  }
  Donation: { // field return type
    amount: string | null; // String
    date: string | null; // String
    id: string | null; // String
    method: string | null; // String
    type: string | null; // String
  }
  Feed: { // field return type
    cursor: string | null; // String
    messages: Array<NexusGenRootTypes['Message'] | null> | null; // [Message]
  }
  Inbox: { // field return type
    channels: Array<NexusGenRootTypes['Channel'] | null> | null; // [Channel]
    cursor: string | null; // String
  }
  Job: { // field return type
    company: NexusGenRootTypes['Company'] | null; // Company
    description: string | null; // String
    experience: string | null; // String
    expiredOn: string | null; // String
    id: string | null; // String
    isAvailable: boolean | null; // Boolean
    jobInfoUrl: string | null; // String
    postedBy: NexusGenRootTypes['User'] | null; // User
    publishedOn: string | null; // String
    remoteFriendly: boolean | null; // Boolean
    source: string | null; // String
    title: string | null; // String
    type: string | null; // String
  }
  JobFeed: { // field return type
    jobFeed: Array<NexusGenRootTypes['Job'] | null> | null; // [Job]
    lastKey: string | null; // String
  }
  JobListInfo: { // field return type
    currentPage: number | null; // Int
    jobFeed: Array<NexusGenRootTypes['AlgoliaJob'] | null> | null; // [AlgoliaJob]
    totalJobs: string | null; // String
    totalPage: number | null; // Int
  }
  Message: { // field return type
    channel: string | null; // String
    createdon: string | null; // String
    file: string | null; // String
    filename: string | null; // String
    filetype: string | null; // String
    id: string | null; // String
    message: string | null; // String
    sender: string | null; // String
  }
  Mutation: { // field return type
    approveUserByAdmin: NexusGenRootTypes['DefaultPayloadType'] | null; // DefaultPayloadType
    checkOrganisationByNameAndDomain: NexusGenRootTypes['Organisation'] | null; // Organisation
    createChannel: NexusGenRootTypes['Channel'] | null; // Channel
    createJob: NexusGenRootTypes['Job'] | null; // Job
    createMessage: NexusGenRootTypes['Message'] | null; // Message
    createOrganisation: NexusGenRootTypes['DefaultPayloadType'] | null; // DefaultPayloadType
    createSocialUser: NexusGenRootTypes['DefaultPayloadType'] | null; // DefaultPayloadType
    createTag: NexusGenRootTypes['DefaultPayloadType'] | null; // DefaultPayloadType
    createUpdate: NexusGenRootTypes['DefaultPayloadType'] | null; // DefaultPayloadType
    createUser: NexusGenRootTypes['User'] | null; // User
    deleteAllJobs: NexusGenRootTypes['DefaultPayloadType'] | null; // DefaultPayloadType
    deleteJob: NexusGenRootTypes['DefaultPayloadType'] | null; // DefaultPayloadType
    deleteOrganisationByAdmin: NexusGenRootTypes['DefaultPayloadType'] | null; // DefaultPayloadType
    deleteTagByAdmin: NexusGenRootTypes['DefaultPayloadType'] | null; // DefaultPayloadType
    deleteUpdate: NexusGenRootTypes['DefaultPayloadType'] | null; // DefaultPayloadType
    deleteUserByAdmin: NexusGenRootTypes['DefaultPayloadType'] | null; // DefaultPayloadType
    deleteUserByOwn: NexusGenRootTypes['DefaultPayloadType'] | null; // DefaultPayloadType
    getFile: string | null; // String
    mergeTagsByAdmin: NexusGenRootTypes['DefaultPayloadType'] | null; // DefaultPayloadType
    postNews: NexusGenRootTypes['DefaultPayloadType'] | null; // DefaultPayloadType
    sendApprovalEmail: NexusGenRootTypes['DefaultPayloadType'] | null; // DefaultPayloadType
    setInternalUser: NexusGenRootTypes['DefaultPayloadType'] | null; // DefaultPayloadType
    setState: NexusGenRootTypes['DefaultPayloadType'] | null; // DefaultPayloadType
    setUserCreation: NexusGenRootTypes['DefaultPayloadType'] | null; // DefaultPayloadType
    subscriberToken: string | null; // String
    updateJob: NexusGenRootTypes['DefaultPayloadType'] | null; // DefaultPayloadType
    updateNews: NexusGenRootTypes['DefaultPayloadType'] | null; // DefaultPayloadType
    updateOrganisation: NexusGenRootTypes['DefaultPayloadType'] | null; // DefaultPayloadType
    updateOrganisationByAdmin: NexusGenRootTypes['DefaultPayloadType'] | null; // DefaultPayloadType
    updateUpdateByAdmin: NexusGenRootTypes['DefaultPayloadType'] | null; // DefaultPayloadType
    updateUser: NexusGenRootTypes['DefaultPayloadType'] | null; // DefaultPayloadType
    updateUserByAdmin: NexusGenRootTypes['DefaultPayloadType'] | null; // DefaultPayloadType
    uploadAvatar: NexusGenRootTypes['DefaultPayloadType'] | null; // DefaultPayloadType
    uploadChannelFile: NexusGenRootTypes['DefaultPayloadType'] | null; // DefaultPayloadType
    verifyEmail: NexusGenRootTypes['DefaultPayloadType'] | null; // DefaultPayloadType
  }
  News: { // field return type
    author: string | null; // String
    authoravatar: string | null; // String
    body: string | null; // String
    createdBy: string | null; // String
    id: string | null; // String
    product: string | null; // String
    publishedon: string | null; // String
    title: string | null; // String
    type: string | null; // String
  }
  Organisation: { // field return type
    avatarUrl: string | null; // String
    createdAt: string | null; // String
    domain: string | null; // String
    id: string | null; // String
    name: string | null; // String
    status: string | null; // String
    updatedAt: string | null; // String
  }
  OrganisationFeed: { // field return type
    lastKey: string | null; // String
    organisations: Array<NexusGenRootTypes['Organisation'] | null> | null; // [Organisation]
  }
  Query: { // field return type
    adminuser: NexusGenRootTypes['User'] | null; // User
    channel: NexusGenRootTypes['Channel'] | null; // Channel
    channelFeed: NexusGenRootTypes['Feed'] | null; // Feed
    donations: Array<NexusGenRootTypes['Donation'] | null> | null; // [Donation]
    getActiveJobsForAdmin: Array<NexusGenRootTypes['Job'] | null> | null; // [Job]
    getActiveMentors: Array<NexusGenRootTypes['User'] | null> | null; // [User]
    getActiveUsersByRole: Array<NexusGenRootTypes['User'] | null> | null; // [User]
    getAllAvailableJobsWithInfiniteScrollingFromAlgolia: NexusGenRootTypes['JobListInfo'] | null; // JobListInfo
    getAllJobs: Array<NexusGenRootTypes['Job'] | null> | null; // [Job]
    getAllJobsForAdmin: Array<NexusGenRootTypes['Job'] | null> | null; // [Job]
    getAllJobsWithInfiniteScrolling: NexusGenRootTypes['JobFeed'] | null; // JobFeed
    getAllNews: Array<NexusGenRootTypes['News'] | null> | null; // [News]
    getAllUsers: Array<NexusGenRootTypes['User'] | null> | null; // [User]
    getApprovedUsersByRole: Array<NexusGenRootTypes['User'] | null> | null; // [User]
    getBasicUsers: Array<NexusGenRootTypes['User'] | null> | null; // [User]
    getExpiredJobsForAdmin: Array<NexusGenRootTypes['Job'] | null> | null; // [Job]
    getInternalUsers: Array<NexusGenRootTypes['User'] | null> | null; // [User]
    getJob: NexusGenRootTypes['Job'] | null; // Job
    getMoreActiveUsersByRole: NexusGenRootTypes['UserFeed'] | null; // UserFeed
    getMoreActiveUsersByRoleFromAlgolia: NexusGenRootTypes['UserListInfo'] | null; // UserListInfo
    getOrganisationForScrapper: NexusGenRootTypes['Organisation'] | null; // Organisation
    getRandomUsers: NexusGenRootTypes['UserListInfo'] | null; // UserListInfo
    getToken: string | null; // String
    getTotalActiveUsersByRole: string | null; // String
    getTotalJobs: string | null; // String
    getTotalUsers: NexusGenRootTypes['DefaultPayloadType'] | null; // DefaultPayloadType
    getUnapprovedUsersByRole: Array<NexusGenRootTypes['User'] | null> | null; // [User]
    getUpdateFromAdmin: NexusGenRootTypes['News'] | null; // News
    getUserJobs: Array<NexusGenRootTypes['Job'] | null> | null; // [Job]
    getUserJobsFromAlgolia: NexusGenRootTypes['JobListInfo'] | null; // JobListInfo
    getUsersByRole: Array<NexusGenRootTypes['User'] | null> | null; // [User]
    getUserTotalJobs: NexusGenRootTypes['DefaultCountType'] | null; // DefaultCountType
    getWaitQueueStatus: NexusGenRootTypes['DefaultPayloadType'] | null; // DefaultPayloadType
    mentees: Array<NexusGenRootTypes['User'] | null> | null; // [User]
    mentors: Array<NexusGenRootTypes['User'] | null> | null; // [User]
    organisation: NexusGenRootTypes['Organisation'] | null; // Organisation
    organisationDetailFromAdmin: NexusGenRootTypes['Organisation'] | null; // Organisation
    organisationFeed: NexusGenRootTypes['OrganisationFeed'] | null; // OrganisationFeed
    organisationListForAdmin: Array<NexusGenRootTypes['Organisation'] | null> | null; // [Organisation]
    recruiters: Array<NexusGenRootTypes['User'] | null> | null; // [User]
    region: string | null; // String
    tagList: Array<NexusGenRootTypes['TagBaseType'] | null> | null; // [TagBaseType]
    tagsByAdmin: Array<NexusGenRootTypes['TagBaseType'] | null> | null; // [TagBaseType]
    updates: Array<NexusGenRootTypes['News'] | null> | null; // [News]
    updatesWithFilter: Array<NexusGenRootTypes['News'] | null> | null; // [News]
    upload: NexusGenRootTypes['UploadType'] | null; // UploadType
    user: NexusGenRootTypes['User'] | null; // User
    userChannels: NexusGenRootTypes['Inbox'] | null; // Inbox
    userFromAdmin: NexusGenRootTypes['User'] | null; // User
    userFullname: string | null; // String
    userProfile: NexusGenRootTypes['User'] | null; // User
    users: Array<NexusGenRootTypes['User'] | null> | null; // [User]
  }
  TagBaseType: { // field return type
    id: string | null; // String
    text: string | null; // String
  }
  UploadType: { // field return type
    signedUrl: string | null; // String
  }
  User: { // field return type
    about: string | null; // String
    accountCreatedOn: string | null; // String
    approved: boolean | null; // Boolean
    avatarUrl: string | null; // String
    behance: string | null; // String
    city: string | null; // String
    codepen: string | null; // String
    country: string | null; // String
    countrystate: string | null; // String
    dribbble: string | null; // String
    email: string | null; // String
    email_verified: boolean | null; // Boolean
    employer: string | null; // String
    facebook: string | null; // String
    firstname: string | null; // String
    gender: string | null; // String
    github: string | null; // String
    have_perform_role: string | null; // String
    hear_about_us: string | null; // String
    id: string | null; // String
    instagram: string | null; // String
    isAvailable: boolean | null; // Boolean
    isEmployed: boolean | null; // Boolean
    isEnabled: boolean | null; // Boolean
    isInternal: boolean | null; // Boolean
    isMentee: boolean | null; // Boolean
    isMentor: boolean | null; // Boolean
    isRecruiter: boolean | null; // Boolean
    isRegistrationWizardCompleted: boolean | null; // Boolean
    jobTitle: string | null; // String
    language: string | null; // String
    last_login: string | null; // String
    lastname: string | null; // String
    latitude: string | null; // String
    linkedin: string | null; // String
    location: string | null; // String
    longitude: string | null; // String
    medium: string | null; // String
    name: string | null; // String
    pinterest: string | null; // String
    responding_region: string | null; // String
    role: string | null; // String
    slideshare: string | null; // String
    tags: Array<NexusGenRootTypes['TagBaseType'] | null> | null; // [TagBaseType]
    timezone: string | null; // String
    twitter: string | null; // String
    username: string | null; // String
    website: string | null; // String
    why_perform_role: string | null; // String
    years_of_experience: string | null; // String
    youtube: string | null; // String
    zipcode: string | null; // String
  }
  UserFeed: { // field return type
    lastKey: string | null; // String
    userFeed: Array<NexusGenRootTypes['User'] | null> | null; // [User]
  }
  UserListInfo: { // field return type
    currentOffset: number | null; // Int
    currentPage: number | null; // Int
    filters: string | null; // String
    totalOffset: number | null; // Int
    totalPage: number | null; // Int
    totalUsers: string | null; // String
    userFeed: Array<NexusGenRootTypes['User'] | null> | null; // [User]
  }
}

export interface NexusGenArgTypes {
  Mutation: {
    approveUserByAdmin: { // args
      approved?: boolean | null; // Boolean
      id: string; // String!
    }
    checkOrganisationByNameAndDomain: { // args
      domain: string; // String!
      name: string; // String!
    }
    createChannel: { // args
      input?: NexusGenInputs['createChannelInputType'] | null; // createChannelInputType
    }
    createJob: { // args
      company?: NexusGenInputs['updateCompanyType'] | null; // updateCompanyType
      description?: string | null; // String
      experience?: string | null; // String
      jobInfoUrl?: string | null; // String
      logoImageFile?: string | null; // String
      remoteFriendly: boolean; // Boolean!
      source?: string | null; // String
      title: string; // String!
      type: string; // String!
    }
    createMessage: { // args
      input?: NexusGenInputs['createMessageInputType'] | null; // createMessageInputType
    }
    createOrganisation: { // args
      input?: NexusGenInputs['createOrganisationType'] | null; // createOrganisationType
    }
    createSocialUser: { // args
      role: string; // String!
      signup_access_token: string; // String!
      updateAuth0: boolean; // Boolean!
    }
    createTag: { // args
      text: string; // String!
    }
    createUpdate: { // args
      author: string; // String!
      body: string; // String!
      product: string; // String!
      publishedon?: string | null; // String
      title: string; // String!
      type: string; // String!
    }
    createUser: { // args
      email?: string | null; // String
      id?: string | null; // String
      username?: string | null; // String
    }
    deleteJob: { // args
      id: string; // String!
    }
    deleteOrganisationByAdmin: { // args
      id: string; // String!
    }
    deleteTagByAdmin: { // args
      id: string; // String!
    }
    deleteUpdate: { // args
      id: string; // String!
    }
    deleteUserByAdmin: { // args
      id: string; // String!
    }
    deleteUserByOwn: { // args
      id: string; // String!
    }
    getFile: { // args
      channel: string; // String!
      file: string; // String!
    }
    mergeTagsByAdmin: { // args
      newTagText: string; // String!
      tagsToMerge: Array<NexusGenInputs['TagInputType'] | null>; // [TagInputType]!
    }
    postNews: { // args
      body?: string | null; // String
      createdBy?: string | null; // String
      title?: string | null; // String
    }
    sendApprovalEmail: { // args
      id?: string | null; // String
    }
    setInternalUser: { // args
      id: string; // String!
      isInternal: boolean; // Boolean!
    }
    setState: { // args
      state: string; // String!
    }
    setUserCreation: { // args
      accountCreatedOn: string; // String!
      id: string; // String!
    }
    updateJob: { // args
      input?: NexusGenInputs['updateJobType'] | null; // updateJobType
      logoImageFile?: string | null; // String
    }
    updateNews: { // args
      body?: string | null; // String
      createdBy?: string | null; // String
      title?: string | null; // String
      userId?: string | null; // String
    }
    updateOrganisation: { // args
      input?: NexusGenInputs['updateOrganisationType'] | null; // updateOrganisationType
    }
    updateOrganisationByAdmin: { // args
      input?: NexusGenInputs['updateOrganisationType'] | null; // updateOrganisationType
    }
    updateUpdateByAdmin: { // args
      input?: NexusGenInputs['updateUpdateType'] | null; // updateUpdateType
    }
    updateUser: { // args
      input?: NexusGenInputs['updateUserType'] | null; // updateUserType
    }
    updateUserByAdmin: { // args
      input?: NexusGenInputs['updateUserType'] | null; // updateUserType
    }
    uploadAvatar: { // args
      base64: string; // String!
      id?: string | null; // String
    }
    uploadChannelFile: { // args
      channel: string; // String!
      content: string; // String!
      filename: string; // String!
      filetype: string; // String!
    }
    verifyEmail: { // args
      userinfo_access_token: string; // String!
    }
  }
  Query: {
    adminuser: { // args
      accounttype?: string | null; // String
      id?: string | null; // String
      userinfo_access_token?: string | null; // String
    }
    channel: { // args
      id?: string | null; // String
    }
    channelFeed: { // args
      cursor?: string | null; // String
      id: string; // String!
      type?: string | null; // String
    }
    getActiveUsersByRole: { // args
      role?: string | null; // String
    }
    getAllAvailableJobsWithInfiniteScrollingFromAlgolia: { // args
      filter?: NexusGenInputs['JobFilter'] | null; // JobFilter
      page?: number | null; // Int
    }
    getAllJobs: { // args
      experience?: string | null; // String
      isAvailable: boolean; // Boolean!
      location?: string | null; // String
      remoteFriendly?: boolean | null; // Boolean
      type?: string | null; // String
    }
    getAllJobsWithInfiniteScrolling: { // args
      filter?: NexusGenInputs['JobFilter'] | null; // JobFilter
      isAvailable: boolean; // Boolean!
      lastKey?: string | null; // String
    }
    getApprovedUsersByRole: { // args
      role?: string | null; // String
    }
    getJob: { // args
      id: string; // String!
    }
    getMoreActiveUsersByRole: { // args
      filter?: NexusGenInputs['UserFilter'] | null; // UserFilter
      lastKey?: string | null; // String
      role?: string | null; // String
    }
    getMoreActiveUsersByRoleFromAlgolia: { // args
      filter?: NexusGenInputs['UserFilter'] | null; // UserFilter
      page?: number | null; // Int
      role?: string | null; // String
      sortByType?: string | null; // String
    }
    getOrganisationForScrapper: { // args
      name: string; // String!
    }
    getRandomUsers: { // args
      filter?: NexusGenInputs['UserFilter'] | null; // UserFilter
      offset?: number | null; // Int
      role?: string | null; // String
    }
    getToken: { // args
      id: string; // String!
    }
    getTotalActiveUsersByRole: { // args
      filter?: NexusGenInputs['UserFilter'] | null; // UserFilter
      role?: string | null; // String
    }
    getTotalJobs: { // args
      filter?: NexusGenInputs['JobFilter'] | null; // JobFilter
      isAvailable: boolean; // Boolean!
    }
    getTotalUsers: { // args
      approved?: boolean | null; // Boolean
      isAvailable?: boolean | null; // Boolean
    }
    getUnapprovedUsersByRole: { // args
      role?: string | null; // String
    }
    getUpdateFromAdmin: { // args
      id: string; // String!
    }
    getUserJobs: { // args
      type?: string | null; // String
    }
    getUserJobsFromAlgolia: { // args
      page?: number | null; // Int
      type?: string | null; // String
    }
    getUsersByRole: { // args
      role?: string | null; // String
    }
    getWaitQueueStatus: { // args
      id: string; // String!
    }
    organisation: { // args
      id: string; // String!
    }
    organisationDetailFromAdmin: { // args
      id: string; // String!
    }
    organisationFeed: { // args
      lastKey?: string | null; // String
    }
    updatesWithFilter: { // args
      productFilter?: string | null; // String
      typeFilter?: string | null; // String
    }
    upload: { // args
      contentType: string; // String!
      objectName: string; // String!
      url: string; // String!
      userid: string; // String!
    }
    user: { // args
      userinfo_access_token?: string | null; // String
    }
    userChannels: { // args
      cursor?: string | null; // String
    }
    userFromAdmin: { // args
      id: string; // String!
    }
    userFullname: { // args
      id: string; // String!
    }
    userProfile: { // args
      id: string; // String!
    }
  }
}

export interface NexusGenAbstractResolveReturnTypes {
}

export interface NexusGenInheritedFields {}

export type NexusGenObjectNames = "AlgoliaJob" | "Channel" | "Company" | "DefaultCountType" | "DefaultPayloadType" | "Donation" | "Feed" | "Inbox" | "Job" | "JobFeed" | "JobListInfo" | "Message" | "Mutation" | "News" | "Organisation" | "OrganisationFeed" | "Query" | "TagBaseType" | "UploadType" | "User" | "UserFeed" | "UserListInfo";

export type NexusGenInputNames = "JobFilter" | "TagInputType" | "UserFilter" | "createChannelInputType" | "createMessageInputType" | "createOrganisationType" | "updateCompanyType" | "updateJobType" | "updateOrganisationType" | "updateUpdateType" | "updateUserType";

export type NexusGenEnumNames = never;

export type NexusGenInterfaceNames = never;

export type NexusGenScalarNames = "Boolean" | "Float" | "ID" | "Int" | "String";

export type NexusGenUnionNames = never;

export interface NexusGenTypes {
  context: any;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  allTypes: NexusGenAllTypes;
  inheritedFields: NexusGenInheritedFields;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractResolveReturn: NexusGenAbstractResolveReturnTypes;
}