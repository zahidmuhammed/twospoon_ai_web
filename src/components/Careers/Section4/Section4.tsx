import styles from "./Section4.module.css";
import { Image } from "../../../ui/Image";
import { FounderNoteBody } from "./FounderNoteBody";
import { FounderNoteReveal } from "./FounderNoteReveal";

export function Section4() {
  return (
    <section className={styles.section4} id={"founder-note"}>
      <div className={styles.container2}>
        <div className={styles.noteFromThe} data-border={"true"}>
          <div className={styles.noteFromThe2}>
            <div className={styles.utitliy}>
              <div className={styles.icon}></div>
              <div className={styles.icon2}></div>
              <div className={styles.ellipse1744}></div>
            </div>
            <div className={styles.contentWrapper}>
              <div className={styles.noteFromThe3}>
                <div className={styles.aNoteFromTheFounder}>
                  <p className={styles.noteFromThe4} dir={"auto"}>
                    A note from the founder
                  </p>
                </div>
              </div>
              <div className={styles.divider}></div>
              <div
                className={styles.keptSeeingAmbitious}
                data-founder-note-scroll-target={true}
              >
                <div className={styles.div42}>
                  <div className={styles.div41}></div>
                </div>
                <div className={styles.keptSeeingAmbitious2}>
                  <div
                    className={
                      styles.andWeReNotTryingToBeOneALotOfHouseholdNameTechCompaniesTodayAreSellingSoftwareToOtherSoftwareCompaniesDonTGetUsWrongThatSImportantAndImpactfulWorkWorkWeVeDoneOurselvesPreviouslyButItSNotWhatWeDoHereAtPerceptaTheWorldIsAtAnInflectionPointToDetermineIfAIWillActuallyHelpFixWhatSBrokenWeReTakingOnSomeOfTheMostPersistentChallengesOfTheLast50YearsInTheIndustriesThatAffectAllOfOurLivesAndWeThinkWeVeGotAGenerationalShotOurMultidisciplinaryApproachBlendsCuttingEdgeResearchProductAndEngineeringInEqualMeasureAndThroughOurRelationshipWithGeneralCatalystWeCanActuallyImplementSolutionsAtTheMostImpactfulAltitudesOnAnyGivenWeekYouLlFindUsOnsiteAtHospitalsInOhioShadowingEveryoneFromNursesToDoctorsToThePatientBedTransportersWheelingPeopleBackAndForthInTheERWeReSittingDownWithMissionDrivenLeadersTryingToMakeValueBasedCareForMedicaidAndMedicarePatientsSustainableForTheFirstTimeWeRePartneringWithAnthropicAndStateLeadersInMarylandToSpeedUpAccessToSNAPBenefitsAndOtherFormsOfGovernmentAssistanceWeReHelpingJanusHendersonInvestorsModernizeAssetManagementAcrossHundredsOfBillionsOfDollarsInCapitalOrWeReApplyingAdvancedModelingTechniquesToOptimizeComplexSupplyChainProblemsForGlobalBusinessesWePartnerDeeplyWithThePeopleWeReBuildingForAndThatSOurSuperpowerItKeepsUsGroundedInTheRealityOfTheSystemsTodayAndOurDreamsForTomorrowAllOfThisIsEqualPartsTerrifyingAndExhilaratingOurConfidenceIsNotRootedInUnfoundedHubrisOrSaviorismButInAnIntimateUnderstandingOfTheSystemsAtWorkAndWhatCanBePossibleWithTheTechnologyWeReBuildingWeReLookingForPeopleWhoAreDrivenByADeepOptimismTowardsTheFutureTheCuriosityToFigureOutHowToGetThereAndTheTenacityAndCraftToBuildItIfThatSoundsLikeYourKindOfThingWeThinkYouLlLikeItHere
                    }
                  >
                    <FounderNoteReveal className={styles.keptSeeingAmbitious3}>
                      <FounderNoteBody />
                    </FounderNoteReveal>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.div49}>
            <div className={styles.founderDeets}>
              <div className={styles.founderDetals}>
                <div className={styles.iMGWrapper} data-border={"true"}>
                  <div className={styles.iMG15}>
                    <div className={styles.div45}>
                      <Image
                        className={styles.image24}
                        src={"/assets/Bp5nlqU7cnB3RBYW98LaOVqCQ-69e477d7d7.png"}
                        alt={"Image24"}
                        width={320}
                        height={320}
                        srcSet={
                          "/assets/Bp5nlqU7cnB3RBYW98LaOVqCQ-252a79b6be.png 160w, /assets/Bp5nlqU7cnB3RBYW98LaOVqCQ-bef7c658ea.png 320w, /assets/Bp5nlqU7cnB3RBYW98LaOVqCQ-4b8472eba1.png 640w"
                        }
                        sizes={"(max-width: 320px) 100vw, 320px"}
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.details}>
                  <div className={styles.santoshBishnoi2}>
                    <div className={styles.santoshBishnoi}>
                      <p className={styles.santoshBishnoi3} dir={"auto"}>
                        Santosh Bishnoi
                      </p>
                    </div>
                  </div>
                  <div className={styles.founderCEOTwoSpoon2}>
                    <div className={styles.founderCEOTwoSpoon}>
                      <p className={styles.founderCEOTwoSpoon3} dir={"auto"}>
                        Founder &amp; CEO, TwoSpoon
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.iNSIGNIA} aria-hidden={"true"}>
              <div className={styles.div48}>
                <span
                  className={styles.icon3}
                  data-framecoded-svg="true"
                  aria-hidden="true"
                  dangerouslySetInnerHTML={{
                    __html:
                      '<svg viewBox="0 0 166 140" preserveAspectRatio="none" width="100%" height="100%" style="fill: rgb(0, 0, 0); stroke-width: 1px; stop-color: rgb(0, 0, 0); flood-color: rgb(0, 0, 0); font-family: sans-serif; font-size: 12px; font-weight: 400;"><use href="#svg-299751201_2993" style="fill: rgb(0, 0, 0); stroke-width: 1px; stop-color: rgb(0, 0, 0); flood-color: rgb(0, 0, 0); transform-origin: 0px 0px; font-family: sans-serif; font-size: 12px; font-weight: 400;"></use></svg>',
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
