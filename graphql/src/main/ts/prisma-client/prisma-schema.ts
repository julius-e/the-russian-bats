export const typeDefs = /* GraphQL */ `
  type AggregateBatting {
    count: Int!
  }

  type AggregatePerson {
    count: Int!
  }

  type AggregatePitching {
    count: Int!
  }

  type BatchPayload {
    count: Long!
  }

  type Batting {
    playerID: ID!
    yearID: String
    stint: String
    teamID: String
    lgID: String
    G: Int
    AB: Int
    R: Int
    H: Int
    Double: Int
    Triple: Int
    HR: Int
    RBI: Int
    SB: Int
    CS: Int
    BB: Int
    SO: Int
    IBB: Int
    HBP: Int
    SH: Int
    SF: Int
    GIDP: Int
  }

  type BattingConnection {
    pageInfo: PageInfo!
    edges: [BattingEdge]!
    aggregate: AggregateBatting!
  }

  input BattingCreateInput {
    playerID: ID!
    yearID: String
    stint: String
    teamID: String
    lgID: String
    G: Int
    AB: Int
    R: Int
    H: Int
    Double: Int
    Triple: Int
    HR: Int
    RBI: Int
    SB: Int
    CS: Int
    BB: Int
    SO: Int
    IBB: Int
    HBP: Int
    SH: Int
    SF: Int
    GIDP: Int
  }

  input BattingCreateManyInput {
    create: [BattingCreateInput!]
  }

  type BattingEdge {
    node: Batting!
    cursor: String!
  }

  enum BattingOrderByInput {
    playerID_ASC
    playerID_DESC
    yearID_ASC
    yearID_DESC
    stint_ASC
    stint_DESC
    teamID_ASC
    teamID_DESC
    lgID_ASC
    lgID_DESC
    G_ASC
    G_DESC
    AB_ASC
    AB_DESC
    R_ASC
    R_DESC
    H_ASC
    H_DESC
    Double_ASC
    Double_DESC
    Triple_ASC
    Triple_DESC
    HR_ASC
    HR_DESC
    RBI_ASC
    RBI_DESC
    SB_ASC
    SB_DESC
    CS_ASC
    CS_DESC
    BB_ASC
    BB_DESC
    SO_ASC
    SO_DESC
    IBB_ASC
    IBB_DESC
    HBP_ASC
    HBP_DESC
    SH_ASC
    SH_DESC
    SF_ASC
    SF_DESC
    GIDP_ASC
    GIDP_DESC
    id_ASC
    id_DESC
    createdAt_ASC
    createdAt_DESC
    updatedAt_ASC
    updatedAt_DESC
  }

  type BattingPreviousValues {
    playerID: ID!
    yearID: String
    stint: String
    teamID: String
    lgID: String
    G: Int
    AB: Int
    R: Int
    H: Int
    Double: Int
    Triple: Int
    HR: Int
    RBI: Int
    SB: Int
    CS: Int
    BB: Int
    SO: Int
    IBB: Int
    HBP: Int
    SH: Int
    SF: Int
    GIDP: Int
  }

  input BattingScalarWhereInput {
    playerID: ID
    playerID_not: ID
    playerID_in: [ID!]
    playerID_not_in: [ID!]
    playerID_lt: ID
    playerID_lte: ID
    playerID_gt: ID
    playerID_gte: ID
    playerID_contains: ID
    playerID_not_contains: ID
    playerID_starts_with: ID
    playerID_not_starts_with: ID
    playerID_ends_with: ID
    playerID_not_ends_with: ID
    yearID: String
    yearID_not: String
    yearID_in: [String!]
    yearID_not_in: [String!]
    yearID_lt: String
    yearID_lte: String
    yearID_gt: String
    yearID_gte: String
    yearID_contains: String
    yearID_not_contains: String
    yearID_starts_with: String
    yearID_not_starts_with: String
    yearID_ends_with: String
    yearID_not_ends_with: String
    stint: String
    stint_not: String
    stint_in: [String!]
    stint_not_in: [String!]
    stint_lt: String
    stint_lte: String
    stint_gt: String
    stint_gte: String
    stint_contains: String
    stint_not_contains: String
    stint_starts_with: String
    stint_not_starts_with: String
    stint_ends_with: String
    stint_not_ends_with: String
    teamID: String
    teamID_not: String
    teamID_in: [String!]
    teamID_not_in: [String!]
    teamID_lt: String
    teamID_lte: String
    teamID_gt: String
    teamID_gte: String
    teamID_contains: String
    teamID_not_contains: String
    teamID_starts_with: String
    teamID_not_starts_with: String
    teamID_ends_with: String
    teamID_not_ends_with: String
    lgID: String
    lgID_not: String
    lgID_in: [String!]
    lgID_not_in: [String!]
    lgID_lt: String
    lgID_lte: String
    lgID_gt: String
    lgID_gte: String
    lgID_contains: String
    lgID_not_contains: String
    lgID_starts_with: String
    lgID_not_starts_with: String
    lgID_ends_with: String
    lgID_not_ends_with: String
    G: Int
    G_not: Int
    G_in: [Int!]
    G_not_in: [Int!]
    G_lt: Int
    G_lte: Int
    G_gt: Int
    G_gte: Int
    AB: Int
    AB_not: Int
    AB_in: [Int!]
    AB_not_in: [Int!]
    AB_lt: Int
    AB_lte: Int
    AB_gt: Int
    AB_gte: Int
    R: Int
    R_not: Int
    R_in: [Int!]
    R_not_in: [Int!]
    R_lt: Int
    R_lte: Int
    R_gt: Int
    R_gte: Int
    H: Int
    H_not: Int
    H_in: [Int!]
    H_not_in: [Int!]
    H_lt: Int
    H_lte: Int
    H_gt: Int
    H_gte: Int
    Double: Int
    Double_not: Int
    Double_in: [Int!]
    Double_not_in: [Int!]
    Double_lt: Int
    Double_lte: Int
    Double_gt: Int
    Double_gte: Int
    Triple: Int
    Triple_not: Int
    Triple_in: [Int!]
    Triple_not_in: [Int!]
    Triple_lt: Int
    Triple_lte: Int
    Triple_gt: Int
    Triple_gte: Int
    HR: Int
    HR_not: Int
    HR_in: [Int!]
    HR_not_in: [Int!]
    HR_lt: Int
    HR_lte: Int
    HR_gt: Int
    HR_gte: Int
    RBI: Int
    RBI_not: Int
    RBI_in: [Int!]
    RBI_not_in: [Int!]
    RBI_lt: Int
    RBI_lte: Int
    RBI_gt: Int
    RBI_gte: Int
    SB: Int
    SB_not: Int
    SB_in: [Int!]
    SB_not_in: [Int!]
    SB_lt: Int
    SB_lte: Int
    SB_gt: Int
    SB_gte: Int
    CS: Int
    CS_not: Int
    CS_in: [Int!]
    CS_not_in: [Int!]
    CS_lt: Int
    CS_lte: Int
    CS_gt: Int
    CS_gte: Int
    BB: Int
    BB_not: Int
    BB_in: [Int!]
    BB_not_in: [Int!]
    BB_lt: Int
    BB_lte: Int
    BB_gt: Int
    BB_gte: Int
    SO: Int
    SO_not: Int
    SO_in: [Int!]
    SO_not_in: [Int!]
    SO_lt: Int
    SO_lte: Int
    SO_gt: Int
    SO_gte: Int
    IBB: Int
    IBB_not: Int
    IBB_in: [Int!]
    IBB_not_in: [Int!]
    IBB_lt: Int
    IBB_lte: Int
    IBB_gt: Int
    IBB_gte: Int
    HBP: Int
    HBP_not: Int
    HBP_in: [Int!]
    HBP_not_in: [Int!]
    HBP_lt: Int
    HBP_lte: Int
    HBP_gt: Int
    HBP_gte: Int
    SH: Int
    SH_not: Int
    SH_in: [Int!]
    SH_not_in: [Int!]
    SH_lt: Int
    SH_lte: Int
    SH_gt: Int
    SH_gte: Int
    SF: Int
    SF_not: Int
    SF_in: [Int!]
    SF_not_in: [Int!]
    SF_lt: Int
    SF_lte: Int
    SF_gt: Int
    SF_gte: Int
    GIDP: Int
    GIDP_not: Int
    GIDP_in: [Int!]
    GIDP_not_in: [Int!]
    GIDP_lt: Int
    GIDP_lte: Int
    GIDP_gt: Int
    GIDP_gte: Int
    AND: [BattingScalarWhereInput!]
    OR: [BattingScalarWhereInput!]
    NOT: [BattingScalarWhereInput!]
  }

  type BattingSubscriptionPayload {
    mutation: MutationType!
    node: Batting
    updatedFields: [String!]
    previousValues: BattingPreviousValues
  }

  input BattingSubscriptionWhereInput {
    mutation_in: [MutationType!]
    updatedFields_contains: String
    updatedFields_contains_every: [String!]
    updatedFields_contains_some: [String!]
    node: BattingWhereInput
    AND: [BattingSubscriptionWhereInput!]
    OR: [BattingSubscriptionWhereInput!]
    NOT: [BattingSubscriptionWhereInput!]
  }

  input BattingUpdateManyDataInput {
    playerID: ID
    yearID: String
    stint: String
    teamID: String
    lgID: String
    G: Int
    AB: Int
    R: Int
    H: Int
    Double: Int
    Triple: Int
    HR: Int
    RBI: Int
    SB: Int
    CS: Int
    BB: Int
    SO: Int
    IBB: Int
    HBP: Int
    SH: Int
    SF: Int
    GIDP: Int
  }

  input BattingUpdateManyInput {
    create: [BattingCreateInput!]
    deleteMany: [BattingScalarWhereInput!]
    updateMany: [BattingUpdateManyWithWhereNestedInput!]
  }

  input BattingUpdateManyMutationInput {
    playerID: ID
    yearID: String
    stint: String
    teamID: String
    lgID: String
    G: Int
    AB: Int
    R: Int
    H: Int
    Double: Int
    Triple: Int
    HR: Int
    RBI: Int
    SB: Int
    CS: Int
    BB: Int
    SO: Int
    IBB: Int
    HBP: Int
    SH: Int
    SF: Int
    GIDP: Int
  }

  input BattingUpdateManyWithWhereNestedInput {
    where: BattingScalarWhereInput!
    data: BattingUpdateManyDataInput!
  }

  input BattingWhereInput {
    playerID: ID
    playerID_not: ID
    playerID_in: [ID!]
    playerID_not_in: [ID!]
    playerID_lt: ID
    playerID_lte: ID
    playerID_gt: ID
    playerID_gte: ID
    playerID_contains: ID
    playerID_not_contains: ID
    playerID_starts_with: ID
    playerID_not_starts_with: ID
    playerID_ends_with: ID
    playerID_not_ends_with: ID
    yearID: String
    yearID_not: String
    yearID_in: [String!]
    yearID_not_in: [String!]
    yearID_lt: String
    yearID_lte: String
    yearID_gt: String
    yearID_gte: String
    yearID_contains: String
    yearID_not_contains: String
    yearID_starts_with: String
    yearID_not_starts_with: String
    yearID_ends_with: String
    yearID_not_ends_with: String
    stint: String
    stint_not: String
    stint_in: [String!]
    stint_not_in: [String!]
    stint_lt: String
    stint_lte: String
    stint_gt: String
    stint_gte: String
    stint_contains: String
    stint_not_contains: String
    stint_starts_with: String
    stint_not_starts_with: String
    stint_ends_with: String
    stint_not_ends_with: String
    teamID: String
    teamID_not: String
    teamID_in: [String!]
    teamID_not_in: [String!]
    teamID_lt: String
    teamID_lte: String
    teamID_gt: String
    teamID_gte: String
    teamID_contains: String
    teamID_not_contains: String
    teamID_starts_with: String
    teamID_not_starts_with: String
    teamID_ends_with: String
    teamID_not_ends_with: String
    lgID: String
    lgID_not: String
    lgID_in: [String!]
    lgID_not_in: [String!]
    lgID_lt: String
    lgID_lte: String
    lgID_gt: String
    lgID_gte: String
    lgID_contains: String
    lgID_not_contains: String
    lgID_starts_with: String
    lgID_not_starts_with: String
    lgID_ends_with: String
    lgID_not_ends_with: String
    G: Int
    G_not: Int
    G_in: [Int!]
    G_not_in: [Int!]
    G_lt: Int
    G_lte: Int
    G_gt: Int
    G_gte: Int
    AB: Int
    AB_not: Int
    AB_in: [Int!]
    AB_not_in: [Int!]
    AB_lt: Int
    AB_lte: Int
    AB_gt: Int
    AB_gte: Int
    R: Int
    R_not: Int
    R_in: [Int!]
    R_not_in: [Int!]
    R_lt: Int
    R_lte: Int
    R_gt: Int
    R_gte: Int
    H: Int
    H_not: Int
    H_in: [Int!]
    H_not_in: [Int!]
    H_lt: Int
    H_lte: Int
    H_gt: Int
    H_gte: Int
    Double: Int
    Double_not: Int
    Double_in: [Int!]
    Double_not_in: [Int!]
    Double_lt: Int
    Double_lte: Int
    Double_gt: Int
    Double_gte: Int
    Triple: Int
    Triple_not: Int
    Triple_in: [Int!]
    Triple_not_in: [Int!]
    Triple_lt: Int
    Triple_lte: Int
    Triple_gt: Int
    Triple_gte: Int
    HR: Int
    HR_not: Int
    HR_in: [Int!]
    HR_not_in: [Int!]
    HR_lt: Int
    HR_lte: Int
    HR_gt: Int
    HR_gte: Int
    RBI: Int
    RBI_not: Int
    RBI_in: [Int!]
    RBI_not_in: [Int!]
    RBI_lt: Int
    RBI_lte: Int
    RBI_gt: Int
    RBI_gte: Int
    SB: Int
    SB_not: Int
    SB_in: [Int!]
    SB_not_in: [Int!]
    SB_lt: Int
    SB_lte: Int
    SB_gt: Int
    SB_gte: Int
    CS: Int
    CS_not: Int
    CS_in: [Int!]
    CS_not_in: [Int!]
    CS_lt: Int
    CS_lte: Int
    CS_gt: Int
    CS_gte: Int
    BB: Int
    BB_not: Int
    BB_in: [Int!]
    BB_not_in: [Int!]
    BB_lt: Int
    BB_lte: Int
    BB_gt: Int
    BB_gte: Int
    SO: Int
    SO_not: Int
    SO_in: [Int!]
    SO_not_in: [Int!]
    SO_lt: Int
    SO_lte: Int
    SO_gt: Int
    SO_gte: Int
    IBB: Int
    IBB_not: Int
    IBB_in: [Int!]
    IBB_not_in: [Int!]
    IBB_lt: Int
    IBB_lte: Int
    IBB_gt: Int
    IBB_gte: Int
    HBP: Int
    HBP_not: Int
    HBP_in: [Int!]
    HBP_not_in: [Int!]
    HBP_lt: Int
    HBP_lte: Int
    HBP_gt: Int
    HBP_gte: Int
    SH: Int
    SH_not: Int
    SH_in: [Int!]
    SH_not_in: [Int!]
    SH_lt: Int
    SH_lte: Int
    SH_gt: Int
    SH_gte: Int
    SF: Int
    SF_not: Int
    SF_in: [Int!]
    SF_not_in: [Int!]
    SF_lt: Int
    SF_lte: Int
    SF_gt: Int
    SF_gte: Int
    GIDP: Int
    GIDP_not: Int
    GIDP_in: [Int!]
    GIDP_not_in: [Int!]
    GIDP_lt: Int
    GIDP_lte: Int
    GIDP_gt: Int
    GIDP_gte: Int
    AND: [BattingWhereInput!]
    OR: [BattingWhereInput!]
    NOT: [BattingWhereInput!]
  }

  scalar Long

  type Mutation {
    createBatting(data: BattingCreateInput!): Batting!
    updateManyBattings(
      data: BattingUpdateManyMutationInput!
      where: BattingWhereInput
    ): BatchPayload!
    deleteManyBattings(where: BattingWhereInput): BatchPayload!
    createPerson(data: PersonCreateInput!): Person!
    updatePerson(
      data: PersonUpdateInput!
      where: PersonWhereUniqueInput!
    ): Person
    updateManyPersons(
      data: PersonUpdateManyMutationInput!
      where: PersonWhereInput
    ): BatchPayload!
    upsertPerson(
      where: PersonWhereUniqueInput!
      create: PersonCreateInput!
      update: PersonUpdateInput!
    ): Person!
    deletePerson(where: PersonWhereUniqueInput!): Person
    deleteManyPersons(where: PersonWhereInput): BatchPayload!
    createPitching(data: PitchingCreateInput!): Pitching!
    updateManyPitchings(
      data: PitchingUpdateManyMutationInput!
      where: PitchingWhereInput
    ): BatchPayload!
    deleteManyPitchings(where: PitchingWhereInput): BatchPayload!
  }

  enum MutationType {
    CREATED
    UPDATED
    DELETED
  }

  interface Node {
    id: ID!
  }

  type PageInfo {
    hasNextPage: Boolean!
    hasPreviousPage: Boolean!
    startCursor: String
    endCursor: String
  }

  type Person {
    playerID: ID!
    birthYear: String
    birthMonth: String
    birthDay: String
    birthCountry: String
    birthState: String
    birthCity: String
    deathYear: String
    deathMonth: String
    deathDay: String
    deathCountry: String
    deathState: String
    deathCity: String
    nameFirst: String
    nameLast: String
    nameGiven: String
    weight: String
    height: String
    bats: String
    throws: String
    debut: String
    finalGame: String
    retroID: String
    bbrefID: String
    batting(
      where: BattingWhereInput
      orderBy: BattingOrderByInput
      skip: Int
      after: String
      before: String
      first: Int
      last: Int
    ): [Batting!]
    pitching(
      where: PitchingWhereInput
      orderBy: PitchingOrderByInput
      skip: Int
      after: String
      before: String
      first: Int
      last: Int
    ): [Pitching!]
  }

  type PersonConnection {
    pageInfo: PageInfo!
    edges: [PersonEdge]!
    aggregate: AggregatePerson!
  }

  input PersonCreateInput {
    playerID: ID!
    birthYear: String
    birthMonth: String
    birthDay: String
    birthCountry: String
    birthState: String
    birthCity: String
    deathYear: String
    deathMonth: String
    deathDay: String
    deathCountry: String
    deathState: String
    deathCity: String
    nameFirst: String
    nameLast: String
    nameGiven: String
    weight: String
    height: String
    bats: String
    throws: String
    debut: String
    finalGame: String
    retroID: String
    bbrefID: String
    batting: BattingCreateManyInput
    pitching: PitchingCreateManyInput
  }

  type PersonEdge {
    node: Person!
    cursor: String!
  }

  enum PersonOrderByInput {
    playerID_ASC
    playerID_DESC
    birthYear_ASC
    birthYear_DESC
    birthMonth_ASC
    birthMonth_DESC
    birthDay_ASC
    birthDay_DESC
    birthCountry_ASC
    birthCountry_DESC
    birthState_ASC
    birthState_DESC
    birthCity_ASC
    birthCity_DESC
    deathYear_ASC
    deathYear_DESC
    deathMonth_ASC
    deathMonth_DESC
    deathDay_ASC
    deathDay_DESC
    deathCountry_ASC
    deathCountry_DESC
    deathState_ASC
    deathState_DESC
    deathCity_ASC
    deathCity_DESC
    nameFirst_ASC
    nameFirst_DESC
    nameLast_ASC
    nameLast_DESC
    nameGiven_ASC
    nameGiven_DESC
    weight_ASC
    weight_DESC
    height_ASC
    height_DESC
    bats_ASC
    bats_DESC
    throws_ASC
    throws_DESC
    debut_ASC
    debut_DESC
    finalGame_ASC
    finalGame_DESC
    retroID_ASC
    retroID_DESC
    bbrefID_ASC
    bbrefID_DESC
    id_ASC
    id_DESC
    createdAt_ASC
    createdAt_DESC
    updatedAt_ASC
    updatedAt_DESC
  }

  type PersonPreviousValues {
    playerID: ID!
    birthYear: String
    birthMonth: String
    birthDay: String
    birthCountry: String
    birthState: String
    birthCity: String
    deathYear: String
    deathMonth: String
    deathDay: String
    deathCountry: String
    deathState: String
    deathCity: String
    nameFirst: String
    nameLast: String
    nameGiven: String
    weight: String
    height: String
    bats: String
    throws: String
    debut: String
    finalGame: String
    retroID: String
    bbrefID: String
  }

  type PersonSubscriptionPayload {
    mutation: MutationType!
    node: Person
    updatedFields: [String!]
    previousValues: PersonPreviousValues
  }

  input PersonSubscriptionWhereInput {
    mutation_in: [MutationType!]
    updatedFields_contains: String
    updatedFields_contains_every: [String!]
    updatedFields_contains_some: [String!]
    node: PersonWhereInput
    AND: [PersonSubscriptionWhereInput!]
    OR: [PersonSubscriptionWhereInput!]
    NOT: [PersonSubscriptionWhereInput!]
  }

  input PersonUpdateInput {
    playerID: ID
    birthYear: String
    birthMonth: String
    birthDay: String
    birthCountry: String
    birthState: String
    birthCity: String
    deathYear: String
    deathMonth: String
    deathDay: String
    deathCountry: String
    deathState: String
    deathCity: String
    nameFirst: String
    nameLast: String
    nameGiven: String
    weight: String
    height: String
    bats: String
    throws: String
    debut: String
    finalGame: String
    retroID: String
    bbrefID: String
    batting: BattingUpdateManyInput
    pitching: PitchingUpdateManyInput
  }

  input PersonUpdateManyMutationInput {
    playerID: ID
    birthYear: String
    birthMonth: String
    birthDay: String
    birthCountry: String
    birthState: String
    birthCity: String
    deathYear: String
    deathMonth: String
    deathDay: String
    deathCountry: String
    deathState: String
    deathCity: String
    nameFirst: String
    nameLast: String
    nameGiven: String
    weight: String
    height: String
    bats: String
    throws: String
    debut: String
    finalGame: String
    retroID: String
    bbrefID: String
  }

  input PersonWhereInput {
    playerID: ID
    playerID_not: ID
    playerID_in: [ID!]
    playerID_not_in: [ID!]
    playerID_lt: ID
    playerID_lte: ID
    playerID_gt: ID
    playerID_gte: ID
    playerID_contains: ID
    playerID_not_contains: ID
    playerID_starts_with: ID
    playerID_not_starts_with: ID
    playerID_ends_with: ID
    playerID_not_ends_with: ID
    birthYear: String
    birthYear_not: String
    birthYear_in: [String!]
    birthYear_not_in: [String!]
    birthYear_lt: String
    birthYear_lte: String
    birthYear_gt: String
    birthYear_gte: String
    birthYear_contains: String
    birthYear_not_contains: String
    birthYear_starts_with: String
    birthYear_not_starts_with: String
    birthYear_ends_with: String
    birthYear_not_ends_with: String
    birthMonth: String
    birthMonth_not: String
    birthMonth_in: [String!]
    birthMonth_not_in: [String!]
    birthMonth_lt: String
    birthMonth_lte: String
    birthMonth_gt: String
    birthMonth_gte: String
    birthMonth_contains: String
    birthMonth_not_contains: String
    birthMonth_starts_with: String
    birthMonth_not_starts_with: String
    birthMonth_ends_with: String
    birthMonth_not_ends_with: String
    birthDay: String
    birthDay_not: String
    birthDay_in: [String!]
    birthDay_not_in: [String!]
    birthDay_lt: String
    birthDay_lte: String
    birthDay_gt: String
    birthDay_gte: String
    birthDay_contains: String
    birthDay_not_contains: String
    birthDay_starts_with: String
    birthDay_not_starts_with: String
    birthDay_ends_with: String
    birthDay_not_ends_with: String
    birthCountry: String
    birthCountry_not: String
    birthCountry_in: [String!]
    birthCountry_not_in: [String!]
    birthCountry_lt: String
    birthCountry_lte: String
    birthCountry_gt: String
    birthCountry_gte: String
    birthCountry_contains: String
    birthCountry_not_contains: String
    birthCountry_starts_with: String
    birthCountry_not_starts_with: String
    birthCountry_ends_with: String
    birthCountry_not_ends_with: String
    birthState: String
    birthState_not: String
    birthState_in: [String!]
    birthState_not_in: [String!]
    birthState_lt: String
    birthState_lte: String
    birthState_gt: String
    birthState_gte: String
    birthState_contains: String
    birthState_not_contains: String
    birthState_starts_with: String
    birthState_not_starts_with: String
    birthState_ends_with: String
    birthState_not_ends_with: String
    birthCity: String
    birthCity_not: String
    birthCity_in: [String!]
    birthCity_not_in: [String!]
    birthCity_lt: String
    birthCity_lte: String
    birthCity_gt: String
    birthCity_gte: String
    birthCity_contains: String
    birthCity_not_contains: String
    birthCity_starts_with: String
    birthCity_not_starts_with: String
    birthCity_ends_with: String
    birthCity_not_ends_with: String
    deathYear: String
    deathYear_not: String
    deathYear_in: [String!]
    deathYear_not_in: [String!]
    deathYear_lt: String
    deathYear_lte: String
    deathYear_gt: String
    deathYear_gte: String
    deathYear_contains: String
    deathYear_not_contains: String
    deathYear_starts_with: String
    deathYear_not_starts_with: String
    deathYear_ends_with: String
    deathYear_not_ends_with: String
    deathMonth: String
    deathMonth_not: String
    deathMonth_in: [String!]
    deathMonth_not_in: [String!]
    deathMonth_lt: String
    deathMonth_lte: String
    deathMonth_gt: String
    deathMonth_gte: String
    deathMonth_contains: String
    deathMonth_not_contains: String
    deathMonth_starts_with: String
    deathMonth_not_starts_with: String
    deathMonth_ends_with: String
    deathMonth_not_ends_with: String
    deathDay: String
    deathDay_not: String
    deathDay_in: [String!]
    deathDay_not_in: [String!]
    deathDay_lt: String
    deathDay_lte: String
    deathDay_gt: String
    deathDay_gte: String
    deathDay_contains: String
    deathDay_not_contains: String
    deathDay_starts_with: String
    deathDay_not_starts_with: String
    deathDay_ends_with: String
    deathDay_not_ends_with: String
    deathCountry: String
    deathCountry_not: String
    deathCountry_in: [String!]
    deathCountry_not_in: [String!]
    deathCountry_lt: String
    deathCountry_lte: String
    deathCountry_gt: String
    deathCountry_gte: String
    deathCountry_contains: String
    deathCountry_not_contains: String
    deathCountry_starts_with: String
    deathCountry_not_starts_with: String
    deathCountry_ends_with: String
    deathCountry_not_ends_with: String
    deathState: String
    deathState_not: String
    deathState_in: [String!]
    deathState_not_in: [String!]
    deathState_lt: String
    deathState_lte: String
    deathState_gt: String
    deathState_gte: String
    deathState_contains: String
    deathState_not_contains: String
    deathState_starts_with: String
    deathState_not_starts_with: String
    deathState_ends_with: String
    deathState_not_ends_with: String
    deathCity: String
    deathCity_not: String
    deathCity_in: [String!]
    deathCity_not_in: [String!]
    deathCity_lt: String
    deathCity_lte: String
    deathCity_gt: String
    deathCity_gte: String
    deathCity_contains: String
    deathCity_not_contains: String
    deathCity_starts_with: String
    deathCity_not_starts_with: String
    deathCity_ends_with: String
    deathCity_not_ends_with: String
    nameFirst: String
    nameFirst_not: String
    nameFirst_in: [String!]
    nameFirst_not_in: [String!]
    nameFirst_lt: String
    nameFirst_lte: String
    nameFirst_gt: String
    nameFirst_gte: String
    nameFirst_contains: String
    nameFirst_not_contains: String
    nameFirst_starts_with: String
    nameFirst_not_starts_with: String
    nameFirst_ends_with: String
    nameFirst_not_ends_with: String
    nameLast: String
    nameLast_not: String
    nameLast_in: [String!]
    nameLast_not_in: [String!]
    nameLast_lt: String
    nameLast_lte: String
    nameLast_gt: String
    nameLast_gte: String
    nameLast_contains: String
    nameLast_not_contains: String
    nameLast_starts_with: String
    nameLast_not_starts_with: String
    nameLast_ends_with: String
    nameLast_not_ends_with: String
    nameGiven: String
    nameGiven_not: String
    nameGiven_in: [String!]
    nameGiven_not_in: [String!]
    nameGiven_lt: String
    nameGiven_lte: String
    nameGiven_gt: String
    nameGiven_gte: String
    nameGiven_contains: String
    nameGiven_not_contains: String
    nameGiven_starts_with: String
    nameGiven_not_starts_with: String
    nameGiven_ends_with: String
    nameGiven_not_ends_with: String
    weight: String
    weight_not: String
    weight_in: [String!]
    weight_not_in: [String!]
    weight_lt: String
    weight_lte: String
    weight_gt: String
    weight_gte: String
    weight_contains: String
    weight_not_contains: String
    weight_starts_with: String
    weight_not_starts_with: String
    weight_ends_with: String
    weight_not_ends_with: String
    height: String
    height_not: String
    height_in: [String!]
    height_not_in: [String!]
    height_lt: String
    height_lte: String
    height_gt: String
    height_gte: String
    height_contains: String
    height_not_contains: String
    height_starts_with: String
    height_not_starts_with: String
    height_ends_with: String
    height_not_ends_with: String
    bats: String
    bats_not: String
    bats_in: [String!]
    bats_not_in: [String!]
    bats_lt: String
    bats_lte: String
    bats_gt: String
    bats_gte: String
    bats_contains: String
    bats_not_contains: String
    bats_starts_with: String
    bats_not_starts_with: String
    bats_ends_with: String
    bats_not_ends_with: String
    throws: String
    throws_not: String
    throws_in: [String!]
    throws_not_in: [String!]
    throws_lt: String
    throws_lte: String
    throws_gt: String
    throws_gte: String
    throws_contains: String
    throws_not_contains: String
    throws_starts_with: String
    throws_not_starts_with: String
    throws_ends_with: String
    throws_not_ends_with: String
    debut: String
    debut_not: String
    debut_in: [String!]
    debut_not_in: [String!]
    debut_lt: String
    debut_lte: String
    debut_gt: String
    debut_gte: String
    debut_contains: String
    debut_not_contains: String
    debut_starts_with: String
    debut_not_starts_with: String
    debut_ends_with: String
    debut_not_ends_with: String
    finalGame: String
    finalGame_not: String
    finalGame_in: [String!]
    finalGame_not_in: [String!]
    finalGame_lt: String
    finalGame_lte: String
    finalGame_gt: String
    finalGame_gte: String
    finalGame_contains: String
    finalGame_not_contains: String
    finalGame_starts_with: String
    finalGame_not_starts_with: String
    finalGame_ends_with: String
    finalGame_not_ends_with: String
    retroID: String
    retroID_not: String
    retroID_in: [String!]
    retroID_not_in: [String!]
    retroID_lt: String
    retroID_lte: String
    retroID_gt: String
    retroID_gte: String
    retroID_contains: String
    retroID_not_contains: String
    retroID_starts_with: String
    retroID_not_starts_with: String
    retroID_ends_with: String
    retroID_not_ends_with: String
    bbrefID: String
    bbrefID_not: String
    bbrefID_in: [String!]
    bbrefID_not_in: [String!]
    bbrefID_lt: String
    bbrefID_lte: String
    bbrefID_gt: String
    bbrefID_gte: String
    bbrefID_contains: String
    bbrefID_not_contains: String
    bbrefID_starts_with: String
    bbrefID_not_starts_with: String
    bbrefID_ends_with: String
    bbrefID_not_ends_with: String
    batting_every: BattingWhereInput
    batting_some: BattingWhereInput
    batting_none: BattingWhereInput
    pitching_every: PitchingWhereInput
    pitching_some: PitchingWhereInput
    pitching_none: PitchingWhereInput
    AND: [PersonWhereInput!]
    OR: [PersonWhereInput!]
    NOT: [PersonWhereInput!]
  }

  input PersonWhereUniqueInput {
    playerID: ID
  }

  type Pitching {
    playerID: ID!
    yearID: String
    stint: String
    teamID: String
    lgID: String
    W: Int
    L: Int
    G: Int
    GS: Int
    CG: Int
    SHO: Int
    SV: Int
    IPouts: Int
    H: Int
    ER: Int
    HR: Int
    BB: Int
    SO: Int
    BAOpp: Int
    ERA: Float
    IBB: Int
    WP: Int
    HBP: Int
    BK: Int
    BFP: Int
    GF: Int
    R: Int
    SH: Int
    SF: Int
    GIDP: Int
  }

  type PitchingConnection {
    pageInfo: PageInfo!
    edges: [PitchingEdge]!
    aggregate: AggregatePitching!
  }

  input PitchingCreateInput {
    playerID: ID!
    yearID: String
    stint: String
    teamID: String
    lgID: String
    W: Int
    L: Int
    G: Int
    GS: Int
    CG: Int
    SHO: Int
    SV: Int
    IPouts: Int
    H: Int
    ER: Int
    HR: Int
    BB: Int
    SO: Int
    BAOpp: Int
    ERA: Float
    IBB: Int
    WP: Int
    HBP: Int
    BK: Int
    BFP: Int
    GF: Int
    R: Int
    SH: Int
    SF: Int
    GIDP: Int
  }

  input PitchingCreateManyInput {
    create: [PitchingCreateInput!]
  }

  type PitchingEdge {
    node: Pitching!
    cursor: String!
  }

  enum PitchingOrderByInput {
    playerID_ASC
    playerID_DESC
    yearID_ASC
    yearID_DESC
    stint_ASC
    stint_DESC
    teamID_ASC
    teamID_DESC
    lgID_ASC
    lgID_DESC
    W_ASC
    W_DESC
    L_ASC
    L_DESC
    G_ASC
    G_DESC
    GS_ASC
    GS_DESC
    CG_ASC
    CG_DESC
    SHO_ASC
    SHO_DESC
    SV_ASC
    SV_DESC
    IPouts_ASC
    IPouts_DESC
    H_ASC
    H_DESC
    ER_ASC
    ER_DESC
    HR_ASC
    HR_DESC
    BB_ASC
    BB_DESC
    SO_ASC
    SO_DESC
    BAOpp_ASC
    BAOpp_DESC
    ERA_ASC
    ERA_DESC
    IBB_ASC
    IBB_DESC
    WP_ASC
    WP_DESC
    HBP_ASC
    HBP_DESC
    BK_ASC
    BK_DESC
    BFP_ASC
    BFP_DESC
    GF_ASC
    GF_DESC
    R_ASC
    R_DESC
    SH_ASC
    SH_DESC
    SF_ASC
    SF_DESC
    GIDP_ASC
    GIDP_DESC
    id_ASC
    id_DESC
    createdAt_ASC
    createdAt_DESC
    updatedAt_ASC
    updatedAt_DESC
  }

  type PitchingPreviousValues {
    playerID: ID!
    yearID: String
    stint: String
    teamID: String
    lgID: String
    W: Int
    L: Int
    G: Int
    GS: Int
    CG: Int
    SHO: Int
    SV: Int
    IPouts: Int
    H: Int
    ER: Int
    HR: Int
    BB: Int
    SO: Int
    BAOpp: Int
    ERA: Float
    IBB: Int
    WP: Int
    HBP: Int
    BK: Int
    BFP: Int
    GF: Int
    R: Int
    SH: Int
    SF: Int
    GIDP: Int
  }

  input PitchingScalarWhereInput {
    playerID: ID
    playerID_not: ID
    playerID_in: [ID!]
    playerID_not_in: [ID!]
    playerID_lt: ID
    playerID_lte: ID
    playerID_gt: ID
    playerID_gte: ID
    playerID_contains: ID
    playerID_not_contains: ID
    playerID_starts_with: ID
    playerID_not_starts_with: ID
    playerID_ends_with: ID
    playerID_not_ends_with: ID
    yearID: String
    yearID_not: String
    yearID_in: [String!]
    yearID_not_in: [String!]
    yearID_lt: String
    yearID_lte: String
    yearID_gt: String
    yearID_gte: String
    yearID_contains: String
    yearID_not_contains: String
    yearID_starts_with: String
    yearID_not_starts_with: String
    yearID_ends_with: String
    yearID_not_ends_with: String
    stint: String
    stint_not: String
    stint_in: [String!]
    stint_not_in: [String!]
    stint_lt: String
    stint_lte: String
    stint_gt: String
    stint_gte: String
    stint_contains: String
    stint_not_contains: String
    stint_starts_with: String
    stint_not_starts_with: String
    stint_ends_with: String
    stint_not_ends_with: String
    teamID: String
    teamID_not: String
    teamID_in: [String!]
    teamID_not_in: [String!]
    teamID_lt: String
    teamID_lte: String
    teamID_gt: String
    teamID_gte: String
    teamID_contains: String
    teamID_not_contains: String
    teamID_starts_with: String
    teamID_not_starts_with: String
    teamID_ends_with: String
    teamID_not_ends_with: String
    lgID: String
    lgID_not: String
    lgID_in: [String!]
    lgID_not_in: [String!]
    lgID_lt: String
    lgID_lte: String
    lgID_gt: String
    lgID_gte: String
    lgID_contains: String
    lgID_not_contains: String
    lgID_starts_with: String
    lgID_not_starts_with: String
    lgID_ends_with: String
    lgID_not_ends_with: String
    W: Int
    W_not: Int
    W_in: [Int!]
    W_not_in: [Int!]
    W_lt: Int
    W_lte: Int
    W_gt: Int
    W_gte: Int
    L: Int
    L_not: Int
    L_in: [Int!]
    L_not_in: [Int!]
    L_lt: Int
    L_lte: Int
    L_gt: Int
    L_gte: Int
    G: Int
    G_not: Int
    G_in: [Int!]
    G_not_in: [Int!]
    G_lt: Int
    G_lte: Int
    G_gt: Int
    G_gte: Int
    GS: Int
    GS_not: Int
    GS_in: [Int!]
    GS_not_in: [Int!]
    GS_lt: Int
    GS_lte: Int
    GS_gt: Int
    GS_gte: Int
    CG: Int
    CG_not: Int
    CG_in: [Int!]
    CG_not_in: [Int!]
    CG_lt: Int
    CG_lte: Int
    CG_gt: Int
    CG_gte: Int
    SHO: Int
    SHO_not: Int
    SHO_in: [Int!]
    SHO_not_in: [Int!]
    SHO_lt: Int
    SHO_lte: Int
    SHO_gt: Int
    SHO_gte: Int
    SV: Int
    SV_not: Int
    SV_in: [Int!]
    SV_not_in: [Int!]
    SV_lt: Int
    SV_lte: Int
    SV_gt: Int
    SV_gte: Int
    IPouts: Int
    IPouts_not: Int
    IPouts_in: [Int!]
    IPouts_not_in: [Int!]
    IPouts_lt: Int
    IPouts_lte: Int
    IPouts_gt: Int
    IPouts_gte: Int
    H: Int
    H_not: Int
    H_in: [Int!]
    H_not_in: [Int!]
    H_lt: Int
    H_lte: Int
    H_gt: Int
    H_gte: Int
    ER: Int
    ER_not: Int
    ER_in: [Int!]
    ER_not_in: [Int!]
    ER_lt: Int
    ER_lte: Int
    ER_gt: Int
    ER_gte: Int
    HR: Int
    HR_not: Int
    HR_in: [Int!]
    HR_not_in: [Int!]
    HR_lt: Int
    HR_lte: Int
    HR_gt: Int
    HR_gte: Int
    BB: Int
    BB_not: Int
    BB_in: [Int!]
    BB_not_in: [Int!]
    BB_lt: Int
    BB_lte: Int
    BB_gt: Int
    BB_gte: Int
    SO: Int
    SO_not: Int
    SO_in: [Int!]
    SO_not_in: [Int!]
    SO_lt: Int
    SO_lte: Int
    SO_gt: Int
    SO_gte: Int
    BAOpp: Int
    BAOpp_not: Int
    BAOpp_in: [Int!]
    BAOpp_not_in: [Int!]
    BAOpp_lt: Int
    BAOpp_lte: Int
    BAOpp_gt: Int
    BAOpp_gte: Int
    ERA: Float
    ERA_not: Float
    ERA_in: [Float!]
    ERA_not_in: [Float!]
    ERA_lt: Float
    ERA_lte: Float
    ERA_gt: Float
    ERA_gte: Float
    IBB: Int
    IBB_not: Int
    IBB_in: [Int!]
    IBB_not_in: [Int!]
    IBB_lt: Int
    IBB_lte: Int
    IBB_gt: Int
    IBB_gte: Int
    WP: Int
    WP_not: Int
    WP_in: [Int!]
    WP_not_in: [Int!]
    WP_lt: Int
    WP_lte: Int
    WP_gt: Int
    WP_gte: Int
    HBP: Int
    HBP_not: Int
    HBP_in: [Int!]
    HBP_not_in: [Int!]
    HBP_lt: Int
    HBP_lte: Int
    HBP_gt: Int
    HBP_gte: Int
    BK: Int
    BK_not: Int
    BK_in: [Int!]
    BK_not_in: [Int!]
    BK_lt: Int
    BK_lte: Int
    BK_gt: Int
    BK_gte: Int
    BFP: Int
    BFP_not: Int
    BFP_in: [Int!]
    BFP_not_in: [Int!]
    BFP_lt: Int
    BFP_lte: Int
    BFP_gt: Int
    BFP_gte: Int
    GF: Int
    GF_not: Int
    GF_in: [Int!]
    GF_not_in: [Int!]
    GF_lt: Int
    GF_lte: Int
    GF_gt: Int
    GF_gte: Int
    R: Int
    R_not: Int
    R_in: [Int!]
    R_not_in: [Int!]
    R_lt: Int
    R_lte: Int
    R_gt: Int
    R_gte: Int
    SH: Int
    SH_not: Int
    SH_in: [Int!]
    SH_not_in: [Int!]
    SH_lt: Int
    SH_lte: Int
    SH_gt: Int
    SH_gte: Int
    SF: Int
    SF_not: Int
    SF_in: [Int!]
    SF_not_in: [Int!]
    SF_lt: Int
    SF_lte: Int
    SF_gt: Int
    SF_gte: Int
    GIDP: Int
    GIDP_not: Int
    GIDP_in: [Int!]
    GIDP_not_in: [Int!]
    GIDP_lt: Int
    GIDP_lte: Int
    GIDP_gt: Int
    GIDP_gte: Int
    AND: [PitchingScalarWhereInput!]
    OR: [PitchingScalarWhereInput!]
    NOT: [PitchingScalarWhereInput!]
  }

  type PitchingSubscriptionPayload {
    mutation: MutationType!
    node: Pitching
    updatedFields: [String!]
    previousValues: PitchingPreviousValues
  }

  input PitchingSubscriptionWhereInput {
    mutation_in: [MutationType!]
    updatedFields_contains: String
    updatedFields_contains_every: [String!]
    updatedFields_contains_some: [String!]
    node: PitchingWhereInput
    AND: [PitchingSubscriptionWhereInput!]
    OR: [PitchingSubscriptionWhereInput!]
    NOT: [PitchingSubscriptionWhereInput!]
  }

  input PitchingUpdateManyDataInput {
    playerID: ID
    yearID: String
    stint: String
    teamID: String
    lgID: String
    W: Int
    L: Int
    G: Int
    GS: Int
    CG: Int
    SHO: Int
    SV: Int
    IPouts: Int
    H: Int
    ER: Int
    HR: Int
    BB: Int
    SO: Int
    BAOpp: Int
    ERA: Float
    IBB: Int
    WP: Int
    HBP: Int
    BK: Int
    BFP: Int
    GF: Int
    R: Int
    SH: Int
    SF: Int
    GIDP: Int
  }

  input PitchingUpdateManyInput {
    create: [PitchingCreateInput!]
    deleteMany: [PitchingScalarWhereInput!]
    updateMany: [PitchingUpdateManyWithWhereNestedInput!]
  }

  input PitchingUpdateManyMutationInput {
    playerID: ID
    yearID: String
    stint: String
    teamID: String
    lgID: String
    W: Int
    L: Int
    G: Int
    GS: Int
    CG: Int
    SHO: Int
    SV: Int
    IPouts: Int
    H: Int
    ER: Int
    HR: Int
    BB: Int
    SO: Int
    BAOpp: Int
    ERA: Float
    IBB: Int
    WP: Int
    HBP: Int
    BK: Int
    BFP: Int
    GF: Int
    R: Int
    SH: Int
    SF: Int
    GIDP: Int
  }

  input PitchingUpdateManyWithWhereNestedInput {
    where: PitchingScalarWhereInput!
    data: PitchingUpdateManyDataInput!
  }

  input PitchingWhereInput {
    playerID: ID
    playerID_not: ID
    playerID_in: [ID!]
    playerID_not_in: [ID!]
    playerID_lt: ID
    playerID_lte: ID
    playerID_gt: ID
    playerID_gte: ID
    playerID_contains: ID
    playerID_not_contains: ID
    playerID_starts_with: ID
    playerID_not_starts_with: ID
    playerID_ends_with: ID
    playerID_not_ends_with: ID
    yearID: String
    yearID_not: String
    yearID_in: [String!]
    yearID_not_in: [String!]
    yearID_lt: String
    yearID_lte: String
    yearID_gt: String
    yearID_gte: String
    yearID_contains: String
    yearID_not_contains: String
    yearID_starts_with: String
    yearID_not_starts_with: String
    yearID_ends_with: String
    yearID_not_ends_with: String
    stint: String
    stint_not: String
    stint_in: [String!]
    stint_not_in: [String!]
    stint_lt: String
    stint_lte: String
    stint_gt: String
    stint_gte: String
    stint_contains: String
    stint_not_contains: String
    stint_starts_with: String
    stint_not_starts_with: String
    stint_ends_with: String
    stint_not_ends_with: String
    teamID: String
    teamID_not: String
    teamID_in: [String!]
    teamID_not_in: [String!]
    teamID_lt: String
    teamID_lte: String
    teamID_gt: String
    teamID_gte: String
    teamID_contains: String
    teamID_not_contains: String
    teamID_starts_with: String
    teamID_not_starts_with: String
    teamID_ends_with: String
    teamID_not_ends_with: String
    lgID: String
    lgID_not: String
    lgID_in: [String!]
    lgID_not_in: [String!]
    lgID_lt: String
    lgID_lte: String
    lgID_gt: String
    lgID_gte: String
    lgID_contains: String
    lgID_not_contains: String
    lgID_starts_with: String
    lgID_not_starts_with: String
    lgID_ends_with: String
    lgID_not_ends_with: String
    W: Int
    W_not: Int
    W_in: [Int!]
    W_not_in: [Int!]
    W_lt: Int
    W_lte: Int
    W_gt: Int
    W_gte: Int
    L: Int
    L_not: Int
    L_in: [Int!]
    L_not_in: [Int!]
    L_lt: Int
    L_lte: Int
    L_gt: Int
    L_gte: Int
    G: Int
    G_not: Int
    G_in: [Int!]
    G_not_in: [Int!]
    G_lt: Int
    G_lte: Int
    G_gt: Int
    G_gte: Int
    GS: Int
    GS_not: Int
    GS_in: [Int!]
    GS_not_in: [Int!]
    GS_lt: Int
    GS_lte: Int
    GS_gt: Int
    GS_gte: Int
    CG: Int
    CG_not: Int
    CG_in: [Int!]
    CG_not_in: [Int!]
    CG_lt: Int
    CG_lte: Int
    CG_gt: Int
    CG_gte: Int
    SHO: Int
    SHO_not: Int
    SHO_in: [Int!]
    SHO_not_in: [Int!]
    SHO_lt: Int
    SHO_lte: Int
    SHO_gt: Int
    SHO_gte: Int
    SV: Int
    SV_not: Int
    SV_in: [Int!]
    SV_not_in: [Int!]
    SV_lt: Int
    SV_lte: Int
    SV_gt: Int
    SV_gte: Int
    IPouts: Int
    IPouts_not: Int
    IPouts_in: [Int!]
    IPouts_not_in: [Int!]
    IPouts_lt: Int
    IPouts_lte: Int
    IPouts_gt: Int
    IPouts_gte: Int
    H: Int
    H_not: Int
    H_in: [Int!]
    H_not_in: [Int!]
    H_lt: Int
    H_lte: Int
    H_gt: Int
    H_gte: Int
    ER: Int
    ER_not: Int
    ER_in: [Int!]
    ER_not_in: [Int!]
    ER_lt: Int
    ER_lte: Int
    ER_gt: Int
    ER_gte: Int
    HR: Int
    HR_not: Int
    HR_in: [Int!]
    HR_not_in: [Int!]
    HR_lt: Int
    HR_lte: Int
    HR_gt: Int
    HR_gte: Int
    BB: Int
    BB_not: Int
    BB_in: [Int!]
    BB_not_in: [Int!]
    BB_lt: Int
    BB_lte: Int
    BB_gt: Int
    BB_gte: Int
    SO: Int
    SO_not: Int
    SO_in: [Int!]
    SO_not_in: [Int!]
    SO_lt: Int
    SO_lte: Int
    SO_gt: Int
    SO_gte: Int
    BAOpp: Int
    BAOpp_not: Int
    BAOpp_in: [Int!]
    BAOpp_not_in: [Int!]
    BAOpp_lt: Int
    BAOpp_lte: Int
    BAOpp_gt: Int
    BAOpp_gte: Int
    ERA: Float
    ERA_not: Float
    ERA_in: [Float!]
    ERA_not_in: [Float!]
    ERA_lt: Float
    ERA_lte: Float
    ERA_gt: Float
    ERA_gte: Float
    IBB: Int
    IBB_not: Int
    IBB_in: [Int!]
    IBB_not_in: [Int!]
    IBB_lt: Int
    IBB_lte: Int
    IBB_gt: Int
    IBB_gte: Int
    WP: Int
    WP_not: Int
    WP_in: [Int!]
    WP_not_in: [Int!]
    WP_lt: Int
    WP_lte: Int
    WP_gt: Int
    WP_gte: Int
    HBP: Int
    HBP_not: Int
    HBP_in: [Int!]
    HBP_not_in: [Int!]
    HBP_lt: Int
    HBP_lte: Int
    HBP_gt: Int
    HBP_gte: Int
    BK: Int
    BK_not: Int
    BK_in: [Int!]
    BK_not_in: [Int!]
    BK_lt: Int
    BK_lte: Int
    BK_gt: Int
    BK_gte: Int
    BFP: Int
    BFP_not: Int
    BFP_in: [Int!]
    BFP_not_in: [Int!]
    BFP_lt: Int
    BFP_lte: Int
    BFP_gt: Int
    BFP_gte: Int
    GF: Int
    GF_not: Int
    GF_in: [Int!]
    GF_not_in: [Int!]
    GF_lt: Int
    GF_lte: Int
    GF_gt: Int
    GF_gte: Int
    R: Int
    R_not: Int
    R_in: [Int!]
    R_not_in: [Int!]
    R_lt: Int
    R_lte: Int
    R_gt: Int
    R_gte: Int
    SH: Int
    SH_not: Int
    SH_in: [Int!]
    SH_not_in: [Int!]
    SH_lt: Int
    SH_lte: Int
    SH_gt: Int
    SH_gte: Int
    SF: Int
    SF_not: Int
    SF_in: [Int!]
    SF_not_in: [Int!]
    SF_lt: Int
    SF_lte: Int
    SF_gt: Int
    SF_gte: Int
    GIDP: Int
    GIDP_not: Int
    GIDP_in: [Int!]
    GIDP_not_in: [Int!]
    GIDP_lt: Int
    GIDP_lte: Int
    GIDP_gt: Int
    GIDP_gte: Int
    AND: [PitchingWhereInput!]
    OR: [PitchingWhereInput!]
    NOT: [PitchingWhereInput!]
  }

  type Query {
    battings(
      where: BattingWhereInput
      orderBy: BattingOrderByInput
      skip: Int
      after: String
      before: String
      first: Int
      last: Int
    ): [Batting]!
    battingsConnection(
      where: BattingWhereInput
      orderBy: BattingOrderByInput
      skip: Int
      after: String
      before: String
      first: Int
      last: Int
    ): BattingConnection!
    person(where: PersonWhereUniqueInput!): Person
    persons(
      where: PersonWhereInput
      orderBy: PersonOrderByInput
      skip: Int
      after: String
      before: String
      first: Int
      last: Int
    ): [Person]!
    personsConnection(
      where: PersonWhereInput
      orderBy: PersonOrderByInput
      skip: Int
      after: String
      before: String
      first: Int
      last: Int
    ): PersonConnection!
    pitchings(
      where: PitchingWhereInput
      orderBy: PitchingOrderByInput
      skip: Int
      after: String
      before: String
      first: Int
      last: Int
    ): [Pitching]!
    pitchingsConnection(
      where: PitchingWhereInput
      orderBy: PitchingOrderByInput
      skip: Int
      after: String
      before: String
      first: Int
      last: Int
    ): PitchingConnection!
    node(id: ID!): Node
  }

  type Subscription {
    batting(where: BattingSubscriptionWhereInput): BattingSubscriptionPayload
    person(where: PersonSubscriptionWhereInput): PersonSubscriptionPayload
    pitching(where: PitchingSubscriptionWhereInput): PitchingSubscriptionPayload
  }
`;
