
const I18N={
 en:{
  // Survey / species-presence wording. Three distinct facts — see speciesGap().
  fishPresentHead:"Fish species present",
  fishPresentSub:"Species recorded in Manitoba's waterbody data.",
  fishPresentSeparate:"Separate from the stocking history below.",
  fishPresentTap:"Tap one for its limits and season.",
  // The netting-survey card. It sits next to "Fish species present" and was
  // reading as the same list twice: same lake, overlapping species, no stated
  // difference. Presence is Manitoba's summary of what lives in the waterbody;
  // this is what a crew actually pulled out of the water and counted.
  netHead:"Counted in netting surveys",
  netSub:"Fish ON-Line records the catch from individual survey nettings, with counts. Fewer species appear here than in the presence list above — a species can live in a lake without turning up in a netting.",
  netCaught:"caught",
  netNoCount:"count not recorded",
  netNone:"No Fish ON-Line netting survey was matched to this waterbody identifier. That means no netting record, not an empty lake.",
  netLoading:"Netting survey records are loading, or unavailable offline.",
  surveyNone:"No fish survey has been published for this waterbody. That means no data, not an empty lake.",
  surveyForageOnly:"This lake has been surveyed, but the only species recorded were baitfish and forage fish, which this app does not list. That is a record of what the crew netted, not a full picture of the lake.",
  surveyUnidentified:"This lake has been surveyed, but the records are not identified to species — only to a family or genus. There are fish here; Manitoba's data does not say which.",
  headForageOnly:"Forage species only",
  headUnidentified:"Not identified to species",
  metaNoSurvey:"No survey data",
  metaForageOnly:"Forage species only",
  metaUnidentified:"Not identified to species",
  speciesRecordedOne:"species recorded",
  speciesRecordedMany:"species recorded",
  maxDepth:"Maximum depth",meanDepth:"Mean depth",surfaceArea:"Surface area",
  waterClarity:"Water clarity",thermalRegime:"Thermal regime",
  // Status and progress lines
  loadingData:"Loading Manitoba data…",loadingRecords:"Loading…",searchingManitoba:"Searching Manitoba…",
  searchingAllLakes:"Searching all Manitoba lakes…",searchingFor:"Searching Manitoba for {sp}…",
  loadingZones:"Loading Ontario FMZ boundaries…",zonesRetry:"Zone boundaries unavailable — retrying",
  zonesUnavailable:"Zone boundaries unavailable",loadingAccess:"Loading Manitoba access points…",
  accessUnavailable:"Access-point service unavailable",findingLocation:"Finding your location…",
  locationUnavailable:"Location unavailable",
  contoursOn:"Depth contours on • not for navigation",
  bathyNote:"Government bathymetry • not for navigation",
  // Find Fish mode note
  modeNoteAny:"Searches provincial fish survey records, not just stocking. Most Manitoba fish were never stocked.",
  modeNoteStocked:"Only lakes with a stocking record for this species.",
  // Catch log
  catchSpeciesPh:"Species e.g. Walleye",catchLengthPh:"Length cm",catchNotesPh:"Catch notes (optional)",
  tripNotesPh:"Trip notes",enterSpecies:"Enter the fish species.",minimumPh:"e.g. 2000",
  // Result cards
  badgeBestMatch:"Best Match",recordedNotStocked:"Recorded here (not stocked)",
  fishStocked:"fish stocked",kmAway:"km away",records:"records",
  explore:"Explore",nearMe:"Near Me",sections:"Sections",
  plateNote:"Illustration \u2014 not for identification",
  regsStale:"These regulations are Ontario's {year} rules and {now} rules are now in force. Treat every season, limit and size below as out of date and check Ontario's current summary before you fish.",
  viewCurrentRegs:"View Current FMZ {zone} Regulations",
  checkRegsFor:"Check current FMZ {zone} regulations",
  illustrations:"Fish illustrations",
  clearFiltersOn:"Clear all filters",
  clearFiltersOff:"Clear filters — nothing is set",
  capSettings:"Settings",
  capHelp:"Help",
  accUnnamed:"unnamed site",
  nearestAccess:"Nearest fishing access",
  accPoint:"Access point",
  accParking:"parking",
  accAccessible:"accessible",
  accFee:"user fee",
  accNoFee:"no fee",
  accVerified:"last verified {year}",
  accessNoneNearby:"No access point within {km} km appears in Manitoba's index. That means no record for this area, not that there is nowhere to launch.",
  accessNotBuilt:"Access-point data has not been built into this copy of the app yet.",
  accessNote:"Manitoba Waterbody Entry Points. Sites change — check locally before towing a boat.",
  offlineNote:"Don’t completely close the app if you are expecting low or no cell reception — it keeps everything you need for the lake ready to go.",
  splashWarning:"Manitoba Stocked Lakes. Loading lakes…",
  loadingSub:"Fetching Manitoba's stocking records and lake index. Search will be ready in a moment.",
  splashLoading:"Loading Manitoba lakes…",
  splashCount:"Loading {n} Lakes",
  emptyWheelsHid:"{n} lakes match your search, but the {what} filter is hiding them.",
  clearThose:"Clear that filter",
  lakeIndexLoading:"Still loading Manitoba's full lake index — these results are stocked lakes only for the moment, and will fill in on their own.",
  lakeIndexUnavailable:"Manitoba's full lake index has not loaded, so these results are stocked lakes only. It needs a connection the first time. Reconnect and reopen the app to get the rest.",
  onOpening:"When the app opens",
  onOpeningNote:"Your last search is kept on this device. It replays as soon as the app opens; if a distance was set, it narrows again the moment your position arrives.",
  reopenLastSearch:"Reopen my last search",
  startFresh:"Start fresh",
  deleteTrip:"Delete this trip",
  deleteTripAsk:"Delete this trip and its catches?",
  tripDeleted:"Trip deleted.",
  checklistLocked:"This trip has ended, so the checklist is kept as it was.",
  tripAlreadyOpen:"You already have a trip running on this lake — opened it instead.",
  lakeDepth:"Lake depth",
  depthKnown:"Manitoba's records give a mean depth of {mean} ft. No maximum depth is published.",
  depthUnknown:"Manitoba has no depth on record for this lake. That means no survey figure exists, not that the lake is shallow.",
  depthNotForNav:"Depth figures vary in age and accuracy and must never be used for navigation.",
  accessNotLoaded:"The access-point list has not loaded. Reload the app — it is bundled, so it does not need a connection.",
  lakeMapLabel:"Map of this lake",
  myLocation:"My Location",
  searchHint:"Four ways to search: by fish species, by lake, by town, or from your location.",
  lakesNearTown:"Lakes near {town}",
  accessDataPending:"The access-point list hasn’t loaded yet, so this search ran without that filter. It will apply automatically once the list arrives.",
  locationOffFallback:"Location is off, so this searched all of Manitoba. Turn location on to limit the distance.",
  locationUnavailableFallback:"Your location could not be found, so this searched all of Manitoba. Try again outdoors.",
  onboardStatsNote:"What is in the app right now.",
  readyToSearch:"{n} lakes ready to search",
  searchPromptTitle:"Search {n} Manitoba lakes",
  searchPromptSub:"Search by fish species, lake or town — or tap My Location to search around you.",
  turnOnLocation:"Turn on location",
  turnOnLocationSub:"to show how far each lake is from you",
  emptyFavorites:"No saved lakes yet. Tap ☆ on any lake to keep it here.",
  emptyNeedLocation:"Turn on location to see the lakes closest to you, or search for one by name.",
  emptyNoDataYet:"Stocking data hasn’t loaded yet.",
  emptySearchingProvince:"Searching every lake in Manitoba…",
  emptySpeciesNeedsLocation:"Turn on location to search the whole province for this species — a species search needs somewhere to search from.",
  emptyNoMatch:"No lakes match these filters. Try widening the distance or clearing the species.",
  sortDefault:"Best guess",
  editCatch:"Edit this catch",
  saveCatch:"Save changes",
  cancel:"Cancel",
  editingCatch:"Editing a catch",
  editedMark:"edited",
  delete:"Delete",
  deleteCatchAsk:"Delete this catch?",
  catchDeleted:"Catch deleted.",
  catchUpdated:"Catch updated.",
  unitCm:"cm",
  unitIn:"in",
  unitKg:"kg",
  unitLb:"lb",
  units:"Units",
  unitsNote:"Lengths and weights are stored the same way either way, so switching does not change anything you have already logged.",
  metric:"Metric (cm / kg)",
  imperial:"Imperial (in / lb)",
  length:"Length",
  weight:"Weight",
  disposition:"Kept or released",
  released:"Released",
  kept:"Kept",
  catchLog:"Catch log",
  checklist:"Checklist",
  notes:"Notes",
  tripSections:"Trip sections",
  activeTrip:"Active trip",
  completedTrip:"Completed",
  catchOne:"catch",
  catchMany:"catches",
  fmz:"FMZ",
  lakeSnapshot:"Lake snapshot",
  stockedWith:"Stocked",
  latestStocking:"Latest stocking",
  observed:"Observed",
  checkFmzRegs:"Check regulations for FMZ",
  noCatchesYet:"No catches logged yet.",
  noTripsYet:"No fishing trips yet. Open a lake and tap “Start Fishing Trip.”",
  tripEndedNote:"This trip has ended, so no more catches can be added.",
  addCatch:"+ Add catch",
  deleteCatch:"Delete this catch",
  catchSpeciesLabel:"Species",
  choooseSpecies:"Choose a species…",
  otherSpecies:"Other…",
  noSpeciesListNote:"No species are on record for this lake, so type what you caught.",
  saveCatchLocation:"Save current catch location",
  checkEatingAdvice:"Check the eating advice for this lake",
  advLoading:"Consumption-advisory data is loading.",
  advMulti:"More than one Ontario Fish Guide location has this waterbody name, so this app will not guess which advisory applies.",
  advNone:"No exact-name Ontario Fish Guide advisory location was matched to this lake.",
  advVerifyLoc:"Use Ontario's official Fish Guide to verify the location.",
  advOpenGuide:"Open Ontario Fish Guide",
  advSpeciesLabel:"Fish species",advLengthLabel:"Fish length (cm)",advLengthPh:"e.g. 42",
  advCheckBtn:"Check Eating Advice",
  advEnterLength:"Enter the fish length in centimetres.",
  advNoRange:"No tested advisory range was found for a {len} cm {sp} at this location. Check the official Ontario Fish Guide.",
  advGeneral:"General population",advSensitive:"Sensitive population",advMeals:"meals/month",advNA:"N/A",
  advCause:"Advisory cause listed by Ontario: {c}",
  advPlanNote:"This is planning information from Ontario's 2025 advisory database. Verify current advice in the official Fish Guide.",
  advVerifyBtn:"Verify in Official Ontario Fish Guide",
  checklistNote:"Saved with this trip. Add your own items — they stay on this device.",
  addItem:"Add",
  addItemPh:"Add an item…",
  removeItem:"Remove this item",
  uncheckAll:"Uncheck everything",
  saveTripNotes:"Save trip notes",
  notesSaved:"Trip notes saved.",
  endTrip:"End fishing trip",
  chk_licence:"Fishing licence / Outdoors Card",
  chk_rodReel:"Rods and reels",
  chk_tackle:"Tackle box",
  chk_lineHooks:"Spare line and hooks",
  chk_bait:"Bait",
  chk_netPliers:"Landing net and pliers",
  chk_measure:"Tape or measuring board",
  chk_pfd:"Life jackets",
  chk_firstAid:"First aid kit",
  chk_sunProtection:"Sunscreen, hat and sunglasses",
  chk_rainGear:"Rain gear",
  chk_waterFood:"Water and food",
  chk_phonePower:"Phone and power bank",
  chk_floatPlan:"Tell someone where you are going",
  chk_garbageBag:"Bag for your garbage",
  rightsNote:"App, design and text. The government, OpenStreetMap and GeoNames data it uses stay under their own licences.",
  plateAboutNote:"They are shown to help you picture the fish, not to identify one. Several Manitoba species are easily confused and their limits differ \u2014 check the official rule before keeping anything.",
  noLakeWithSpecies:"No lake within {r} km has {sp} on record. Try a wider distance — or the species may simply not have been surveyed nearby.",
  noLakesWithin:"No lakes found within {r} km.",
  weatherAlert:"Weather alert",lakeArea:"Lake area",
  findFish:"Find Fish",distance:"Distance",species:"Species",stockingYear:"Stocking year",
  minimumStocked:"Minimum fish stocked",lakeName:"Lake name",sortResults:"Sort results",
  bestMatch:"Best Match",closest:"Closest",recent:"Most recently stocked",quantity:"Most fish stocked",
  findStocked:"Find Fish Near Me",myLakes:"My Lakes",trips:"Trips",overview:"Overview",
  rulesTab:"Rules",
  trackBtn:"Track",recordBtn:"Record",trailsBtn:"Trails",
  trailStartHint:"Tap Record on the map to start laying a trail behind you.",
  trailRecordingHint:"Recording. Move a little and your trail will appear here, ready to name and save.",
  trailReadyToSave:"Name it and save to keep this trail.",
  lakeOne:"lake",lakeMany:"lakes",
  dbLoadErrTitle:"Manitoba lake database didn't load.",
  dbLoadErrBody:"Reload the app and try again. Saved lakes and regulations are still available.",
  viewOnMap:"View on map",
  noCatchLocation:"No location recorded",
  saveCatchAsSpot:"Mark this spot",
  catchMarked:"Marked on map",
  catchMarkedToast:"Spot saved to this lake",
  stocking:"Stocking",regulations:"Regulations",access:"Access",fishSpecies:"Fish Species",
  depth:"Depth",eatingAdvice:"Eating Advice",weather:"Weather",sportLimit:"Sport limit",
  conservationLimit:"Conservation limit",season:"Season",verify:"Verify Current Manitoba Rule",
  weatherTitle:"Weather & Fishing Conditions",refreshAlerts:"Refresh Alerts",
  noAlert:"No active Environment Canada alert was returned for the lake area.",
  language:"Language",english:"English",french:"Français",viewLake:"View Lake →",
  matchingStocked:"Matching fish stocked",mostRecent:"Most recent stocking",
  specialRule:"Special lake rule",officialRequired:"Official Manitoba rule required",
  tagline:"Find stocked lakes. Know the rules. Plan the trip.",
  help:"Help",about:"About",startExploring:"Start Exploring",
  onboardTitle:"Find your next Manitoba fishing lake",
  onboardText:"Search by distance, species and stocking history, then check regulations, access, weather and eating advice before you go.",
  onboard1:"Choose a distance and species",onboard2:"Compare stocked lakes",onboard3:"Open a lake and verify the current rules",
  helpTitle:"Help & About",helpFind:"Find Fish",helpFindText:"Use your location, distance, species, stocking year and quantity filters to find stocked lakes.",
  helpRules:"Regulations",helpRulesText:"The app imports Ontario's open regulation data for the season named on the Regulations tab, and warns you when that season has passed. Current official Ontario rules remain the final verification source.",
  helpTrips:"Trips & catches",helpTripsText:"Trip notes and catch logs are stored on this device. Save a backup below before you reset or change devices.",
  helpWeather:"Weather",helpWeatherText:"Weather alerts come from Environment and Climate Change Canada. Weather information is for trip planning and safety, not a bite prediction.",
  privacy:"Privacy",privacyText:"Location is requested only when you use a location feature, and is never sent anywhere. Your most recent position is kept on this device for two weeks so distances still show next time. Trips and catches stay on this device.",
  dataSources:"Government data sources",disclaimer:"Not an official Government of Manitoba app.",
  yourData:"Your data",yourDataText:"Trips, catches and saved lakes stay on this device. Save a backup before you change or reset your device.",
  exportData:"Save a backup",importData:"Restore a backup",
  textSize:"Text size",textSizeNote:"Larger text throughout the app. Useful in bright sun or on the water.",
  sizePreview:"Brook Trout • stocked 2025 • 4,200 fish",
  location:"Location",locationNote:"Used on this device to sort lakes by distance. Never sent anywhere.",
  useLocation:"Use my location",
  appLink:"App link",appLinkNote:"Share Manitoba Stocked Lakes with someone.",
  copyLink:"Copy link",shareApp:"Share",linkCopied:"Link copied.",
  heroTitle:"Find your next fishing spot",searchPh:"Lake, town or species",search:"Search",
  statLakesLbl:"Stocked lakes",statRecordsLbl:"Stocking records",statSpeciesLbl:"Species",statLatestLbl:"Latest year",
  recentlyStocked:"Recently Stocked",recentlyStockedSub:"Newest records first",
  recentNear:"Recent Near Me",recentNearSub:"Newest stocked lakes close to you",
  regs2026:"Fishing Regulations",regs2026Sub:"Official Ontario fishing rules",
  fishOnlineSub:"Government lake information",fishOnlineSub2:"Government lake information and maps",
  lakesNearYou:"Lakes near you",sortedByDrive:"Sorted by how far you'd have to drive.",within:"Within",
  myLakesSub:"Lakes you've saved. Tap \u2606 on any lake to keep it here.",filterSavedPh:"Filter your saved lakes",
  tripsCatches:"Trips & catches",logbookSub:"Your logbook, stored on this device.",
  findFishHead:"\uD83D\uDD0E Find Fish",findFishSub:"Find which lakes hold a species, near you.",
  modeAny:"Anywhere the fish are",modeStocked:"Stocked lakes only",
  anySpecies:"Any species",anyYear:"Any year",optionalLakePh:"Optional lake name",
  onlyAccess:"Only lakes with a nearby fishing access point",reset:"Reset",
  allSpecies:"All species",allYears:"All years",anyDistance:"Any distance",clear:"Clear",
  includeUnstocked:"Include lakes that aren't stocked",filtersChanged:"Filters changed \u2014 tap Search to apply.",
  showAccess:"Show fishing access points",showFMZ:"Show Fisheries Management Zones",
  showDepth:"Show lake depth contours",accessStatus:"Boat launches \u2022 shore access \u2022 docks/piers",
  depthStatus:"Government bathymetry \u2022 not for navigation",
  lakeMap:"Lake map",baseMap:"Map",baseTopo:"Topo",baseDepth:"Depth",
  depthZoomIn:"Zoom in to a lake to see depth contours.",
  expandMap:"Expand map",closeMap:"Close full screen",
  tilesOffline:"Map tiles unavailable offline \u2014 everything else still works.",tapMarker:"Tap a marker for details",loading:"Loading\u2026",
  baseHint:"Tap Map, Topo or Depth to change the view.",
  tilesSlow:"Topo and Depth pull live map imagery and can take a moment to load, especially the first time.",
  findMe:"Find me",
  goToMap:"Go To Map",
  trailOn:"Trail: On",
  trailOff:"Trail: Off",
  clearTrail:"Clear",
  spotsTitle:"Fishing Spots",
  spotsBtn:"My Spots",
  spotsNav:"My Spots",
  spotsNavTitle:"My Fishing Spots",
  spotSearchPh:"Search spots or lakes",
  spotOne:"spot",
  spotMany:"spots",
  spotUnfiled:"Unfiled",
  saveChanges:"Save",
  deleteSpot:"Delete",
  noSpotsAnywhere:"No spots yet. Open a lake, then press and hold the map, or use + New Spot.",
  noSpotsMatch:"No spots match.",
  allSpots:"All",
  noSpotsInCategory:"No spots in this colour yet.",
  openLakeFirst:"Open a lake first \u2014 fishing spots are saved per lake.",
  tapMapForSpot:"Tap the map to mark a spot.",
  hide:"Hide",
  show:"Show",
  newSpot:"New Spot",
  
  spotNamePh:"Spot name",
  saveSpot:"Save spot",
  spotsFull:"Spot list is full (50)",
  noSpots:"No spots yet. Tap + New Spot to mark the map centre, or press and hold anywhere on the map.",
  cancel:"Cancel",
  trailsTitle:"Trails",
  currentTrail:"Current trail",
  saveTrail:"Save trail",
  trailNamePh:"Trail name",
  tapAgain:"Tap again",
  showTrail:"Show",
  hideTrail:"Hide",
  noTrails:"No trails yet. Turn on Track and Trail, and your path will be recorded here.",
  trailsFull:"Trail list is full (30). Delete one to save another.",
  offlineSave:"Save for offline",
  offlineSaved:"Saved \u2713",
  offlineWorking:"Saving\u2026",
  offlineUnavailable:"Offline saving needs the app to finish loading. Try again in a moment.",
  trackingOn:"Track: On",
  trackingOff:"Track: Off",
  officialSources:"Official Manitoba sources",
  regsSummaryNote:"Regulations in this app are a summary. These are the authoritative sources \u2014 open them before you fish.",
  regsSummaryTitle:"Fishing Regulations Summary",regsSummarySub:"Seasons, limits and slot sizes by zone",
  licences:"Fishing licences",licencesSub:"Buy or renew an Outdoors Card and licence",
  eatingGuide:"Guide to Eating Ontario Fish",eatingGuideSub:"Consumption advisories by waterbody",
  ecWeather:"Environment Canada weather",ecWeatherSub:"Forecasts and marine warnings",
  openData:"Manitoba Open Data",openDataSub:"The datasets behind this app",
  footerSources:"Fish stocking, regulations and advisory data: Government of Ontario. Weather alerts: Environment and Climate Change Canada.",
  footerDisclaimer:"Not an official Government of Ontario application. Always confirm the current regulations before you fish.",
  noSpeciesRecorded:"No species recorded",notStocked:"Not stocked",latestStocking:"Latest stocking",speciesUnavailable:"Species unavailable",
  exploreStocked:"Explore Manitoba lakes",stockedNearMe:"Stocked lakes near me",recentWithin100:"Recently stocked within 100 km",
  myFishingTrips:"My Fishing Trips",tripsCount:"trips",
  settings:"Settings",helpAbout:"Help and about",withinKm:"Within {n} km",
  regsEnglishNote:"Ontario publishes its regulations, seasons and limits in English only in this dataset, so that text stays as the province wrote it.",
  stockingData:"Stocking data",
  stockingDataNote:"Bundled with the app, so it opens without a network. Check Manitoba for newer records whenever you have a signal.",
  checkStockings:"Check for new stockings",checkingStockings:"Checking…",
  asOf:"Manitoba stocking data as of",liveData:"Manitoba stocking data, loaded live."
 },
 fr:{
  // Formulation des relev\u00e9s d'esp\u00e8ces \u2014 trois faits distincts, voir speciesGap().
  fishPresentHead:"Esp\u00e8ces de poissons pr\u00e9sentes",
  fishPresentSub:"Esp\u00e8ces r\u00e9pertori\u00e9es dans les donn\u00e9es sur les plans d'eau du Manitoba.",
  fishPresentSeparate:"Distinct de l'historique d'ensemencement ci-dessous.",
  fishPresentTap:"Touchez une esp\u00e8ce pour conna\u00eetre ses limites et sa saison.",
  netHead:"D\u00e9nombr\u00e9s lors de p\u00eaches exp\u00e9rimentales",
  netSub:"P\u00eache en direct r\u00e9pertorie les prises de chaque p\u00eache exp\u00e9rimentale, avec les d\u00e9nombrements. Moins d'esp\u00e8ces figurent ici que dans la liste des esp\u00e8ces pr\u00e9sentes ci-dessus \u2014 une esp\u00e8ce peut vivre dans un lac sans \u00eatre captur\u00e9e.",
  netCaught:"captur\u00e9s",
  netNoCount:"d\u00e9nombrement non consign\u00e9",
  netNone:"Aucune p\u00eache exp\u00e9rimentale de P\u00eache en direct n'a \u00e9t\u00e9 associ\u00e9e \u00e0 cet identifiant de plan d'eau. Cela signifie qu'il n'y a pas de relev\u00e9 de capture, et non que le lac est vide.",
  netLoading:"Les relev\u00e9s de p\u00eache exp\u00e9rimentale se chargent ou ne sont pas disponibles hors ligne.",
  surveyNone:"Aucun relev\u00e9 de poissons n'a \u00e9t\u00e9 publi\u00e9 pour ce plan d'eau. Cela signifie qu'il n'y a pas de donn\u00e9es, et non que le lac est vide.",
  surveyForageOnly:"Ce lac a fait l'objet d'un relev\u00e9, mais les seules esp\u00e8ces r\u00e9pertori\u00e9es \u00e9taient des poissons-app\u00e2ts et des poissons fourrages, que cette application ne r\u00e9pertorie pas. Il s'agit du relev\u00e9 des captures de l'\u00e9quipe, et non d'un portrait complet du lac.",
  surveyUnidentified:"Ce lac a fait l'objet d'un relev\u00e9, mais les donn\u00e9es ne pr\u00e9cisent pas l'esp\u00e8ce \u2014 seulement la famille ou le genre. Il y a des poissons ici; les donn\u00e9es du Manitoba ne disent pas lesquels.",
  headForageOnly:"Poissons fourrages seulement",
  headUnidentified:"Esp\u00e8ce non pr\u00e9cis\u00e9e",
  metaNoSurvey:"Aucun relev\u00e9",
  metaForageOnly:"Poissons fourrages seulement",
  metaUnidentified:"Esp\u00e8ce non pr\u00e9cis\u00e9e",
  speciesRecordedOne:"esp\u00e8ce r\u00e9pertori\u00e9e",
  speciesRecordedMany:"esp\u00e8ces r\u00e9pertori\u00e9es",
  maxDepth:"Profondeur maximale",meanDepth:"Profondeur moyenne",surfaceArea:"Superficie",
  waterClarity:"Transparence de l'eau",thermalRegime:"R\u00e9gime thermique",
  // Lignes d'\u00e9tat et de progression
  loadingData:"Chargement des donn\u00e9es du Manitoba\u2026",loadingRecords:"Chargement\u2026",
  searchingManitoba:"Recherche au Manitoba\u2026",
  searchingAllLakes:"Recherche dans tous les lacs du Manitoba\u2026",searchingFor:"Recherche de {sp} au Manitoba\u2026",
  loadingZones:"Chargement des limites des ZGP de l'Ontario\u2026",zonesRetry:"Limites de zone non disponibles \u2014 nouvelle tentative",
  zonesUnavailable:"Limites de zone non disponibles",loadingAccess:"Chargement des points d'acc\u00e8s du Manitoba\u2026",
  accessUnavailable:"Service des points d'acc\u00e8s non disponible",findingLocation:"Localisation en cours\u2026",
  locationUnavailable:"Position non disponible",
  contoursOn:"Courbes de profondeur activ\u00e9es \u2022 ne pas utiliser pour la navigation",
  bathyNote:"Bathym\u00e9trie gouvernementale \u2022 ne pas utiliser pour la navigation",
  // Note du mode Trouver du poisson
  modeNoteAny:"Recherche dans les relev\u00e9s provinciaux de poissons, pas seulement l'ensemencement. La plupart des poissons du Manitoba n'ont jamais \u00e9t\u00e9 ensemenc\u00e9s.",
  modeNoteStocked:"Seuls les lacs ayant un registre d'ensemencement pour cette esp\u00e8ce.",
  // Journal de p\u00eache
  catchSpeciesPh:"Esp\u00e8ce, p. ex. dor\u00e9 jaune",catchLengthPh:"Longueur cm",catchNotesPh:"Notes sur la capture (facultatif)",
  tripNotesPh:"Notes de sortie",enterSpecies:"Entrez l'esp\u00e8ce de poisson.",minimumPh:"p. ex. 2000",
  // Fiches de r\u00e9sultats
  badgeBestMatch:"Meilleure correspondance",recordedNotStocked:"R\u00e9pertori\u00e9 ici (non ensemenc\u00e9)",
  fishStocked:"poissons ensemenc\u00e9s",kmAway:"km",records:"enregistrements",
  explore:"Explorer",nearMe:"Pr\u00e8s de moi",sections:"Sections",
  plateNote:"Illustration \u2014 non destin\u00e9e \u00e0 l'identification",
  regsStale:"Ces règlements sont ceux de {year} et les règles de {now} sont maintenant en vigueur. Considérez chaque saison, limite et taille ci-dessous comme périmée et vérifiez le résumé actuel du Manitoba avant de pêcher.",
  viewCurrentRegs:"Voir les règlements actuels de la ZGP {zone}",
  checkRegsFor:"Vérifiez les règlements actuels de la ZGP {zone}",
  illustrations:"Illustrations de poissons",
  clearFiltersOn:"Effacer tous les filtres",
  clearFiltersOff:"Effacer les filtres — aucun filtre actif",
  capSettings:"Réglages",
  capHelp:"Aide",
  accUnnamed:"site sans nom",
  nearestAccess:"Accès de pêche le plus proche",
  accPoint:"Point d’accès",
  accParking:"stationnement",
  accAccessible:"accessible",
  accFee:"frais d’utilisation",
  accNoFee:"sans frais",
  accVerified:"vérifié en {year}",
  accessNoneNearby:"Aucun point d’accès à moins de {km} km ne figure dans l’index du Manitoba. Cela signifie qu’il n’y a aucune donnée pour ce secteur, non qu’il n’y a nulle part où mettre à l’eau.",
  accessNotBuilt:"Les données des points d’accès ne sont pas encore intégrées à cette version de l’application.",
  accessNote:"Données des points d’accès de pêche du Manitoba. Les sites changent — vérifiez sur place avant de remorquer un bateau.",
  offlineNote:"Ne fermez pas complètement l’application si vous vous attendez à une réception faible ou nulle — elle garde tout ce qu’il vous faut pour le lac à portée de main.",
  splashWarning:"Manitoba Stocked Lakes. Chargement des lacs…",
  loadingSub:"Récupération des données d’ensemencement et de l’index des lacs du Manitoba. La recherche sera prête dans un instant.",
  splashLoading:"Chargement des lacs du Manitoba…",
  splashCount:"Chargement de {n} lacs…",
  emptyWheelsHid:"{n} lacs correspondent à votre recherche, mais le filtre {what} les masque.",
  clearThose:"Effacer ce filtre",
  lakeIndexLoading:"Chargement de l’index complet des lacs du Manitoba — ces résultats ne comprennent que les lacs ensemencés pour l’instant; ils se compléteront d’eux-mêmes.",
  lakeIndexUnavailable:"L’index complet des lacs du Manitoba n’est pas chargé; ces résultats ne comprennent que les lacs ensemencés. Une connexion est requise la première fois. Reconnectez-vous et rouvrez l’application.",
  onOpening:"À l’ouverture",
  onOpeningNote:"Votre dernière recherche est conservée sur cet appareil. Elle est relancée dès l’ouverture; si une distance était choisie, elle se resserre dès que votre position arrive.",
  reopenLastSearch:"Rouvrir ma dernière recherche",
  startFresh:"Recommencer à zéro",
  deleteTrip:"Supprimer cette sortie",
  deleteTripAsk:"Supprimer cette sortie et ses prises ?",
  tripDeleted:"Sortie supprimée.",
  checklistLocked:"Cette sortie est terminée; la liste est conservée telle quelle.",
  tripAlreadyOpen:"Une sortie est déjà en cours sur ce lac — elle a été ouverte.",
  lakeDepth:"Profondeur du lac",
  depthKnown:"Les relevés du Manitoba indiquent une profondeur moyenne de {mean} pi. Aucune profondeur maximale n’est publiée.",
  depthUnknown:"Le Manitoba n’a aucune profondeur au dossier pour ce lac. Cela signifie qu’aucun relevé n’existe, non que le lac est peu profond.",
  depthNotForNav:"Les profondeurs varient en âge et en précision et ne doivent jamais servir à la navigation.",
  accessNotLoaded:"La liste des accès de pêche du Manitoba n’est pas chargée. Elle exige une connexion et peut donc être indisponible au lac.",
  lakeMapLabel:"Carte de ce lac",
  myLocation:"Ma position",
  searchHint:"Quatre façons de chercher : par espèce de poisson, par lac, par ville, ou à partir de votre position.",
  lakesNearTown:"Lacs près de {town}",
  accessDataPending:"La liste des points d’accès n’est pas encore chargée; la recherche a été faite sans ce filtre. Il s’appliquera automatiquement dès son arrivée.",
  locationOffFallback:"La localisation est désactivée; la recherche a couvert tout le Manitoba. Activez-la pour limiter la distance.",
  locationUnavailableFallback:"Votre position est introuvable; la recherche a couvert tout le Manitoba. Réessayez à l’extérieur.",
  onboardStatsNote:"Ce que contient l’application en ce moment.",
  readyToSearch:"{n} lacs prêts à être cherchés",
  searchPromptTitle:"Chercher parmi {n} lacs du Manitoba",
  searchPromptSub:"Cherchez par espèce, lac ou ville — ou touchez Ma position pour chercher autour de vous.",
  turnOnLocation:"Activer la localisation",
  turnOnLocationSub:"pour afficher la distance de chaque lac",
  emptyFavorites:"Aucun lac enregistré. Touchez ☆ sur un lac pour le garder ici.",
  emptyNeedLocation:"Activez la localisation pour voir les lacs les plus proches, ou cherchez-en un par son nom.",
  emptyNoDataYet:"Les données d’ensemencement ne sont pas encore chargées.",
  emptySearchingProvince:"Recherche dans tous les lacs du Manitoba…",
  emptySpeciesNeedsLocation:"Activez la localisation pour chercher cette espèce dans toute la province — une recherche par espèce doit partir d’un endroit.",
  emptyNoMatch:"Aucun lac ne correspond à ces filtres. Essayez d’élargir la distance ou d’effacer l’espèce.",
  sortDefault:"Au mieux",
  editCatch:"Modifier cette prise",
  saveCatch:"Enregistrer",
  cancel:"Annuler",
  editingCatch:"Modification d’une prise",
  editedMark:"modifiée",
  delete:"Supprimer",
  deleteCatchAsk:"Supprimer cette prise ?",
  catchDeleted:"Prise supprimée.",
  catchUpdated:"Prise mise à jour.",
  unitCm:"cm",
  unitIn:"po",
  unitKg:"kg",
  unitLb:"lb",
  units:"Unités",
  unitsNote:"Les longueurs et les poids sont enregistrés de la même façon dans les deux cas : changer d’unités ne modifie rien de ce que vous avez déjà noté.",
  metric:"Métrique (cm / kg)",
  imperial:"Impérial (po / lb)",
  length:"Longueur",
  weight:"Poids",
  disposition:"Gardé ou remis à l’eau",
  released:"Remis à l’eau",
  kept:"Gardé",
  catchLog:"Journal de pêche",
  checklist:"Liste de vérification",
  notes:"Notes",
  tripSections:"Sections de la sortie",
  activeTrip:"Sortie en cours",
  completedTrip:"Terminée",
  catchOne:"prise",
  catchMany:"prises",
  fmz:"ZPP",
  lakeSnapshot:"Aperçu du lac",
  stockedWith:"Ensemencé",
  latestStocking:"Dernier ensemencement",
  observed:"Observé",
  checkFmzRegs:"Consulter la réglementation de la ZPP",
  noCatchesYet:"Aucune prise enregistrée.",
  noTripsYet:"Aucune sortie de pêche. Ouvrez un lac et touchez « Démarrer une sortie ».",
  tripEndedNote:"Cette sortie est terminée; aucune prise ne peut être ajoutée.",
  addCatch:"+ Ajouter une prise",
  deleteCatch:"Supprimer cette prise",
  catchSpeciesLabel:"Espèce",
  choooseSpecies:"Choisir une espèce…",
  otherSpecies:"Autre…",
  noSpeciesListNote:"Aucune espèce n’est répertoriée pour ce lac; inscrivez votre prise.",
  saveCatchLocation:"Enregistrer la position de la prise",
  checkEatingAdvice:"Consultez les conseils de consommation pour ce lac",
  advLoading:"Les donn\u00e9es sur les avis de consommation se chargent\u2026",
  advMulti:"Plusieurs emplacements du Guide de consommation du poisson de l'Ontario portent ce nom de plan d'eau; l'application ne devinera pas quel avis s'applique.",
  advNone:"Aucun emplacement du Guide de consommation du poisson de l'Ontario ne correspond exactement au nom de ce lac.",
  advVerifyLoc:"Utilisez le guide officiel du Manitoba pour v\u00e9rifier l'emplacement.",
  advOpenGuide:"Ouvrir le Guide de consommation de l'Ontario",
  advSpeciesLabel:"Esp\u00e8ce de poisson",advLengthLabel:"Longueur du poisson (cm)",advLengthPh:"p. ex. 42",
  advCheckBtn:"V\u00e9rifier les conseils de consommation",
  advEnterLength:"Entrez la longueur du poisson en centim\u00e8tres.",
  advNoRange:"Aucune plage test\u00e9e n'a \u00e9t\u00e9 trouv\u00e9e pour un {sp} de {len} cm \u00e0 cet endroit. Consultez le guide officiel du Manitoba.",
  advGeneral:"Population g\u00e9n\u00e9rale",advSensitive:"Population sensible",advMeals:"repas/mois",advNA:"s.o.",
  advCause:"Cause de l'avis indiqu\u00e9e par l'Ontario\u00a0: {c}",
  advPlanNote:"Information de planification tir\u00e9e de la base de donn\u00e9es des avis de 2025 de l'Ontario. V\u00e9rifiez les conseils \u00e0 jour dans le guide officiel.",
  advVerifyBtn:"V\u00e9rifier dans le guide officiel du Manitoba",
  checklistNote:"Enregistrée avec cette sortie. Ajoutez vos propres articles — ils restent sur cet appareil.",
  addItem:"Ajouter",
  addItemPh:"Ajouter un article…",
  removeItem:"Retirer cet article",
  uncheckAll:"Tout décocher",
  saveTripNotes:"Enregistrer les notes",
  notesSaved:"Notes enregistrées.",
  endTrip:"Terminer la sortie",
  chk_licence:"Permis de pêche / Carte Plein air",
  chk_rodReel:"Cannes et moulinets",
  chk_tackle:"Coffre à pêche",
  chk_lineHooks:"Fil et hameçons de rechange",
  chk_bait:"Appâts",
  chk_netPliers:"Épuisette et pinces",
  chk_measure:"Ruban ou planche à mesurer",
  chk_pfd:"Gilets de sauvetage",
  chk_firstAid:"Trousse de premiers soins",
  chk_sunProtection:"Crème solaire, chapeau et lunettes",
  chk_rainGear:"Vêtements de pluie",
  chk_waterFood:"Eau et nourriture",
  chk_phonePower:"Téléphone et batterie externe",
  chk_floatPlan:"Dire à quelqu’un où vous allez",
  chk_garbageBag:"Sac pour vos déchets",
  rightsNote:"Application, conception et textes. Les donn\u00e9es gouvernementales, OpenStreetMap et GeoNames qu'elle utilise demeurent sous leurs propres licences.",
  plateAboutNote:"Elles vous aident \u00e0 visualiser le poisson, mais ne servent pas \u00e0 l'identifier. Plusieurs esp\u00e8ces de l'Ontario se confondent facilement et leurs limites diff\u00e8rent \u2014 v\u00e9rifiez la r\u00e8gle officielle avant de garder une prise.",
  noLakeWithSpecies:"Aucun lac dans un rayon de {r}\u00a0km n'a de {sp} au registre. Essayez une distance plus grande \u2014 ou l'esp\u00e8ce n'a simplement pas fait l'objet d'un relev\u00e9 \u00e0 proximit\u00e9.",
  noLakesWithin:"Aucun lac trouv\u00e9 dans un rayon de {r}\u00a0km.",
  weatherAlert:"Alerte m\u00e9t\u00e9o",lakeArea:"Secteur du lac",
  findFish:"Trouver du poisson",distance:"Distance",species:"Espèce",stockingYear:"Année d'ensemencement",
  minimumStocked:"Nombre minimal de poissons ensemencés",lakeName:"Nom du lac",sortResults:"Trier les résultats",
  bestMatch:"Meilleure correspondance",closest:"Les plus proches",recent:"Ensemencement le plus récent",quantity:"Plus grand nombre ensemencé",
  findStocked:"Trouver du poisson près de moi",myLakes:"Mes lacs",trips:"Sorties",overview:"Aperçu",
  rulesTab:"R\u00e8gles",
  trackBtn:"Suivi",recordBtn:"Enregistrer",trailsBtn:"Parcours",
  trailStartHint:"Touchez Enregistrer sur la carte pour commencer un parcours.",
  trailRecordingHint:"Enregistrement en cours. D\u00e9placez-vous un peu et votre parcours appara\u00eetra ici.",
  trailReadyToSave:"Nommez-le et enregistrez-le pour le conserver.",
  lakeOne:"lac",lakeMany:"lacs",
  dbLoadErrTitle:"La base de donn\u00e9es des lacs du Manitoba n'a pas pu \u00eatre charg\u00e9e.",
  dbLoadErrBody:"Rechargez l'application et r\u00e9essayez. Les lacs enregistr\u00e9s et les r\u00e8glements restent disponibles.",
  viewOnMap:"Voir sur la carte",
  noCatchLocation:"Aucune position enregistr\u00e9e",
  saveCatchAsSpot:"Marquer ce lieu",
  catchMarked:"Marqu\u00e9 sur la carte",
  catchMarkedToast:"Lieu enregistr\u00e9 pour ce lac",
  stocking:"Ensemencement",regulations:"Règlements",access:"Accès",fishSpecies:"Espèces de poissons",
  depth:"Profondeur",eatingAdvice:"Conseils de consommation",weather:"Météo",sportLimit:"Limite sportive",
  conservationLimit:"Limite de conservation",season:"Saison",verify:"Vérifier le règlement actuel du Manitoba",
  weatherTitle:"Météo et conditions de pêche",refreshAlerts:"Actualiser les alertes",
  noAlert:"Aucune alerte active d’Environnement Canada n’a été retournée pour le secteur du lac.",
  language:"Langue",english:"English",french:"Français",viewLake:"Voir le lac →",
  matchingStocked:"Poissons ensemencés correspondants",mostRecent:"Ensemencement le plus récent",
  specialRule:"Règle spéciale pour ce plan d’eau",officialRequired:"Règlement officiel du Manitoba requis",
  tagline:"Trouvez des lacs ensemencés. Connaissez les règles. Planifiez votre sortie.",
  help:"Aide",about:"À propos",startExploring:"Commencer",
  onboardTitle:"Trouvez votre prochain lac de pêche au Manitoba",
  onboardText:"Recherchez par distance, espèce et historique d’ensemencement, puis vérifiez les règlements, l’accès, la météo et les conseils de consommation.",
  onboard1:"Choisissez une distance et une espèce",onboard2:"Comparez les lacs ensemencés",onboard3:"Ouvrez un lac et vérifiez les règles actuelles",
  helpTitle:"Aide et à propos",helpFind:"Trouver du poisson",helpFindText:"Utilisez votre position, la distance, l’espèce, l’année et la quantité d’ensemencement pour trouver des lacs.",
  helpRules:"Règlements",helpRulesText:"L’application importe les données ouvertes du Manitoba pour la saison indiquée dans l’onglet Règlements et vous avertit lorsque cette saison est passée. Les règles officielles actuelles du Manitoba demeurent la source finale de vérification.",
  helpTrips:"Sorties et prises",helpTripsText:"Les notes de sortie et les prises sont enregistrées sur cet appareil. Enregistrez une copie ci-dessous avant de changer d’appareil.",
  helpWeather:"Météo",helpWeatherText:"Les alertes météo proviennent d’Environnement et Changement climatique Canada. Elles servent à la planification et à la sécurité, pas à prédire les prises.",
  privacy:"Confidentialité",privacyText:"La position est demandée seulement lorsque vous utilisez une fonction géolocalisée et n’est jamais transmise. Votre position la plus récente est conservée sur cet appareil pendant deux semaines afin que les distances s’affichent à la prochaine ouverture. Les sorties et les prises restent sur cet appareil.",
  dataSources:"Sources de données gouvernementales",disclaimer:"Ceci n’est pas une application officielle du gouvernement du Manitoba.",
  yourData:"Vos données",yourDataText:"Les sorties, les prises et les lacs enregistrés restent sur cet appareil. Enregistrez une copie avant de changer ou de réinitialiser votre appareil.",
  exportData:"Enregistrer une copie",importData:"Restaurer une copie",
  textSize:"Taille du texte",textSizeNote:"Agrandit le texte dans toute l'application. Utile au soleil ou sur l'eau.",
  sizePreview:"Omble de fontaine • ensemencé 2025 • 4 200 poissons",
  location:"Position",locationNote:"Utilisée sur cet appareil pour trier les lacs par distance. Jamais transmise.",
  useLocation:"Utiliser ma position",
  appLink:"Lien de l'application",appLinkNote:"Partagez Manitoba Stocked Lakes avec quelqu'un.",
  copyLink:"Copier le lien",shareApp:"Partager",linkCopied:"Lien copié.",
  heroTitle:"Trouvez votre prochain coin de p\u00eache",searchPh:"Lac, ville ou esp\u00e8ce",search:"Rechercher",
  statLakesLbl:"Lacs ensemenc\u00e9s",statRecordsLbl:"Ensemencements",statSpeciesLbl:"Esp\u00e8ces",statLatestLbl:"Derni\u00e8re ann\u00e9e",
  recentlyStocked:"Ensemenc\u00e9s r\u00e9cemment",recentlyStockedSub:"Les plus r\u00e9cents d'abord",
  recentNear:"R\u00e9cents pr\u00e8s de moi",recentNearSub:"Lacs ensemenc\u00e9s r\u00e9cemment, pr\u00e8s de vous",
  regs2026:"R\u00e8glements de p\u00eache",regs2026Sub:"R\u00e8gles de p\u00eache officielles de l'Ontario",
  fishOnlineSub:"Renseignements gouvernementaux sur les lacs",fishOnlineSub2:"Renseignements et cartes du gouvernement",
  lakesNearYou:"Lacs pr\u00e8s de vous",sortedByDrive:"Tri\u00e9s selon la distance \u00e0 parcourir.",within:"Dans un rayon de",
  myLakesSub:"Vos lacs enregistr\u00e9s. Touchez \u2606 sur un lac pour l'ajouter ici.",filterSavedPh:"Filtrer vos lacs enregistr\u00e9s",
  tripsCatches:"Sorties et prises",logbookSub:"Votre carnet, conserv\u00e9 sur cet appareil.",
  findFishHead:"\uD83D\uDD0E Trouver du poisson",findFishSub:"Trouvez les lacs o\u00f9 vit une esp\u00e8ce, pr\u00e8s de vous.",
  modeAny:"Partout o\u00f9 vit le poisson",modeStocked:"Lacs ensemenc\u00e9s seulement",
  anySpecies:"Toutes les esp\u00e8ces",anyYear:"Toutes les ann\u00e9es",optionalLakePh:"Nom du lac (facultatif)",
  onlyAccess:"Seulement les lacs avec un acc\u00e8s de p\u00eache \u00e0 proximit\u00e9",reset:"R\u00e9initialiser",
  allSpecies:"Toutes les esp\u00e8ces",allYears:"Toutes les ann\u00e9es",anyDistance:"Toute distance",clear:"Effacer",
  includeUnstocked:"Inclure les lacs non ensemenc\u00e9s",filtersChanged:"Filtres modifi\u00e9s \u2014 touchez Rechercher pour appliquer.",
  showAccess:"Afficher les acc\u00e8s de p\u00eache",showFMZ:"Afficher les zones de gestion des p\u00eaches",
  showDepth:"Afficher les courbes de profondeur",accessStatus:"Mises \u00e0 l'eau \u2022 acc\u00e8s riverain \u2022 quais",
  depthStatus:"Bathym\u00e9trie gouvernementale \u2022 pas pour la navigation",
  lakeMap:"Carte du lac",baseMap:"Carte",baseTopo:"Topo",baseDepth:"Profondeur",
  depthZoomIn:"Zoomez sur un lac pour voir les courbes de profondeur.",
  expandMap:"Agrandir la carte",closeMap:"Quitter le plein \u00e9cran",
  tilesOffline:"Tuiles de carte indisponibles hors ligne \u2014 tout le reste fonctionne.",tapMarker:"Touchez un rep\u00e8re pour les d\u00e9tails",loading:"Chargement\u2026",
  baseHint:"Touchez Carte, Topo ou Profondeur pour changer l'affichage.",
  tilesSlow:"Topo et Profondeur chargent des images cartographiques en direct et peuvent prendre un moment, surtout la premi\u00e8re fois.",
  findMe:"Me trouver",
  goToMap:"Voir la carte",
  trailOn:"Trac\u00e9\u202f: activ\u00e9",
  trailOff:"Trac\u00e9\u202f: d\u00e9sactiv\u00e9",
  clearTrail:"Effacer",
  spotsTitle:"Lieux de p\u00eache",
  spotsBtn:"Mes lieux",
  spotsNav:"Mes lieux",
  spotsNavTitle:"Mes lieux de p\u00eache",
  spotSearchPh:"Rechercher un lieu ou un lac",
  spotOne:"lieu",
  spotMany:"lieux",
  spotUnfiled:"Non class\u00e9",
  saveChanges:"Enregistrer",
  deleteSpot:"Supprimer",
  noSpotsAnywhere:"Aucun lieu pour l\u0027instant. Ouvrez un lac, puis maintenez votre doigt sur la carte.",
  noSpotsMatch:"Aucun lieu correspondant.",
  allSpots:"Tous",
  noSpotsInCategory:"Aucun lieu de cette couleur pour l\u0027instant.",
  openLakeFirst:"Ouvrez d\u0027abord un lac \u2014 les lieux de p\u00eache sont enregistr\u00e9s par lac.",
  hide:"Masquer",
  show:"Afficher",
  newSpot:"Nouveau lieu",
  spotNamePh:"Nom du lieu",
  saveSpot:"Enregistrer le lieu",
  spotsFull:"Liste pleine (50)",
  noSpots:"Aucun lieu pour l'instant. Appuyez sur + Nouveau lieu pour marquer le centre de la carte, ou maintenez votre doigt sur la carte.",
  tapMapForSpot:"Touchez la carte pour marquer un lieu.",
  cancel:"Annuler",
  trailsTitle:"Trac\u00e9s",
  currentTrail:"Trac\u00e9 en cours",
  saveTrail:"Enregistrer le trac\u00e9",
  trailNamePh:"Nom du trac\u00e9",
  tapAgain:"Touchez de nouveau",
  showTrail:"Afficher",
  hideTrail:"Masquer",
  noTrails:"Aucun trac\u00e9 pour l'instant. Activez Suivi et Trac\u00e9, et votre chemin sera enregistr\u00e9 ici.",
  trailsFull:"La liste des trac\u00e9s est pleine (30). Supprimez-en un pour en enregistrer un autre.",
  offlineSave:"Enregistrer hors ligne",
  offlineSaved:"Enregistr\u00e9 \u2713",
  offlineWorking:"Enregistrement\u2026",
  offlineUnavailable:"L'enregistrement hors ligne n\u00e9cessite que l'application ait fini de charger. R\u00e9essayez dans un instant.",
  trackingOn:"Suivi\u202f: activ\u00e9",
  trackingOff:"Suivi\u202f: d\u00e9sactiv\u00e9",
  officialSources:"Sources officielles du Manitoba",
  regsSummaryNote:"Les r\u00e8glements pr\u00e9sent\u00e9s ici sont un r\u00e9sum\u00e9. Voici les sources officielles \u2014 consultez-les avant de p\u00eacher.",
  regsSummaryTitle:"R\u00e9sum\u00e9 des r\u00e8glements de p\u00eache",regsSummarySub:"Saisons, limites et fourchettes de taille par zone",
  licences:"Permis de p\u00eache",licencesSub:"Acheter ou renouveler une Carte Plein air et un permis",
  eatingGuide:"Guide de consommation du poisson de l'Ontario",eatingGuideSub:"Avis de consommation par plan d'eau",
  ecWeather:"M\u00e9t\u00e9o d'Environnement Canada",ecWeatherSub:"Pr\u00e9visions et avertissements maritimes",
  openData:"Donn\u00e9es ouvertes du Manitoba",openDataSub:"Les jeux de donn\u00e9es derri\u00e8re cette application",
  footerSources:"Donn\u00e9es d'ensemencement, de r\u00e9glementation et d'avis de consommation\u00a0: gouvernement de l'Ontario. Alertes m\u00e9t\u00e9o\u00a0: Environnement et Changement climatique Canada.",
  footerDisclaimer:"Application non officielle du gouvernement de l'Ontario. V\u00e9rifiez toujours les r\u00e8glements en vigueur avant de p\u00eacher.",
  noSpeciesRecorded:"Aucune esp\u00e8ce r\u00e9pertori\u00e9e",notStocked:"Non ensemenc\u00e9",latestStocking:"Dernier ensemencement",speciesUnavailable:"Esp\u00e8ce non disponible",
  exploreStocked:"Explorer les lacs du Manitoba",stockedNearMe:"Lacs ensemenc\u00e9s pr\u00e8s de moi",recentWithin100:"Ensemenc\u00e9s r\u00e9cemment dans un rayon de 100\u00a0km",
  myFishingTrips:"Mes sorties de p\u00eache",tripsCount:"sorties",
  settings:"Param\u00e8tres",helpAbout:"Aide et \u00e0 propos",withinKm:"Dans un rayon de {n}\u00a0km",
  regsEnglishNote:"L'Ontario ne publie ce jeu de donn\u00e9es \u2014 r\u00e8glements, saisons et limites \u2014 qu'en anglais. Ce texte demeure donc tel que r\u00e9dig\u00e9 par la province.",
  stockingData:"Donn\u00e9es d'ensemencement",
  stockingDataNote:"Incluses dans l'application, qui s'ouvre donc sans réseau. Vérifiez auprès du Manitoba s'il y a de nouvelles données lorsque vous avez du signal.",
  checkStockings:"Vérifier les nouveaux ensemencements",checkingStockings:"Vérification…",
  asOf:"Données d'ensemencement du Manitoba au",liveData:"Données d'ensemencement du Manitoba, chargées en direct."
 }
};
let appLang=localStorage.getItem("osl-language")||"en";
function t(k){return (I18N[appLang]&&I18N[appLang][k])||I18N.en[k]||k}
function setLanguage(lang){
 appLang=lang==="fr"?"fr":"en";localStorage.setItem("osl-language",appLang);
 document.documentElement.lang=appLang;
 const en=$("langEN"),fr=$("langFR");if(en)en.classList.toggle("active",appLang==="en");if(fr)fr.classList.toggle("active",appLang==="fr");
 translateStaticUI();apply();
}
function translateStaticUI(){
 // Everything carrying a data-i18n key. Before this the switch reached eight
 // elements and roughly a hundred hardcoded English strings sat untouched, so
 // FR gave you French tabs on an English app.
 document.querySelectorAll("[data-i18n]").forEach(el=>{el.textContent=t(el.dataset.i18n)});
 document.querySelectorAll("[data-i18n-ph]").forEach(el=>{el.placeholder=t(el.dataset.i18nPh)});
 document.querySelectorAll("[data-i18n-aria]").forEach(el=>{el.setAttribute("aria-label",t(el.dataset.i18nAria))});
 // The splash image now carries an instruction, not just branding, so a
 // screen reader has to hear it — alt="" would make it invisible.
 document.querySelectorAll("[data-i18n-alt]").forEach(el=>{el.setAttribute("alt",t(el.dataset.i18nAlt))});
 // The Regulations tab is static markup, so its banner is filled in here —
 // this runs on load and on every language switch.
 const rb=document.getElementById("regsStaleBanner");
 if(rb)rb.innerHTML=regsStaleNote();
 document.querySelectorAll("[data-i18n-within]").forEach(el=>{
  el.textContent=t("withinKm").replace("{n}",el.dataset.i18nWithin);
 });
 document.documentElement.lang=appLang;
 // Species wheels are rebuilt because their labels are translated while their
 // values stay English — the filters match on the value, so nothing shifts.
 if(typeof lakes!=="undefined"&&lakes.length)buildFilters(true);
 // The tab strip, the sort wheel, the run button and onboarding all carry
 // data-i18n keys now, so the walk above has already done them. v1x set each
 // of these by hand here, and the sort wheel was assigned by option index —
 // which did not match the markup order, so French swapped "Closest" and
 // "Best Match" on every switch.
 const tag=$("brandTagline");if(tag)tag.textContent=t("tagline");
 // The snapshot line is written when data loads, which is usually before the
 // user ever touches the language toggle. Re-render it here or FR leaves an
 // English sentence sitting under the dashboard.
 const age=$("dataAge");
 if(age&&age.textContent.trim())age.textContent=stockingBuilt?`${t("asOf")} ${stockingBuilt}.`:t("liveData");
 const hb=$("helpBtn");if(hb)hb.setAttribute("aria-label",t("help"));
 const ox=$("onboardText");if(ox)ox.textContent=t("onboardText");
}

const APP_VERSION="mb1c";
const API="https://services1.arcgis.com/TJH5KDher0W13Kgo/ArcGIS/rest/services/FishStockingDataForRecreationalPurposes/FeatureServer/0/query";
const FMZ_API="https://ws.lioservices.lrc.gov.on.ca/arcgis2/rest/services/LIO_OPEN_DATA/LIO_Open07/MapServer/14/query";
const REGS_BASE="https://www.ontario.ca/document/ontario-fishing-regulations-summary/fisheries-management-zone-";
const SURVEY_API="https://ws.lioservices.lrc.gov.on.ca/arcgis2/rest/services/LIO_OPEN_DATA/LIO_Open10/MapServer/18/query";
const CAUGHT_API="https://ws.lioservices.lrc.gov.on.ca/arcgis2/rest/services/LIO_OPEN_DATA/LIO_Open10/MapServer/16/query";
const BATHY_URL="https://ws.lioservices.lrc.gov.on.ca/arcgis2/rest/services/LIO_OPEN_DATA/LIO_Open01/MapServer";
const BATHY_LAYER=30;
let rows=[],lakes=[],shown=[],fmzFeatures=[],fmzLoaded=false,speciesLoaded=false,userLoc=null,currentView="explore";
let trips=JSON.parse(localStorage.getItem("osl-trips")||"[]"),recentLakes=JSON.parse(localStorage.getItem("osl-recent")||"[]");
let advisoryLocations=[],advisoriesLoaded=false,favoriteKeys=new Set(JSON.parse(localStorage.getItem("osl-favorites")||"[]"));
const $=id=>document.getElementById(id);

/* ---------------------------------------------------------------------------
   Leaflet guard.

   Everything below this point assumes Leaflet loaded. If it didn't, the very
   next line used to throw a ReferenceError, which killed the whole script -
   no search, no stats, no buttons, no data. Nothing on the page worked.

   Now: if L is missing we install an inert stand-in so the rest of the app
   (search, filters, lists, regulations, trips) keeps working, and we say so
   in the map card instead of failing silently.
--------------------------------------------------------------------------- */
let mapAvailable = typeof L !== "undefined";
if (!mapAvailable) {
  const inert = new Proxy(function () {}, {
    get: (_t, prop) => (prop === "then" ? undefined : () => inert),
    apply: () => inert
  });
  window.L = inert;
  document.addEventListener("DOMContentLoaded", () => {
    const n = document.getElementById("mapNotice");
    if (n) {
      n.textContent = "The map didn't load. Everything else still works - search for a lake by name below.";
      n.classList.remove("hidden");
    }
    const m = document.getElementById("map");
    if (m) m.style.display = "none";
  });
}

const map=L.map("map").setView([46.2,-81.0],5);

const markerLayer=L.layerGroup().addTo(map);

/* Location tracking: continuous positioning with a blue dot that follows the
   user and auto-pans the map to keep them centered. Toggle on/off by tapping.
   Uses watchPosition for continuous updates; stops watching when tracking is
   off or when the user leaves the app. */
/* Live location, shared by both maps. One GPS watch feeds a dot on the main
   map and a dot on the lake sheet's map; the button appears on both and the
   two stay in step, because "am I over that 40-foot hole yet" is a lake-sheet
   question and the sheet is where the contours are. */
let locationWatchId=null,userTracking=false,lastFix=null;
const userDots={main:null,detail:null};
const trackButtons=[];
/* ---- Breadcrumb trail ---------------------------------------------------
   The path travelled while tracking is on, drawn on both maps. Recorded off
   the same GPS watch as the dot -- no second watch, no extra battery -- and
   kept on the device like everything else here. Useful for a trolling pass:
   where exactly did that drift go, and can I run it again.
   Points are thinned by distance rather than by time, so sitting still on
   anchor doesn't pile up thousands of identical fixes, and capped so a long
   season cannot grow the store without bound. */
const TRAIL_MIN_M=12,TRAIL_MAX_POINTS=3000;
/* Whether tracking lays crumbs at all. Separate from tracking itself --
   "follow me" and "record where I went" are different wants, and the person
   asked for exactly this split. Remembered across launches; default on. */
let trailRecording=false;
let trail=[];
try{trail=JSON.parse(localStorage.getItem("osl-trail")||"[]")||[]}catch(e){trail=[]}
const trailLines={main:null,detail:null};
let trailSaveTimer=null;
function saveTrailSoon(){
 /* Batched: writing localStorage on every GPS fix is a needless stall on the
    main thread while someone is driving. */
 if(trailSaveTimer)return;
 trailSaveTimer=setTimeout(()=>{
  trailSaveTimer=null;
  try{localStorage.setItem("osl-trail",JSON.stringify(trail))}catch(e){}
 },4000);
}
function metresBetween(a,b){
 const R=6371000,dLat=(b[0]-a[0])*Math.PI/180,dLon=(b[1]-a[1])*Math.PI/180,
       la=a[0]*Math.PI/180,lb=b[0]*Math.PI/180;
 const h=Math.sin(dLat/2)**2+Math.cos(la)*Math.cos(lb)*Math.sin(dLon/2)**2;
 return 2*R*Math.asin(Math.sqrt(h));
}
function trailLengthM(){
 let m=0;for(let i=1;i<trail.length;i++)m+=metresBetween(trail[i-1],trail[i]);
 return m;
}
function drawTrail(which,mapObj){
 if(!mapObj)return;
 if(trailLines[which]){try{mapObj.removeLayer(trailLines[which])}catch(e){}trailLines[which]=null}
 if(trail.length<2)return;
 trailLines[which]=L.polyline(trail,{color:"#D5007F",weight:4,opacity:.9,
  lineJoin:"round",lineCap:"round",interactive:false}).addTo(mapObj);
 trailLines[which].bringToFront&&trailLines[which].bringToFront();
}
function redrawTrails(){drawTrail("main",map);drawTrail("detail",detailMap);paintTrailButtons()}
function addTrailPoint(lat,lon){
 if(!trailRecording)return;
 const p=[Number(lat.toFixed(6)),Number(lon.toFixed(6))];
 const last=trail[trail.length-1];
 if(last&&metresBetween(last,p)<TRAIL_MIN_M)return;
 trail.push(p);
 if(trail.length>TRAIL_MAX_POINTS)trail=trail.slice(-TRAIL_MAX_POINTS);
 saveTrailSoon();redrawTrails();
}
function clearTrail(){
 trail=[];
 try{localStorage.removeItem("osl-trail")}catch(e){}
 redrawTrails();
}
const trailButtons=[];
function paintTrailButtons(){
 const has=trail.length>1;
 trailButtons.forEach(b=>{
  const lb=b.querySelector(".locLabel");
  if(lb)lb.textContent=t("trailsBtn");
 });
}
const trailToggleButtons=[];
function paintTrailToggles(){
 trailToggleButtons.forEach(b=>{
  b.classList.toggle("recording",trailRecording);
  b.setAttribute("aria-label",trailRecording?t("trailOn"):t("trailOff"));
  const lb=b.querySelector(".locLabel");
  if(lb)lb.textContent=t("recordBtn");
 });
}
function setTrailRecording(on){
 trailRecording=on;
 paintTrailToggles();
}
const TrailToggleControl=L.Control.extend({
 options:{position:"bottomleft"},
 onAdd:function(m){
  const cn=L.DomUtil.create("div","leaflet-bar leaflet-control mapBarBtn");
  const btn=L.DomUtil.create("a","",cn);
  btn.href="#";
  btn.innerHTML='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 19c3-1 4-4 2-6S3 9 5 7s6-1 8 1 2 5 4 6 4 0 4 0" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-dasharray="1 4"/></svg><span class="locLabel"></span>';
  trailToggleButtons.push(btn);
  L.DomEvent.on(btn,"click",L.DomEvent.preventDefault);
  L.DomEvent.on(btn,"click",()=>setTrailRecording(!trailRecording));
  paintTrailToggles();
  return cn;
 }
});
/* ---- Saved trails -------------------------------------------------------
   The workflow the chartplotters taught boaters: record a track, save it
   with a name, and show it again another day so the live dot can ride
   yesterday's safe line back through the fog. All on-device.
   No native browser dialog boxes anywhere in this panel: the WKWebView
   wrapper does not implement the JS panel delegates, so those calls fail
   silently in the App Store build -- the old Clear dialog was in fact
   broken there. Destructive taps use tap-again-to-confirm instead. */
const SAVED_TRAILS_MAX=30;
let savedTrails=[];
try{savedTrails=JSON.parse(localStorage.getItem("osl-saved-trails")||"[]")||[]}catch(e){savedTrails=[]}
let shownTrailIds=[];
try{shownTrailIds=JSON.parse(localStorage.getItem("osl-trails-shown")||"[]")||[]}catch(e){shownTrailIds=[]}
const savedTrailLines={main:{},detail:{}};
function persistSavedTrails(){try{localStorage.setItem("osl-saved-trails",JSON.stringify(savedTrails))}catch(e){}}
function persistShown(){try{localStorage.setItem("osl-trails-shown",JSON.stringify(shownTrailIds))}catch(e){}}
function drawSavedTrails(which,mapObj){
 if(!mapObj)return;
 Object.keys(savedTrailLines[which]).forEach(id=>{
  try{mapObj.removeLayer(savedTrailLines[which][id])}catch(e){}
 });
 savedTrailLines[which]={};
 savedTrails.forEach(tr=>{
  if(shownTrailIds.indexOf(tr.id)===-1||!tr.pts||tr.pts.length<2)return;
  savedTrailLines[which][tr.id]=L.polyline(tr.pts,{color:"#7B3FA0",weight:4,opacity:.85,
   lineJoin:"round",lineCap:"round",interactive:false}).addTo(mapObj);
 });
}
function redrawSavedTrails(){drawSavedTrails("main",map);drawSavedTrails("detail",detailMap)}
function defaultTrailName(){
 const d=new Date();
 return d.toLocaleDateString(appLang==="fr"?"fr-CA":"en-CA",{month:"short",day:"numeric"})+" \u00b7 "+
        d.toLocaleTimeString(appLang==="fr"?"fr-CA":"en-CA",{hour:"numeric",minute:"2-digit"});
}
function saveCurrentTrail(name){
 if(trail.length<2)return false;
 if(savedTrails.length>=SAVED_TRAILS_MAX)return false;
 const tr={id:"t"+Date.now(),name:(name||defaultTrailName()).slice(0,60),
           pts:trail.slice(),km:trailLengthM()/1000,ts:Date.now()};
 savedTrails.unshift(tr);persistSavedTrails();
 /* A trail saved is a trail you meant to see: shown immediately, and the
    live recording is archived into it rather than left duplicated in gold. */
 shownTrailIds.push(tr.id);persistShown();
 clearTrail();redrawSavedTrails();renderTrailPanel();
 return true;
}
function toggleTrailShown(id){
 const i=shownTrailIds.indexOf(id);
 if(i===-1)shownTrailIds.push(id);else shownTrailIds.splice(i,1);
 persistShown();redrawSavedTrails();renderTrailPanel();
}
function deleteSavedTrail(id){
 savedTrails=savedTrails.filter(x=>x.id!==id);persistSavedTrails();
 shownTrailIds=shownTrailIds.filter(x=>x!==id);persistShown();
 redrawSavedTrails();renderTrailPanel();
}
let trailPanelEl=null;
function trailPanel(){
 if(trailPanelEl)return trailPanelEl;
 trailPanelEl=document.createElement("div");
 trailPanelEl.id="trailPanel";
 trailPanelEl.className="trailPanel hidden";
 document.body.appendChild(trailPanelEl);
 trailPanelEl.addEventListener("click",e=>{
  const b=e.target.closest("button");if(!b)return;
  const act=b.dataset.act,id=b.dataset.id;
  if(act==="close")toggleTrailPanel(false);
  else if(act==="save"){
   const inp=trailPanelEl.querySelector("#trailNameInput");
   saveCurrentTrail(inp&&inp.value.trim());
  }else if(act==="clear"||act==="del"){
   /* Two taps for anything destructive: the first arms the button. */
   if(b.dataset.armed){
    if(act==="clear"){clearTrail();renderTrailPanel()}
    else deleteSavedTrail(id);
   }else{b.dataset.armed="1";b.classList.add("armed");b.textContent=t("tapAgain")}
  }else if(act==="toggle")toggleTrailShown(id);
 });
 return trailPanelEl;
}
function escHtml(x){return String(x).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]))}
function renderTrailPanel(){
 const p=trailPanel();
 let h='<div class="tpHead"><b>'+t("trailsTitle")+'</b><button type="button" data-act="close" aria-label="Close">\u00d7</button></div>';
 if(trail.length>1){
  h+='<div class="tpCurrent"><div class="tpRowTop">'+t("currentTrail")+' \u2014 '+(trailLengthM()/1000).toFixed(1)+' km</div>'+
     '<div class="tpReady">'+t("trailReadyToSave")+'</div>'+
     '<input id="trailNameInput" maxlength="60" placeholder="'+t("trailNamePh")+'" value="'+escHtml(defaultTrailName())+'">'+
     '<div class="tpBtns"><button type="button" class="tpSave" data-act="save">'+t("saveTrail")+'</button>'+
     '<button type="button" class="tpDanger" data-act="clear">'+t("clearTrail")+'</button></div>'+
     (savedTrails.length>=SAVED_TRAILS_MAX?'<div class="tpNote">'+t("trailsFull")+'</div>':'')+
     '</div>';
 }
 if(savedTrails.length){
  h+='<div class="tpList">'+savedTrails.map(tr=>{
   const on=shownTrailIds.indexOf(tr.id)!==-1;
   return '<div class="tpRow"><div class="tpMeta"><span class="tpName">'+escHtml(tr.name)+'</span>'+
    '<span class="tpSub">'+tr.km.toFixed(1)+' km</span></div>'+
    '<button type="button" data-act="toggle" data-id="'+tr.id+'" class="'+(on?"on":"")+'">'+(on?t("hideTrail"):t("showTrail"))+'</button>'+
    '<button type="button" class="tpDanger" data-act="del" data-id="'+tr.id+'" aria-label="Delete"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M4 7h16M10 4h4M7 7l1 13h8l1-13M10 11v6M14 11v6"/></svg></button></div>';
  }).join("")+'</div>';
 }
 if(trail.length<2){
  h+='<div class="tpHint">'+(trailRecording?t("trailRecordingHint"):t("trailStartHint"))+'</div>';
 }
 if(trail.length<2&&!savedTrails.length)h+='<div class="tpNote">'+t("noTrails")+'</div>';
 p.innerHTML=h;
}
function toggleTrailPanel(on){
 const p=trailPanel();
 const show=on===undefined?p.classList.contains("hidden"):on;
 if(show)renderTrailPanel();
 p.classList.toggle("hidden",!show);
}
const TrailControl=L.Control.extend({
 options:{position:"bottomleft"},
 onAdd:function(m){
  const cn=L.DomUtil.create("div","leaflet-bar leaflet-control mapBarBtn");
  const btn=L.DomUtil.create("a","",cn);
  btn.href="#";btn.setAttribute("aria-label",t("trailsTitle"));
  btn.innerHTML='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 6h16M4 12h16M4 18h10" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg><span class="locLabel"></span>';
  trailButtons.push(btn);
  L.DomEvent.on(btn,"click",L.DomEvent.preventDefault);
  L.DomEvent.on(btn,"click",()=>toggleTrailPanel());
  paintTrailButtons();
  return cn;
 }
});
// Waypoint system: fishing spots, marked and named
const SPOT_COLORS=[{key:"gold",hex:"#D4A017",label:"Gold"},{key:"blue",hex:"#4A90E2",label:"Blue"},{key:"purple",hex:"#9B59B6",label:"Purple"},{key:"red",hex:"#E74C3C",label:"Red"},{key:"green",hex:"#27AE60",label:"Green"},{key:"orange",hex:"#E67E22",label:"Orange"}];
let savedSpots={},shownSpotIds={},spotCreationMode=false,currentLakeForSpots=null;
const spotLines={main:{},detail:{}};
try{savedSpots=JSON.parse(localStorage.getItem("osl-spots")||"{}")}catch(e){}
try{shownSpotIds=JSON.parse(localStorage.getItem("osl-spots-shown")||"{}")}catch(e){}
function lakeKeyForSpots(l){
 if(!l)return "";
 /* `key` is the grouping id every lake object is built with and is always
    present; waterbodyId is blank for many lakes and `id` does not exist at
    all, so the old fallback put every keyless lake in one shared bucket --
    which is how a spot saved on one lake appeared on another. */
 return String(l.key||l.waterbodyId||`${l.lat},${l.lon}`);
}
/* One-time move of spots saved under the old shared bucket. They cannot be
   attributed to a lake after the fact, so they are parked under a key no
   lake resolves to rather than deleted: nothing of the person's is thrown
   away, and no lake shows someone else's marks. */
(function migrateStrandedSpots(){
 try{
  if(savedSpots&&savedSpots.unnamed&&!savedSpots["__unfiled"]){
   savedSpots["__unfiled"]=savedSpots.unnamed;delete savedSpots.unnamed;
   if(shownSpotIds&&shownSpotIds.unnamed){shownSpotIds["__unfiled"]=shownSpotIds.unnamed;delete shownSpotIds.unnamed}
   localStorage.setItem("osl-spots",JSON.stringify(savedSpots));
   localStorage.setItem("osl-spots-shown",JSON.stringify(shownSpotIds));
  }
 }catch(e){}
})();
function getSpots(lk){return savedSpots[lk]||[]}
function setSpots(lk,spots){savedSpots[lk]=spots;try{localStorage.setItem("osl-spots",JSON.stringify(savedSpots))}catch(e){}}
function getShownSpots(lk){return shownSpotIds[lk]||[]}
function setShownSpots(lk,ids){shownSpotIds[lk]=ids;try{localStorage.setItem("osl-spots-shown",JSON.stringify(shownSpotIds))}catch(e){}}
/* Icon library for spots: what Navionics calls symbols. Each is a compact
   SVG path drawn in the chosen colour, so a "blue fish" and a "red fish"
   are the same shape in different category colours. */
const SPOT_ICONS=[
 /* Solid silhouettes with a dark outline on purpose: these render at 26px
    over busy basemaps, where thin line-art vanishes. Chart-style symbols. */
 {key:"pin",label:"Pin",svg:'<path d="M12 2a7 7 0 0 1 7 7c0 4.8-5.3 10.6-6.6 12a.55.55 0 0 1-.8 0C10.3 19.6 5 13.8 5 9a7 7 0 0 1 7-7z"/><circle cx="12" cy="9" r="2.5" fill="#13263C" stroke="none"/>'},
 {key:"fish",label:"Fish",svg:'<path d="M2.5 12c2.6-3.6 6.1-5.4 9.3-5.4 2.9 0 5.4 1.7 7.2 5.4-1.8 3.7-4.3 5.4-7.2 5.4-3.2 0-6.7-1.8-9.3-5.4z"/><path d="M16.8 12l5.2-4.2-1.7 4.2 1.7 4.2z"/><circle cx="7.6" cy="10.9" r="1.1" fill="#13263C" stroke="none"/>'},
 {key:"boat",label:"Boat",svg:'<path d="M2.5 13.5c1.8-.7 3-2.6 3.6-5.2l.6.1c.3 1.9.2 3.5-.3 4.9h11.8V9.6h1.9v3.7h1.4l-1.6 3.4H4.2z"/><path d="M18.2 7.4h1.9v2.2h-1.9z"/><path d="M3.5 19h17" fill="none" stroke-width="2"/>'},
 {key:"anchor",label:"Anchor",svg:'<circle cx="12" cy="5" r="2.1"/><path d="M11 7.6h2V18.2a6.4 6.4 0 0 0 5.2-3.6l1.9 1a9 9 0 0 1-16.2 0l1.9-1A6.4 6.4 0 0 0 11 18.2z"/><path d="M8.6 9.4h6.8" fill="none" stroke-width="2"/>'},
 {key:"star",label:"Star",svg:'<path d="M12 2.5l2.8 6 6.5.8-4.8 4.4 1.3 6.4L12 16.9l-5.8 3.2 1.3-6.4L2.7 9.3l6.5-.8z"/>'},
 {key:"hazard",label:"Hazard",svg:'<path d="M12 3.2 22 20.2H2z"/><rect x="11" y="9.2" width="2" height="5.6" rx="1" fill="#13263C" stroke="none"/><circle cx="12" cy="17.4" r="1.15" fill="#13263C" stroke="none"/>'},
 {key:"weeds",label:"Weeds",svg:'<path d="M6.2 20c-.6-4.6.3-7.8 2-10.6 1 2.8 1.3 6 .3 10.6z"/><path d="M11.2 20c-.6-5.6.3-9.6 1.1-12.6 1 3 1.5 7 .6 12.6z"/><path d="M16.4 20c-.5-3.8.5-6.6 2.1-8.6.7 2.4.6 4.9-.6 8.6z"/><path d="M3.5 20.4h17" fill="none" stroke-width="2"/>'},
 {key:"dock",label:"Dock",svg:'<rect x="3" y="8.5" width="18" height="3.4" rx="1"/><rect x="4.6" y="11.9" width="2.1" height="8"/><rect x="10.95" y="11.9" width="2.1" height="8"/><rect x="17.3" y="11.9" width="2.1" height="8"/>'},
 /* One buoy, two jobs: the colour picker makes it port (red) or starboard
    (green), same as the water. Body, top light, waterline. */
 {key:"buoy",label:"Buoy",svg:'<circle cx="12" cy="3.6" r="1.4"/><path d="M9.6 5.6h4.8l-.9 8.8h-3z"/><path d="M4 17h16" fill="none" stroke-width="2"/><path d="M6.5 20h11" fill="none" stroke-width="2"/>'},
 {key:"tent",label:"Camp",svg:'<path d="M8.6 1.8L12 5.6l3.4-3.8 1.2 1L13 7 22 19H2L11 7 7.4 2.8z"/><path d="M12 11l3.2 8H8.8z" fill="#13263C" stroke="none"/><path d="M1.5 19h21" fill="none" stroke-width="1.6"/>'},
 {key:"ramp",label:"Ramp",svg:'<path d="M3 19.5 21 9.8v9.7z"/><path d="M11.6 8.9l6.4-3.6 1.1 1.9-6.4 3.7z"/>'},
 {key:"park",label:"Park",svg:'<rect x="4" y="7.6" width="16" height="2.6" rx="1"/><path d="M8.2 10.2 5.4 19M15.8 10.2 18.6 19" fill="none" stroke-width="2"/><rect x="2.2" y="13.4" width="6.2" height="2.2" rx="1"/><rect x="15.6" y="13.4" width="6.2" height="2.2" rx="1"/>'}
];
function spotIconSvg(iconKey,hex,size){
 const ic=SPOT_ICONS.find(x=>x.key===iconKey)||SPOT_ICONS[0];
 return '<svg width="'+size+'" height="'+size+'" viewBox="0 0 24 24" style="display:block"><g fill="'+hex+'" stroke="#13263C" stroke-width="1.2" stroke-linejoin="round">'+ic.svg+'</g></svg>';
}
function spotMarker(lat,lon,colorKey,iconKey,name){
 const c=SPOT_COLORS.find(x=>x.key===colorKey);const hex=c?c.hex:"#D4A017";
 const icon=L.divIcon({className:"spotDiv",html:spotIconSvg(iconKey||"pin",hex,26),iconSize:[26,26],iconAnchor:[13,13]});
 /* Tappable: a tap opens the spot's name in a bubble, same as the lake
    marker's -- "which fish was that one again" answered on the map itself. */
 const m=L.marker([lat,lon],{icon,keyboard:false});
 if(name)m.bindPopup(escHtml(name),{closeButton:true,offset:[0,-6]});
 return m;
}
function drawSpots(which,mapObj){if(!mapObj||!currentLakeForSpots)return;Object.keys(spotLines[which]||{}).forEach(id=>{try{mapObj.removeLayer(spotLines[which][id])}catch(e){}});spotLines[which]={};const lk=lakeKeyForSpots(currentLakeForSpots);const shown=getShownSpots(lk);getSpots(lk).forEach(sp=>{if(shown.indexOf(sp.id)!==-1)spotLines[which][sp.id]=spotMarker(sp.lat,sp.lon,sp.color,sp.icon,sp.name).addTo(mapObj)})}
function redrawSpots(){drawSpots("main",map);drawSpots("detail",detailMap)}
function setSpotCreation(on){spotCreationMode=on;document.body.classList.toggle("spotCreating",on)}
function spotLongPress(e){
 /* Press and hold anywhere on the map to drop a pin there -- tomorrow's
    spots, an access point across the bay. Leaflet turns an iOS long-press
    into its contextmenu event, so no hand-rolled touch timers. */
 if(!currentLakeForSpots)return;
 if(e.originalEvent&&e.originalEvent.preventDefault)try{e.originalEvent.preventDefault()}catch(_){}
 showSpotCreate(e.latlng.lat,e.latlng.lng);
}
function mapClickForSpot(e){if(!spotCreationMode||!currentLakeForSpots)return;setSpotCreation(false);showSpotCreate(e.latlng.lat,e.latlng.lng)}
function escHtml(x){return String(x).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]))}
let spotPanelEl=null,tempSpotMarker=null,tempSpotMap=null;
function defaultSpotName(){const d=new Date();return d.toLocaleDateString(appLang==="fr"?"fr-CA":"en-CA",{month:"short",day:"numeric"})+" \u00b7 "+d.toLocaleTimeString(appLang==="fr"?"fr-CA":"en-CA",{hour:"numeric",minute:"2-digit"})}
function clearTempSpot(){if(tempSpotMarker&&tempSpotMap){try{tempSpotMap.removeLayer(tempSpotMarker)}catch(e){}}tempSpotMarker=null;tempSpotMap=null}
function spotPanel(){if(spotPanelEl)return spotPanelEl;spotPanelEl=document.createElement("div");spotPanelEl.id="spotPanel";spotPanelEl.className="spotPanel hidden";document.body.appendChild(spotPanelEl);document.addEventListener("click",e=>{try{if(!spotPanelEl||spotPanelEl.classList.contains("hidden"))return;if(!spotPanelEl.contains(e.target))return;const b=e.target.closest("button");if(!b)return;const act=b.dataset.act,id=b.dataset.id,lk=b.dataset.lk;if(act==="color"){spotPanelEl.querySelectorAll(".spSwatch").forEach(x=>x.classList.remove("sel"));b.classList.add("sel");}
  else if(act==="icon"){spotPanelEl.querySelectorAll(".spIcon").forEach(x=>x.classList.remove("sel"));b.classList.add("sel");}
  else if(act==="filter"){spotFilter=b.dataset.color||null;renderSpotList(lakeKeyForSpots(currentLakeForSpots));}
  else if(act==="close"){clearTempSpot();toggleSpotPanel(false);}else if(act==="new"){
   /* The pin lands at the centre of whichever map is in front. With Track On
      the map is centred on the boat, so this marks where you are right now --
      the catch-a-fish-mark-the-spot flow, one tap, no modes. Pan the map
      first to mark somewhere else. */
   const m=(document.body.classList.contains("sheetOpen")&&detailMap)?detailMap:map;
   const c=m.getCenter();
   showSpotCreate(c.lat,c.lng);
  }else if(act==="save"){
   const inp=spotPanelEl.querySelector("#spotNameInput");
   const sel=spotPanelEl.querySelector(".spSwatch.sel");
   const ico=spotPanelEl.querySelector(".spIcon.sel");
   const nm=(inp&&inp.value.trim())||defaultSpotName();
   const c=(sel&&sel.dataset.color)||"gold";
   clearTempSpot();
   saveSpot(lk,Number(b.dataset.lat),Number(b.dataset.lon),nm,c,(ico&&ico.dataset.icon)||"pin");
  }else if(act==="toggle"){const shown=getShownSpots(lk),i=shown.indexOf(id);if(i===-1)shown.push(id);else shown.splice(i,1);setShownSpots(lk,shown);redrawSpots();renderSpotList(lk)}else if(act==="del"){if(b.dataset.armed){let spots=getSpots(lk);spots=spots.filter(x=>x.id!==id);setSpots(lk,spots);redrawSpots();renderSpotList(lk)}else{b.dataset.armed="1";b.classList.add("armed");b.textContent=t("tapAgain")}}}catch(err){try{spotPanelEl.innerHTML='<div class="spNote">Spots error: '+String(err.message)+"</div>";spotPanelEl.classList.remove("hidden")}catch(_){}}},true);return spotPanelEl}
function saveSpot(lk,lat,lon,nm,col,ic){let spots=getSpots(lk);if(spots.length>=50)return;const sp={id:"s"+Date.now(),lat:Number(lat.toFixed(6)),lon:Number(lon.toFixed(6)),name:nm.slice(0,50),color:col,icon:ic||"pin",ts:Date.now()};spots.unshift(sp);setSpots(lk,spots);const shown=getShownSpots(lk);if(shown.indexOf(sp.id)===-1)shown.push(sp.id);setShownSpots(lk,shown);redrawSpots();renderSpotList(lk)}
function showSpotCreate(lat,lon){const p=spotPanel();if(!p)return;
 clearTempSpot();
 tempSpotMap=(document.body.classList.contains("sheetOpen")&&detailMap)?detailMap:map;
 try{tempSpotMarker=L.circleMarker([lat,lon],{radius:10,color:"#13263C",weight:3,fillColor:"#fff",fillOpacity:.6,interactive:false}).addTo(tempSpotMap)}catch(e){}
 const lk=lakeKeyForSpots(currentLakeForSpots);
 let h='<div class="spHead"><b>'+t("newSpot")+'</b><button type="button" data-act="close" aria-label="Close">\u00d7</button></div>'+
   '<div class="spCreate"><input id="spotNameInput" maxlength="50" placeholder="'+t("spotNamePh")+'">'+
   '<div class="spIconRow">';
 SPOT_ICONS.forEach(ic=>{h+='<button type="button" class="spIcon'+(ic.key==="pin"?" sel":"")+'" data-act="icon" data-icon="'+ic.key+'" aria-label="'+ic.label+'">'+spotIconSvg(ic.key,"#5B6B7C",22)+'</button>'});
 h+='</div><div class="spColorRow">';
 SPOT_COLORS.forEach(c=>{h+='<button type="button" class="spSwatch'+(c.key==="gold"?" sel":"")+'" data-act="color" data-color="'+c.key+'" style="background:'+c.hex+'" aria-label="'+c.label+'"></button>'});
 h+='</div><div class="spBtns"><button type="button" class="spSave" data-act="save" data-lk="'+lk+'" data-lat="'+lat+'" data-lon="'+lon+'">'+t("saveSpot")+'</button><button type="button" data-act="close">'+t("cancel")+'</button></div></div>';
 if(savedSpots[lk]&&savedSpots[lk].length>=50)h+='<div class="spNote">'+t("spotsFull")+'</div>';
 p.innerHTML=h;p.classList.remove("hidden")}
let spotFilter=null;
function renderSpotList(lk){const p=spotPanel();if(!p)return;
 const all=getSpots(lk),shown=getShownSpots(lk);
 const spots=spotFilter?all.filter(x=>x.color===spotFilter):all;
 let h='<div class="spHead"><b>'+t("spotsTitle")+'</b><span class="spHeadBtns"><button type="button" class="spNew" data-act="new">+ '+t("newSpot")+'</button><button type="button" data-act="close" aria-label="Close">\u00d7</button></span></div>';
 /* Category chips, Avenza-style: All plus one per colour. Tap a colour to
    see only that category -- red for caught fish, blue for structure,
    whatever system the angler has settled on. */
 h+='<div class="spFilters"><button type="button" data-act="filter" data-color="" class="'+(spotFilter?"":"on")+'">'+t("allSpots")+'</button>';
 SPOT_COLORS.forEach(c=>{h+='<button type="button" data-act="filter" data-color="'+c.key+'" class="spFilterDot'+(spotFilter===c.key?" on":"")+'" style="background:'+c.hex+'" aria-label="'+c.label+'"></button>'});
 h+='</div>';
 if(spots.length){
  h+='<div class="spList">'+spots.map(sp=>{
   const on=shown.indexOf(sp.id)!==-1;
   const hex=(SPOT_COLORS.find(x=>x.key===sp.color)||{}).hex||"#D4A017";
   return '<div class="spRow"><span class="spRowIcon">'+spotIconSvg(sp.icon||"pin",hex,22)+'</span><div class="spMeta"><span class="spName">'+escHtml(sp.name)+'</span></div><button type="button" data-act="toggle" data-id="'+sp.id+'" data-lk="'+lk+'" class="'+(on?"on":"")+'">'+(on?t("hide"):t("show"))+'</button><button type="button" class="spDanger" data-act="del" data-id="'+sp.id+'" data-lk="'+lk+'" aria-label="Delete"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M4 7h16M10 4h4M7 7l1 13h8l1-13M10 11v6M14 11v6"/></svg></button></div>';
  }).join("")+'</div>';
 }else if(all.length){
  h+='<div class="spNote">'+t("noSpotsInCategory")+'</div>';
 }else{
  h+='<div class="spNote">'+t("noSpots")+'</div>';
 }
 p.innerHTML=h}
function toggleSpotPanel(on){
 try{
  const p=spotPanel();if(!p)return;
  const show=on===undefined?p.classList.contains("hidden"):on;
  if(show){
   if(!currentLakeForSpots){
    /* Spots belong to a lake; on the main map before any lake has been
       opened there is nothing to list. Say so instead of throwing. */
    p.innerHTML='<div class="spHead"><b>'+t("spotsTitle")+'</b><button type="button" data-act="close" aria-label="Close">\u00d7</button></div><div class="spNote">'+t("openLakeFirst")+'</div>';
   }else{
    renderSpotList(lakeKeyForSpots(currentLakeForSpots));
   }
  }
  p.classList.toggle("hidden",!show);
 }catch(err){
  /* Surface it where a phone user can actually see it -- in the panel,
     which outranks even the fullscreen sheet. */
  try{
   const p=spotPanelEl;
   if(p){p.innerHTML='<div class="spNote">Spots error: '+String(err.message)+'</div>';p.classList.remove("hidden")}
  }catch(_){}
 }
}
const SpotsControl=L.Control.extend({options:{position:"bottomleft"},onAdd:function(m){const cn=L.DomUtil.create("div","leaflet-bar leaflet-control mapBarBtn");const btn=L.DomUtil.create("a","",cn);btn.href="#";btn.setAttribute("aria-label",t("newSpot"));btn.innerHTML='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9h-7v2h7v-2z" fill="currentColor"/></svg><span class="locLabel">'+t("spotsBtn")+'</span>';L.DomEvent.on(btn,"click",L.DomEvent.preventDefault);L.DomEvent.on(btn,"click",()=>{setSpotCreation(false);toggleSpotPanel()});return cn}});

function dotIcon(){
 /* A divIcon rather than a circleMarker so CSS can animate it: solid blue
    centre, plus a ring that swells and fades on a loop. */
 return L.divIcon({className:"userDotWrap",html:'<div class="userDotPulse"></div><div class="userDot"></div>',iconSize:[18,18],iconAnchor:[9,9]});
}
function paintTrackButtons(){
 trackButtons.forEach(b=>{
  b.classList.toggle("tracking",userTracking);
  b.setAttribute("aria-label",userTracking?t("trackingOn"):t("trackingOff"));
  const lb=b.querySelector(".locLabel");
  if(lb)lb.textContent=t("trackBtn");
 });
}
function placeDot(which,mapObj,lat,lon){
 if(!mapObj)return;
 if(!userDots[which]){
  userDots[which]=L.marker([lat,lon],{icon:dotIcon(),interactive:false,keyboard:false}).addTo(mapObj);
 }else{
  userDots[which].setLatLng([lat,lon]);
 }
}
function clearDot(which,mapObj){
 if(userDots[which]&&mapObj){try{mapObj.removeLayer(userDots[which])}catch(e){}}
 userDots[which]=null;
}
function applyFix(lat,lon){
 lastFix={lat,lon};
 addTrailPoint(lat,lon);
 placeDot("main",map,lat,lon);
 map.setView([lat,lon],map.getZoom(),{animate:true,duration:0.3});
 /* The sheet map only auto-pans while its sheet is actually open, so a fix
    arriving in the background doesn't yank a map nobody is looking at. */
 if(detailMap){
  placeDot("detail",detailMap,lat,lon);
  if(document.body.classList.contains("sheetOpen"))
   detailMap.setView([lat,lon],detailMap.getZoom(),{animate:true,duration:0.3});
 }
}
function startTracking(){
 userTracking=true;paintTrackButtons();
 if(!navigator.geolocation){userTracking=false;paintTrackButtons();return}
 locationWatchId=navigator.geolocation.watchPosition(
  pos=>applyFix(pos.coords.latitude,pos.coords.longitude),
  err=>{console.warn("Location error:",err.message)},
  {enableHighAccuracy:true,maximumAge:0,timeout:10000}
 );
}
function stopTracking(){
 userTracking=false;paintTrackButtons();
 if(locationWatchId!==null){navigator.geolocation.clearWatch(locationWatchId);locationWatchId=null}
 lastFix=null;
 clearDot("main",map);clearDot("detail",detailMap);
}
const LocationControl=L.Control.extend({
 options:{position:"bottomleft"},
 onAdd:function(m){
  const cn=L.DomUtil.create("div","leaflet-bar leaflet-control mapBarBtn");
  const btn=L.DomUtil.create("a","",cn);
  btn.href="#";
  btn.innerHTML='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 11l18-8-8 18-2-8-8-2z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/></svg><span class="locLabel"></span>';
  trackButtons.push(btn);
  L.DomEvent.on(btn,"click",L.DomEvent.preventDefault);
  L.DomEvent.on(btn,"click",()=>{userTracking?stopTracking():startTracking()});
  paintTrackButtons();
  return cn;
 }
});
/* Bottom-left stack, reading top to bottom: My Spots, Trails, Trail, Track.
   The two lists you open sit above the two switches you flick, and the
   switches sit nearest the thumb. Leaflet prepends in this corner, so the
   add order here is deliberately the reverse of the visible order. */
new SpotsControl().addTo(map);
new TrailControl().addTo(map);
new TrailToggleControl().addTo(map);
new LocationControl().addTo(map);
drawTrail("main",map);
drawSavedTrails("main",map);
drawSpots("main",map);
map.on("click",mapClickForSpot);
map.on("contextmenu",spotLongPress);

/* ---- Saving a lake for offline use -------------------------------------
   The tile cache already keeps whatever you have looked at, but it is capped
   and it only holds what you happened to pan across. This deliberately walks
   the tile grid around one lake, at the zooms someone actually fishes at, and
   hands the URLs to the service worker to store in a cache that is never
   trimmed. After that the lake draws with no signal at all.
   Both basemaps are covered: OSM (Map, and Depth's base) as plain XYZ, and
   Toporama, which is a WMS and needs a bbox per tile rather than x/y/z --
   computed here exactly as Leaflet computes it, or the saved images would
   never match what the map later asks for. */
const OFFLINE_ZOOMS=[11,12,13,14,15];
function lonToTileX(lon,z){return Math.floor((lon+180)/360*Math.pow(2,z))}
function latToTileY(lat,z){
 const r=lat*Math.PI/180;
 return Math.floor((1-Math.log(Math.tan(r)+1/Math.cos(r))/Math.PI)/2*Math.pow(2,z));
}
function tileToLon(x,z){return x/Math.pow(2,z)*360-180}
function tileToLat(y,z){
 const n=Math.PI-2*Math.PI*y/Math.pow(2,z);
 return 180/Math.PI*Math.atan(0.5*(Math.exp(n)-Math.exp(-n)));
}
// Web Mercator metres, the CRS Leaflet asks Toporama for.
function lonToM(lon){return lon*20037508.34/180}
function latToM(lat){
 const y=Math.log(Math.tan((90+lat)*Math.PI/360))/(Math.PI/180);
 return y*20037508.34/180;
}
function offlineTileUrls(lat,lon){
 const urls=[];
 OFFLINE_ZOOMS.forEach(z=>{
  // A wider net at closer zooms: one tile covers less ground the further in
  // you go, and close zooms are where the lake itself is actually read.
  const r=z<=11?0:z===12?1:z===13?1:z===14?2:3;
  const cx=lonToTileX(lon,z),cy=latToTileY(lat,z),max=Math.pow(2,z);
  for(let x=cx-r;x<=cx+r;x++)for(let y=cy-r;y<=cy+r;y++){
   if(x<0||y<0||x>=max||y>=max)continue;
   urls.push(`https://tile.openstreetmap.org/${z}/${x}/${y}.png`);
   const w=lonToM(tileToLon(x,z)),e=lonToM(tileToLon(x+1,z)),
         n=latToM(tileToLat(y,z)),s=latToM(tileToLat(y+1,z));
   urls.push("https://maps.geogratis.gc.ca/wms/toporama_en?"+
    "SERVICE=WMS&REQUEST=GetMap&VERSION=1.1.1&LAYERS=WMS-Toporama"+
    "&STYLES=&FORMAT=image%2Fpng&TRANSPARENT=false&SRS=EPSG%3A3857"+
    `&BBOX=${w},${s},${e},${n}&WIDTH=256&HEIGHT=256`);
  }
 });
 return urls;
}
let savedAreas={};
try{savedAreas=JSON.parse(localStorage.getItem("osl-offline-areas")||"{}")||{}}catch(e){savedAreas={}}
function saveAreasIndex(){try{localStorage.setItem("osl-offline-areas",JSON.stringify(savedAreas))}catch(e){}}
function areaKeyFor(l){return String(l.key||l.waterbodyId||`${l.lat},${l.lon}`)}
function offlineBtnEl(){return document.getElementById("offlineBtn")}
function paintOfflineBtn(l,state,extra){
 const b=offlineBtnEl();if(!b||!l)return;
 const key=areaKeyFor(l),have=!!savedAreas[key];
 b.disabled=state==="working";
 b.classList.toggle("saved",have&&state!=="working");
 b.textContent=state==="working"?extra:(have?t("offlineSaved"):t("offlineSave"));
}
function requestOffline(l,remove){
 const sw=navigator.serviceWorker&&navigator.serviceWorker.controller;
 const key=areaKeyFor(l);
 if(!sw){mapNotice(t("offlineUnavailable"));return}
 const urls=offlineTileUrls(l.lat,l.lon);
 if(remove){
  sw.postMessage({type:"removeArea",key,urls});
  delete savedAreas[key];saveAreasIndex();paintOfflineBtn(l,"idle");
 }else{
  paintOfflineBtn(l,"working",t("offlineWorking"));
  sw.postMessage({type:"saveArea",key,urls});
 }
}
navigator.serviceWorker&&navigator.serviceWorker.addEventListener("message",ev=>{
 const m=ev.data||{};
 if(!detailLakeObj||areaKeyFor(detailLakeObj)!==m.key)return;
 if(m.type==="saveProgress"){
  paintOfflineBtn(detailLakeObj,"working",`${Math.round(m.done/m.total*100)}%`);
 }else if(m.type==="saveDone"){
  savedAreas[m.key]={ts:Date.now(),n:m.saved};saveAreasIndex();
  paintOfflineBtn(detailLakeObj,"idle");
 }else if(m.type==="removeDone"){
  paintOfflineBtn(detailLakeObj,"idle");
 }
});

/* The lake sheet gets its own map.

   Tapping a lake already panned the main map to it — and then covered that
   map with the sheet, so nobody ever saw it. A second Leaflet instance,
   created the first time a sheet needs one and re-pointed at each lake after
   that, is cheaper than it sounds: it shares the tile cache with the main
   map, so the tiles for a lake you just looked at are usually already there,
   which matters on a weak signal at a lake. */
/* Shared by the main map's expand button and every lake sheet's. */
const EXPAND_ICON='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5"/></svg>',
      COLLAPSE_ICON='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18"/></svg>';
let detailMap=null,detailMarker=null,detailBase=null;
/* Which lake the detail sheet is currently showing. */
let detailLakeKey=null;
/* Per-lake depth contours, fetched as line features from Ontario's Bathymetry
   Line layer rather than rendered server-side. The raster export of this same
   layer ships with default visibility off and draws nothing — discovered the
   hard way — but the query endpoint answers, carries a DEPTH value on every
   line, and speaks GeoJSON, which L.geoJSON eats directly. Province-wide the
   layer holds ~239k lines, but only some lakes have been digitised from the
   1940s–90s paper maps, so absence is normal and silent: contours appear
   where they exist and the sheet stays uncluttered where they don't.
   Cached per lake so reopening is instant; capped so a long browse session
   does not hoard geometry. */
/* Ontario stores these in metres, negative, with float noise, and the odd
   impossible outlier — a 2568 turned up near Moira. Shown in feet: anglers
   here read water in feet, whatever the catch log's unit setting says. Whole
   feet only; the source was sounded by lead line and rounded, so decimals
   would imply precision the 1950s surveys never had. */
function cleanContourDepth(v){
 if(v==null)return null;
 const a=Math.abs(Number(v));
 if(!Number.isFinite(a)||a===0||a>250)return null;
 return Math.round(a*3.28084);
}
/* Survey depths arrive in metres and are shown in feet, matching the contour
   labels. Both had to move together: the sheet said "5 ft" on the map and
   "13.5 m deep" in the row beneath it, which is the kind of contradiction an
   angler notices immediately. Whole feet, same reasoning as the contours. */
function depthFt(m){
 const n=Number(m);
 if(!Number.isFinite(n)||n<=0)return null;
 return Math.round(n*3.28084);
}
let detailContours=null,contourToken=0;
const contourCache=new Map();
async function loadDetailContours(l){
 if(detailContours){try{detailMap.removeLayer(detailContours)}catch(e){}detailContours=null}
 const key=l.id||`${l.lat},${l.lon}`,token=++contourToken;
 let gj=contourCache.get(key);
 if(gj===undefined){
  try{
   /* Envelope ~4 km around the lake centre. Big enough for most inland lakes,
      small enough that the 5000-record cap is rarely a concern; a giant lake
      truncates gracefully to its central contours. */
   const dx=0.05,dy=0.036,
   bbox=`${l.lon-dx},${l.lat-dy},${l.lon+dx},${l.lat+dy}`,
   u=`${BATHY_URL}/${BATHY_LAYER}/query?geometry=${bbox}`+
     "&geometryType=esriGeometryEnvelope&inSR=4326&spatialRel=esriSpatialRelIntersects"+
     "&outFields=DEPTH&returnGeometry=true&outSR=4326&f=geojson";
   const r=await fetch(u);
   gj=r.ok?await r.json():null;
  }catch(e){gj=null}
  contourCache.set(key,gj);
  if(contourCache.size>30)contourCache.delete(contourCache.keys().next().value);
 }
 /* The user may have opened a different lake while the fetch was in flight. */
 if(token!==contourToken||!detailMap)return;
 if(!gj||!gj.features||!gj.features.length)return;
 /* Labels, not just popups. A 1.2px line is close to untappable on a phone,
    so the depth is printed on the line the way a paper chart does it, and the
    line also carries a fat transparent twin underneath purely as a tap target
    for the popup. Labels are thinned to one per distinct depth per lake:
    a lake with forty 3 m segments should say "3 m" once, not forty times. */
 /* The raw DEPTH values need cleaning before anyone sees them. Real Moira
    Lake responses contained -9.100000381469727 (negative, with float noise),
    -3 from a neighbouring pond caught by the envelope, and a 2568 that no
    Ontario lake can justify — a junk record. So: absolute value, one decimal,
    and anything deeper than 250 m is treated as data error and skipped.
    De-duplication keys on the ROUNDED value, otherwise five floats that all
    mean 9.1 m each earn their own label. */
 const cleanDepth=cleanContourDepth;

 const labelled=new Set();
 detailContours=L.geoJSON(gj,{
  style:()=>({color:"#1D5FA0",weight:1.2,opacity:.85}),
  onEachFeature:(f,ly)=>{
   const v=cleanDepth(f.properties&&f.properties.DEPTH);
   if(v==null)return;
   ly.bindPopup(`${t("depth")}: ${v} ft`);
   if(!labelled.has(v)){
    labelled.add(v);
    ly.bindTooltip(`${v} ft`,{permanent:true,direction:"center",
                             className:"depthLabel",opacity:1});
   }
  }
 }).addTo(detailMap);
 /* The transparent tap targets sit under the visible lines. */
 L.geoJSON(gj,{style:()=>({color:"#1D5FA0",weight:14,opacity:0})})
  .addTo(detailContours)
  .eachLayer(ly=>{
   const f=ly.feature,v=cleanDepth(f&&f.properties&&f.properties.DEPTH);
   if(v!=null)ly.bindPopup(`${t("depth")}: ${v} ft`);
  });
 try{detailMap.attributionControl.addAttribution(t("bathyNote"))}catch(e){}
}
/* The sheet's own basemap choice, independent of the main map's. Defaults to
   Depth because contours are the reason the sheet map exists; remembered
   across lakes and launches. "Same three tabs as the main map" was a direct
   request -- Map and Topo without contours, Depth with them. */
let detailLakeObj=null;
let detailBaseKey=localStorage.getItem("osl-sheet-basemap")||"depth";
function applyDetailBase(){
 document.querySelectorAll(".detailBaseSwitch button").forEach(x=>x.classList.toggle("on",x.dataset.dbase===detailBaseKey));
 if(!detailMap)return;
 if(detailBase){try{detailMap.removeLayer(detailBase)}catch(e){}detailBase=null}
 const b=BASEMAPS[detailBaseKey]||BASEMAPS.depth;
 if(b.url){
  detailBase=b.wms?L.tileLayer.wms(b.url,b.opts):L.tileLayer(b.url,b.opts);
  detailBase.addTo(detailMap);
  detailBase.bringToBack&&detailBase.bringToBack();
 }
}
function setDetailBasemap(key){
 if(!BASEMAPS[key])key="depth";
 detailBaseKey=key;localStorage.setItem("osl-sheet-basemap",key);
 applyDetailBase();
 if((BASEMAPS[key]||{}).contours){
  if(detailLakeObj)loadDetailContours(detailLakeObj);
 }else if(detailContours){
  try{detailMap.removeLayer(detailContours)}catch(e){}detailContours=null;
  try{detailMap.attributionControl.removeAttribution(t("bathyNote"))}catch(e){}
 }
}
function showDetailMap(l){
 if(!mapAvailable||!Number.isFinite(l.lat)||!Number.isFinite(l.lon))return;
 const host=$("detailMap");if(!host)return;
 try{
  /* detail() rebuilds the sheet's innerHTML on every open, which replaces the
     container this map was bound to. Reusing the instance would leave it
     drawing into a node no longer in the document — a grey box from the
     second lake onward. So: if the container has changed, tear the old one
     down properly and build against the new node. */
  if(detailMap&&detailMap.getContainer()!==host){
   try{detailMap.remove()}catch(e){}
   detailMap=null;detailMarker=null;detailBase=null;
   /* The old map took its dot with it; forget the stale reference or the
      next fix would try to move a marker that is no longer on any map. */
   userDots.detail=null;trailLines.detail=null;savedTrailLines.detail={};spotLines.detail={};
  }
  if(!detailMap){
   detailMap=L.map(host,{zoomControl:true,attributionControl:true,scrollWheelZoom:false});
   new SpotsControl().addTo(detailMap);
   new TrailControl().addTo(detailMap);
   new TrailToggleControl().addTo(detailMap);
   new LocationControl().addTo(detailMap);
   detailMap.on("click",mapClickForSpot);
   detailMap.on("contextmenu",spotLongPress);
  }
  /* The base layer is rebuilt on every open, not just when the map is first
     created -- it used to keep whatever layer it was born with for the rest
     of the session. Driven by the sheet's own detailBaseKey now, not the
     main map's choice: the sheet grew its own Map/Topo/Depth switch. */
  detailLakeObj=l;
  currentLakeForSpots=l;
  applyDetailBase();
  paintOfflineBtn(l,"idle");
  detailMap.setView([l.lat,l.lon],12);
  /* If tracking is already running, this sheet's map opens with the dot
     already in place rather than waiting for the next GPS fix. */
  if(userTracking&&lastFix)placeDot("detail",detailMap,lastFix.lat,lastFix.lon);
  drawTrail("detail",detailMap);
  drawSavedTrails("detail",detailMap);
  drawSpots("detail",detailMap);
  /* No lake marker on the sheet map. The sheet is already this one lake and
     the map opens centred on it, so the marker said nothing -- and being a
     blue-ish dot it competed with the live location dot, which is the one
     circle on a map that must never be ambiguous. Markers on the main
     Explore map are untouched: there, many lakes share a screen. */
  if(detailMarker){try{detailMap.removeLayer(detailMarker)}catch(e){}detailMarker=null}
  // A map created inside a hidden sheet measures itself as zero and renders a
  // grey box. Re-measure once the sheet is actually on screen.
  setTimeout(()=>{try{detailMap.invalidateSize()}catch(e){}},60);
  if((BASEMAPS[detailBaseKey]||{}).contours)loadDetailContours(l);
 }catch(e){ /* the map is a bonus here; the sheet's facts are the point */ }
}
const fmzLayer=L.geoJSON(null,{
 style:()=>({weight:2,fillOpacity:.06}),
 onEachFeature:(f,l)=>{const z=f.properties&&f.properties.FISHERIES_MANAGEMENT_ZONE_ID;l.bindPopup(`<b>Fisheries Management Zone ${z}</b><br><a target="_blank" rel="noopener" href="${REGS_BASE}${z}">View current Zone ${z} regulations</a>`)}
}).addTo(map);

/* ---------------------------------------------------------------------------
   Basemaps.

   A road basemap is the wrong basemap for finding water — lakes render as pale
   shapes and small ones vanish. Ontario publishes its own topographic tile
   cache, which draws lakes, rivers, wetlands and bush properly, under the same
   Open Government Licence the rest of the app's data uses.

   Deliberately NOT included: Esri World Imagery. Its terms require an ArcGIS
   licence and exclude commercial use, so it cannot ship in an App Store build
   however good the satellite view would look.
--------------------------------------------------------------------------- */
/* CARTO left this list in August 2026: their basemaps began demanding an API
   key, watermarking every unauthenticated tile, and the raster service the
   app used is being retired outright — so a key would only have postponed the
   same failure. A third-party credential baked into a shipped app is also
   exactly the kind of dependency the access-point work just removed. Both
   replacements below are keyless. */
const BASEMAPS={
 map:{
  label:"Map",
  // OpenStreetMap's own tile service: no key, no subdomain shards, no {r}
  // retina variant — plain XYZ. The attribution line is an OSM licence
  // requirement, same as the lodging card's.
  url:"https://tile.openstreetmap.org/{z}/{x}/{y}.png",
  opts:{maxZoom:19,
        attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}
 },
 topo:{
  /* NRCan's Toporama replaced Ontario's own topographic cache here. Ontario's
     drew nicely but stopped dead at the provincial border, and it was one of
     two topo buttons doing the same job; Toporama covers the whole country,
     which also means this basemap carries over to a Manitoba build unchanged.
     Anyone whose stored preference was the old "canada" key falls back to Map
     through the guard in setBasemap. */
  label:"Topo",
  // NRCan's Toporama, a WMS rather than a tile cache — Leaflet renders it
  // through L.tileLayer.wms, hence the wms flag the two layer-construction
  // sites branch on. Layer name and PNG support confirmed from the service's
  // own GetCapabilities. Open Government Licence – Canada; the attribution
  // line is part of that licence, same as OSM's. Keyless, like everything
  // else this app talks to.
  wms:true,
  url:"https://maps.geogratis.gc.ca/wms/toporama_en",
  opts:{layers:"WMS-Toporama",format:"image/png",transparent:false,
        maxZoom:17,attribution:'Toporama &copy; Natural Resources Canada'}
 },
 depth:{
  /* Depth is the Map basemap plus live contours; the contour lines alone,
     floating on nothing, give an angler no way to tell which lake they are
     looking at. Contours are fetched for the visible extent rather than
     bundled: the province holds ~239k lines, far too many to ship or to draw
     at once, so they load only once zoomed into lake level. */
  label:"Depth",
  url:"https://tile.openstreetmap.org/{z}/{x}/{y}.png",
  opts:{maxZoom:19,
        attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'},
  contours:true
 }
 /* "Plain" — no tile layer at all — was removed in v4z. It was meant as the
    offline fallback, but the app already bundles its data offline: search,
    stocking history, regulations, access points and catch logs all work with
    no signal on any basemap, so Plain rescued nothing. What it did do was
    render a grey rectangle that reads as a broken map — it fooled the app's
    own author three times in one evening, and an angler has less context to
    work from. The genuine offline case is answered where it belongs instead,
    by the notice below when tiles fail. */
};
let baseLayer=null,baseKey=localStorage.getItem("osl-basemap")||"map";

/* Contours on the main map. Same source as the lake sheet's, but driven by the
   visible extent instead of one lake, so it needs a zoom floor: below z12 the
   query would ask for a slab of the province and return either nothing useful
   or far too much. The notice says so rather than leaving an empty map to be
   read as broken — the same courtesy the FMZ row already extends. */
const MAIN_CONTOUR_MIN_ZOOM=12;
let mainContours=null,mainContourToken=0;
function clearMainContours(){
 if(mainContours){try{map.removeLayer(mainContours)}catch(e){}mainContours=null}
}
function mapNotice(msg){
 const n=$("mapNotice");if(!n)return;
 if(msg){n.textContent=msg;n.classList.remove("hidden")}
 else n.classList.add("hidden");
}
async function refreshMainContours(){
 if(!mapAvailable||!(BASEMAPS[baseKey]||{}).contours){clearMainContours();mapNotice("");return}
 if(map.getZoom()<MAIN_CONTOUR_MIN_ZOOM){
  clearMainContours();mapNotice(t("depthZoomIn"));return;
 }
 mapNotice("");
 const token=++mainContourToken,b=map.getBounds();
 let gj=null;
 try{
  const u=`${BATHY_URL}/${BATHY_LAYER}/query`+
   `?geometry=${b.getWest()},${b.getSouth()},${b.getEast()},${b.getNorth()}`+
   "&geometryType=esriGeometryEnvelope&inSR=4326&spatialRel=esriSpatialRelIntersects"+
   "&outFields=DEPTH&returnGeometry=true&outSR=4326&f=geojson";
  const r=await fetch(u);
  gj=r.ok?await r.json():null;
 }catch(e){gj=null}
 if(token!==mainContourToken||!(BASEMAPS[baseKey]||{}).contours)return;
 clearMainContours();
 if(!gj||!gj.features||!gj.features.length)return;
 const labelled=new Set();
 mainContours=L.geoJSON(gj,{
  style:()=>({color:"#1D5FA0",weight:1.2,opacity:.85}),
  onEachFeature:(f,ly)=>{
   const v=cleanContourDepth(f.properties&&f.properties.DEPTH);
   if(v==null)return;
   ly.bindPopup(`${t("depth")}: ${v} ft`);
   if(!labelled.has(v)){
    labelled.add(v);
    ly.bindTooltip(`${v} ft`,{permanent:true,direction:"center",
                              className:"depthLabel",opacity:1});
   }
  }
 }).addTo(map);
}
function setBasemap(key){
 if(!BASEMAPS[key])key="map";
 baseKey=key;localStorage.setItem("osl-basemap",key);
 // Reflect the choice in the UI first: bailing out early when the map is
 // unavailable used to leave the buttons showing the wrong one.
 document.querySelectorAll(".baseSwitch button").forEach(x=>x.classList.toggle("on",x.dataset.base===key));
 if(!mapAvailable)return;
 if(baseLayer){map.removeLayer(baseLayer);baseLayer=null}
 const b=BASEMAPS[key];
 if(b.url){
  baseLayer=(b.wms?L.tileLayer.wms(b.url,b.opts):L.tileLayer(b.url,b.opts)).addTo(map);
  baseLayer.bringToBack&&baseLayer.bringToBack();
  /* Tiles that never arrive used to leave an unexplained grey rectangle —
     the commonest way this map looks broken when it is merely offline. Say
     so, the way the Fisheries Management Zones row already does. One notice
     per failure, cleared as soon as any tile loads. */
  baseLayer.on("tileerror",()=>{if(!navigator.onLine||!baseLayer._tilesLoaded)mapNotice(t("tilesOffline"))});
  baseLayer.on("load",()=>{baseLayer._tilesLoaded=true;
   const n0=$("mapNotice");
   if(n0&&(n0.textContent===t("tilesOffline")||n0.textContent===t("tilesSlow")))mapNotice("")});
 }
 refreshMainContours();
 /* Topo and Depth pull live imagery from NRCan/OSM rather than shipping with
    the app, so the first look at a new area can sit on grey a beat longer
    than Map does. Said only after refreshMainContours has had its say --
    the zoom-floor notice for Depth takes priority -- and only if the tiles
    are still not in by the time someone would notice, so a cached repeat
    view stays silent. */
 if((key==="topo"||key==="depth")&&b.url){
  const layerAtSwitch=baseLayer;
  setTimeout(()=>{
   if(layerAtSwitch!==baseLayer||layerAtSwitch._tilesLoaded)return;
   const n=$("mapNotice");
   if(n&&n.classList.contains("hidden"))mapNotice(t("tilesSlow"));
  },350);
 }
}

/* The map used to sit wherever it was last dragged while the list below it
   showed something else entirely. It now frames whatever is in the results. */
function fitToResults(){
 if(!mapAvailable||!shown.length)return;
 const pts=shown.slice(0,400).filter(l=>l.lat&&l.lon).map(l=>[l.lat,l.lon]);
 if(!pts.length)return;
 const c=searchCentre();
 if(c&&(currentView==="recentnear"||committed.radius||committed.sort==="closest"||townOrigin))pts.push(c);
 try{
  if(pts.length===1)map.setView(pts[0],11);
  else map.fitBounds(L.latLngBounds(pts),{padding:[28,28],maxZoom:12});
 }catch(e){}
}

let userMarker=null;

/* ---------------------------------------------------------------------------
   Remembering where you are.

   userLoc lived only in memory, so every relaunch dropped it and the distance
   column silently disappeared until you granted location again. The last fix
   is now kept on the device and restored at startup, and if permission is
   already granted a fresh fix is fetched quietly in the background.

   Nothing is transmitted — this is the same coordinate the app already had,
   stored in the same place as your saved lakes.
--------------------------------------------------------------------------- */
const LOC_KEY="osl-lastloc";
const LOC_MAX_AGE=1000*60*60*24*14;      // a fortnight; beyond that it is a guess

function rememberLocation(lat,lon){
 try{localStorage.setItem(LOC_KEY,JSON.stringify({lat,lon,at:Date.now()}))}catch(e){}
}

function restoreLocation(){
 try{
  const raw=localStorage.getItem(LOC_KEY);
  if(!raw)return false;
  const v=JSON.parse(raw);
  if(!v||typeof v.lat!=="number"||typeof v.lon!=="number")return false;
  if(Date.now()-(v.at||0)>LOC_MAX_AGE)return false;
  userLoc=[v.lat,v.lon];
  return true;
 }catch(e){return false}
}

/* If the browser already holds the permission, refresh silently. No prompt is
   raised here — a cold launch should never interrogate the user. */
function refreshLocationQuietly(){
 if(!navigator.geolocation)return;
 const go=()=>navigator.geolocation.getCurrentPosition(
   p=>{userLoc=[p.coords.latitude,p.coords.longitude];rememberLocation(userLoc[0],userLoc[1]);apply()},
   ()=>{},{maximumAge:1000*60*10,timeout:8000});
 if(navigator.permissions&&navigator.permissions.query){
  navigator.permissions.query({name:"geolocation"})
   .then(st=>{if(st.state==="granted")go()})
   .catch(()=>{});
 }
}
/* ---------------------------------------------------------------------------
   Species and life-stage names.

   These come out of Ontario's stocking table in English. They are also the
   words a francophone angler reads on every single card, so leaving them
   untranslated makes the French build look like a translation that gave up
   halfway. Twelve species, four stages — the names below follow the usage in
   Ontario's own French fisheries material.

   A species that is not in this table falls through unchanged, which is the
   right failure: an English name is honest, an invented French one is not.
------------------------------------------------------------------------- */
/* ---------------------------------------------------------------------------
   Forage species, and why they are hidden.

   Ontario's ARA survey records every fish a crew netted, which is the right
   thing for a fisheries dataset and the wrong thing for a lake sheet. A lake
   would list twenty chips and an angler would scroll past Iowa Darter,
   Blacknose Shiner and Creek Chub looking for Walleye.

   So the display drops three groups:

     FORAGE   minnows, shiners, dace, chubs, sticklebacks, sculpins, darters
              and the other small baitfish nobody drives two hours to catch.
     NOT_ANGLED  lampreys, gobies, ruffe, goldfish, alewife, gizzard shad.
              Not bait, but not a target either. Rainbow Smelt is deliberately
              NOT here — Ontario has a real spring dip-net fishery for it.
     ROLLUP   "Unidentifiable", "Sunfishes", "Moxostoma sp." and the rest of
              the family- and genus-level placeholders. These are not species.
              The card promises "tap one for its limits and season" and there
              is no season for Sander sp., so every one of these chips was a
              dead end.

   Carp, suckers, redhorse, bullheads, rock bass and bowfin all stay. The line
   is baitfish, not glamour.

   This is a DISPLAY filter only. Nothing is deleted from the data: the ARA
   record still holds every species, hasSpeciesData() can still see them, and
   the sheet says so when a filter empties a list.
--------------------------------------------------------------------------- */
const HIDDEN_SPECIES=new Set([
 // Shiners
 "Common Shiner","Golden Shiner","Blacknose Shiner","Spottail Shiner","Mimic Shiner",
 "Emerald Shiner","Blackchin Shiner","Rosyface Shiner","Spotfin Shiner","Sand Shiner",
 "Bridle Shiner","Redfin Shiner","Silver Shiner","Striped Shiner","Ghost Shiner",
 "Pugnose Shiner","River Shiner","Notropis sp.","Luxilus sp.",
 // Dace
 "Northern Redbelly Dace","Finescale Dace","Northern Pearl Dace","Longnose Dace",
 "Blacknose Dace","Redside Dace","Chrosomus sp.","Chrosomus hybrids",
 "Northern Redbelly Dace x Finescale Dace","Finescale Dace x Northern Pearl Dace",
 "Northern Redbelly Dace x Northern Pearl Dace","Blacknose Dace x Creek Chub",
 "Common Shiner x Creek Chub",
 // Chubs
 "Creek Chub","Lake Chub","Hornyhead Chub","River Chub","Silver Chub","Gravel Chub",
 "Chub","Nocomis sp.","Semotilus sp.",
 // Minnows
 "Fathead Minnow","Bluntnose Minnow","Brassy Minnow","Eastern Silvery Minnow",
 "Pugnose Minnow","Central Mudminnow","Fathead Minnow x Bluntnose Minnow",
 // Sticklebacks
 "Brook Stickleback","Ninespine Stickleback","Threespine Stickleback",
 "Fourspine Stickleback","Sticklebacks",
 // Sculpins
 "Mottled Sculpin","Slimy Sculpin","Spoonhead Sculpin","Deepwater Sculpin",
 "Fourhorn Sculpin","Sculpins","Cottus sp.","COTTIDAE hybrids",
 // Darters and the small perches
 "Iowa Darter","Johnny Darter","Johnny Darter x Tesselated Darter","Tessellated Darter",
 "Rainbow Darter","Least Darter","River Darter","Blackside Darter","Fantail Darter",
 "Greenside Darter","Channel Darter","Eastern Sand Darter","Etheostoma sp.",
 "Logperch","Trout-Perch","Trout-Perches",
 // Other small forage
 "Banded Killifish","Brook Silverside","New World Silversides","Central Stoneroller",
 "Tadpole Madtom","Margined Madtom","Noturus sp.","Stonecat",
 "Alewife","Gizzard Shad","Herrings","Alosa sp.","Smelts",
 // Not angled
 "Silver Lamprey","Sea Lamprey","American Brook Lamprey","Northern Brook Lamprey",
 "Round Goby","Freshwater Tubenose Goby","Ruffe","Goldfish",
 // Family and genus placeholders — not species, no regulation to look up
 "Unidentifiable","Carps and Minnows","CYPRINIDAE hybrids","Suckers","Perches",
 "Sunfishes","Pikes","North American Catfishes","Whitefish subfamily",
 "Salmon and Trout subfamily","Grayling subfamily","Bowfins","Cods","Freshwater Eels",
 "Temperate Basses","Moxostoma sp.","Catostomus sp.","Lepomis sp.","Coregonus sp.",
 "Micropterus sp.","Sander sp.","Ictalurus sp.","Ameiurus sp.","Ictiobus sp.",
 "Rhinichthys sp.","Esox sp.","Salmo sp.","Pumpkinseed x Bluegill"
]);

/* The list an angler sees. Everything downstream — chips, filter wheels, map
   popups, search, the "+N" count — goes through this one function so the app
   can never show a species the filters cannot find. */
function anglerSpecies(list){
 return (list||[]).filter(s=>!HIDDEN_SPECIES.has(s));
}
/* The headline list for a lake card, map popup or detail sheet. Stocked
   species lead, because they are why the lake is in this app; surveyed
   species the filters can already find follow, deduplicated. A stocked
   lake used to show ONLY l.species here, which hid every surveyed species
   from view even though okSpecies() already searches both lists — v4j. */
function displaySpecies(l){
 const stocked=l.stocked?(l.species||[]):[];
 const seen=new Set(stocked);
 const surveyed=anglerSpecies(l.present).filter(s=>!seen.has(s));
 return stocked.concat(surveyed);
}
/* Why a visible list came back empty. The distinction matters: "no records"
   and "records we don't show you" are different facts, and telling an angler
   the wrong one about a lake they are about to drive to is exactly the kind of
   thing this app must not do. */
function speciesGap(list){
 const raw=list||[];
 if(!raw.length)return "none";                       // nobody has surveyed it
 if(anglerSpecies(raw).length)return "";             // something to show
 return raw.some(s=>/sp\.$|hybrids$|^Unidentifiable$|subfamily$|^Suckers$|^Perches$|^Sunfishes$|^Pikes$|^Herrings$|^Smelts$|^Sculpins$|^Sticklebacks$|Catfishes$|^Bowfins$|^Cods$|Eels$|Basses$/.test(s))
  ? "unidentified"                                   // surveyed, not keyed to species
  : "forage";                                        // surveyed, all baitfish
}

/* ---------------------------------------------------------------------------
   French species names.

   Every species the app can still display, so a French lake sheet never shows
   a stray English chip beside "Omble de fontaine". Names follow Ontario's own
   French fisheries material and the standard Quebec/CMFFA usage.

   The forage species above are absent on purpose: they are never rendered, so
   a French name for them would be dead weight — and the obscure dace and
   shiner names are exactly the ones worth not guessing at.
--------------------------------------------------------------------------- */
const SPECIES_FR={
 // Trout, char and salmon
 "Brook Trout":"Omble de fontaine","Brown Trout":"Truite brune","Rainbow Trout":"Truite arc-en-ciel",
 "Lake Trout":"Touladi","Aurora Trout":"Omble Aurora","Splake":"Truite moulac",
 "Arctic Char":"Omble chevalier","Atlantic Salmon":"Saumon atlantique",
 "Chinook Salmon":"Saumon quinnat","Coho Salmon":"Saumon coho","Pink Salmon":"Saumon rose",
 "Sockeye Salmon":"Saumon rouge","Arctic Grayling":"Corégone arctique",
 // Whitefish and ciscoes
 "Lake Whitefish":"Grand corégone","Round Whitefish":"Ménomini rond",
 "Pygmy Whitefish":"Corégone nain","Cisco":"Cisco de lac","Lake Herring (Cisco)":"Cisco de lac",
 "Shortjaw Cisco":"Cisco à mâchoires courtes","Blackfin Cisco":"Cisco à nageoires noires",
 "Shortnose Cisco":"Cisco à museau court","Deepwater Cisco":"Cisco de profondeur",
 "Nipigon Cisco":"Cisco de Nipigon","Bloater":"Cisco de fumage","Kiyi":"Cisco kiyi",
 // Pike and walleye
 "Northern Pike":"Grand brochet","Muskellunge":"Maskinongé",
 "Tiger Muskellunge":"Maskinongé tigré","Grass Pickerel":"Brochet vermiculé",
 "Walleye":"Doré jaune","Sauger":"Doré noir","Saugeye":"Doré hybride",
 "Blue Pike":"Doré bleu",
 // Bass, sunfish and crappie
 "Smallmouth Bass":"Achigan à petite bouche","Largemouth Bass":"Achigan à grande bouche",
 "Rock Bass":"Crapet de roche","White Bass":"Bar blanc","Striped Bass":"Bar rayé",
 "White Perch":"Baret","Pumpkinseed":"Crapet-soleil","Bluegill":"Crapet arlequin",
 "Green Sunfish":"Crapet vert","Northern Sunfish":"Crapet du nord",
 "Black Crappie":"Marigane noire","White Crappie":"Marigane blanche",
 "Yellow Perch":"Perchaude",
 // Catfish and bullheads
 "Brown Bullhead":"Barbotte brune","Yellow Bullhead":"Barbotte jaune",
 "Black Bullhead":"Barbotte noire","Channel Catfish":"Barbue de rivière",
 // Suckers and redhorse
 "White Sucker":"Meunier noir","Longnose Sucker":"Meunier rouge",
 "Northern Hog Sucker":"Suceur ballot","Spotted Sucker":"Suceur tacheté",
 "Lake Chubsucker":"Sucet de lac","Quillback":"Couette",
 "Black Buffalo":"Buffalo noir","Shorthead Redhorse":"Chevalier rouge",
 "Silver Redhorse":"Chevalier blanc","Greater Redhorse":"Chevalier jaune",
 "Golden Redhorse":"Chevalier doré","Black Redhorse":"Chevalier de rivière",
 "River Redhorse":"Chevalier de rivière",
 // Everything else still shown
 "Burbot":"Lotte","Lake Sturgeon":"Esturgeon jaune","American Eel":"Anguille d'Amérique",
 "Bowfin":"Poisson-castor","Longnose Gar":"Lépisosté osseux","Spotted Gar":"Lépisosté tacheté",
 "Freshwater Drum":"Malachigan","Mooneye":"Laquaiche argentée","Goldeye":"Laquaiche aux yeux d'or",
 "Rainbow Smelt":"Éperlan arc-en-ciel","Common Carp":"Carpe commune","Fallfish":"Ouitouche"
};
const STAGE_FR={
 "Yearlings":"Sujets d'un an","Yearling":"Sujet d'un an","Fingerlings":"Fretin",
 "Fingerling":"Fretin","Adult":"Adulte","Fry":"Alevins"
};
function speciesLabel(v){return appLang==="fr"&&SPECIES_FR[v]?SPECIES_FR[v]:v}
/* ARA reports one of four thermal regimes. "Unknown" is a real value in the
   data, not a missing one, so it gets a label rather than being blanked. */
const THERMAL_FR={"Cold":"Eau froide","Cool":"Eau tempérée","Warm":"Eau chaude","Unknown":"Non déterminé"};
function thermalLabel(v){return appLang==="fr"&&THERMAL_FR[v]?THERMAL_FR[v]:v}
function stageLabel(v){return appLang==="fr"&&STAGE_FR[v]?STAGE_FR[v]:v}
function esc(v){return String(v??"").replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[m]))}
function name(r){return r.Official_Waterbody_Name||r.Unoffcial_Waterbody_Name||"Unnamed waterbody"}
function num(v){return Number(v||0).toLocaleString(appLang==="fr"?"fr-CA":"en-CA",{maximumFractionDigits:0})}
function rad(x){return x*Math.PI/180}
function distance(a,b,c,d){const R=6371,x=rad(c-a),y=rad(d-b),q=Math.sin(x/2)**2+Math.cos(rad(a))*Math.cos(rad(c))*Math.sin(y/2)**2;return 2*R*Math.asin(Math.sqrt(q))}
function lakeKey(r){return String(r.Waterbody_Location_Identifier||"").trim()||[name(r),r.Geographic_Township,r.Latitude,r.Longitude].map(v=>String(v||"").trim().toLowerCase()).join("|")}
async function fetchPage(offset){
 const p=new URLSearchParams({where:"1=1",outFields:"*",returnGeometry:"false",f:"json",resultOffset:String(offset),resultRecordCount:"1000",orderByFields:"Stocking_Year DESC"});
 const j=await fetch(API+"?"+p).then(r=>r.json()); if(j.error)throw Error(j.error.message); return j;
}
function mercatorToLatLon(x,y){
 const lon=x/20037508.34*180;
 let lat=y/20037508.34*180;
 lat=180/Math.PI*(2*Math.atan(Math.exp(lat*Math.PI/180))-Math.PI/2);
 return [lat,lon];
}
function pointInRing(lon,lat,ring){
 let inside=false;
 for(let i=0,j=ring.length-1;i<ring.length;j=i++){
  const xi=ring[i][0],yi=ring[i][1],xj=ring[j][0],yj=ring[j][1];
  const hit=((yi>lat)!=(yj>lat))&&(lon<(xj-xi)*(lat-yi)/(yj-yi)+xi);
  if(hit)inside=!inside;
 }
 return inside;
}
/* A GeoJSON Polygon's first ring is its outer boundary; every ring after that
   is a HOLE punched out of it. This used to test `.some()` across all of them,
   so a point sitting in a hole counted as inside — and township and zone
   outlines are full of holes, because a township enclosed by another is
   exactly that shape. It decided both the township on a lake card and, more
   seriously, which Fisheries Management Zone a lake is in, which is what the
   regulations link is built from. */
function pointInPolygon(lon,lat,rings){
 if(!rings||!rings.length)return false;
 if(!pointInRing(lon,lat,rings[0]))return false;      // outside the outer ring
 for(let i=1;i<rings.length;i++)
  if(pointInRing(lon,lat,rings[i]))return false;      // inside a hole
 return true;
}
function pointInGeometry(lon,lat,g){
 if(!g)return false;
 if(g.type==="Polygon")return pointInPolygon(lon,lat,g.coordinates);
 if(g.type==="MultiPolygon")return g.coordinates.some(poly=>pointInPolygon(lon,lat,poly));
 return false;
}
function fmzForLake(l){
 const f=fmzFeatures.find(f=>pointInGeometry(l.lon,l.lat,f.geometry));
 return f&&f.properties?Number(f.properties.FISHERIES_MANAGEMENT_ZONE_ID):null;
}
function assignFMZ(){
 lakes.forEach(l=>{
  if(l.fmz)return;
  if(fmzLoaded){const z=fmzForLake(l);if(z){l.fmz=z;return}}
  // The regulation package records a zone against every waterbody that has an
  // exception or an additional opportunity. Free, offline, and exact.
  const wli=String(l.waterbodyId||"").trim();
  if(wli){
   const hit=(exceptionIndex.get(wli)||[]).concat(additionalIndex.get(wli)||[])[0];
   if(hit&&hit.zone){l.fmz=Number(hit.zone);return}
  }
 });
}
async function loadFMZ(show=true){
 // MANITOBA: disabled. FMZ_API serves ONTARIO zone boundaries, which are
 // the wrong shapes on a Manitoba map. Manitoba lakes already carry a
 // real zone number from the waterbody layer (ZONE -> fmz), so the pill
 // on each lake is correct without this; only the map overlay is gone.
 // Restore by deleting these lines if Manitoba publishes zone polygons.
 return;
 if(fmzLoaded){if(show)renderFMZ();return}
 $("fmzStatus").textContent=t("loadingZones");
 try{
  const p=new URLSearchParams({
   where:"1=1",outFields:"FISHERIES_MANAGEMENT_ZONE_ID,LOCATION_DESCR",
   returnGeometry:"true",outSR:"4326",f:"geojson",resultRecordCount:"2000",
   // Zone outlines follow every bay and island of the Great Lakes. At full
   // detail this is tens of megabytes and simply never arrived, which is why
   // no lake was showing a zone. ~200 m is far finer than needed to decide
   // which zone a lake sits in.
   maxAllowableOffset:"0.002",geometryPrecision:"4"
  });
  const j=await fetch(FMZ_API+"?"+p).then(r=>r.json());
  if(j.error)throw Error(j.error.message);
  fmzFeatures=j.features||[];fmzLoaded=true;assignFMZ();apply();
  $("fmzStatus").textContent=`20 Ontario Fisheries Management Zones loaded`;
  if(show)renderFMZ();
 }catch(e){
  $("fmzStatus").textContent=t("zonesRetry");
  $("showFMZ").checked=false;
  if(!loadFMZ._retried){loadFMZ._retried=true;setTimeout(()=>loadFMZ(show),4000)}
  else $("fmzStatus").textContent=t("zonesUnavailable");
 }
}
function renderFMZ(){
 fmzLayer.clearLayers();
 if($("showFMZ").checked&&fmzLoaded)fmzLayer.addData(fmzFeatures);
}
function pick(a,names){
 for(const n of names) if(a[n]!==undefined&&a[n]!==null&&String(a[n]).trim()!=="") return a[n];
 return null;
}
async function queryAll(url,fields="*"){
 let all=[],offset=0,guard=0;
 while(true){
  const p=new URLSearchParams({where:"1=1",outFields:fields,returnGeometry:"false",f:"json",resultOffset:String(offset),resultRecordCount:"2000"});
  const j=await fetch(url+"?"+p).then(r=>r.json());
  if(j.error)throw Error(j.error.message);
  const batch=(j.features||[]).map(x=>x.attributes||{});all.push(...batch);
  if(batch.length<2000||!j.exceededTransferLimit)break;
  offset+=batch.length;if(++guard>100)break;
 }
 return all;
}
async function loadObservedSpecies(){
 // MANITOBA: disabled. SURVEY_API and CAUGHT_API are Ontario Fish
 // ON-Line. Manitoba's bundled waterbodies file already carries SPECIES
 // per waterbody, so this would be a network round trip for data the app
 // already has offline — the exact trap that got the live access layer
 // pulled in v3o.
 return;
 try{
  const [surveys,caught]=await Promise.all([
   queryAll(SURVEY_API,"SURVEY_SUMMARY_RECORD_ID,WATERBODY_IDENT,WATERBODY_NAME"),
   queryAll(CAUGHT_API,"SURVEY_SUMMARY_RECORD_ID,SPECIES_CAUGHT,NUMBER_FISH_CAUGHT")
  ]);
  const surveyByRecord=new Map(surveys.map(s=>[String(s.SURVEY_SUMMARY_RECORD_ID),s]));
  const byWaterbody=new Map();
  caught.forEach(c=>{
   const s=surveyByRecord.get(String(c.SURVEY_SUMMARY_RECORD_ID)); if(!s||!s.WATERBODY_IDENT||!c.SPECIES_CAUGHT)return;
   const id=String(s.WATERBODY_IDENT).trim();
   if(!byWaterbody.has(id))byWaterbody.set(id,new Map());
   const m=byWaterbody.get(id),sp=String(c.SPECIES_CAUGHT).trim();
   m.set(sp,(m.get(sp)||0)+(Number(c.NUMBER_FISH_CAUGHT)||0));
  });
  lakes.forEach(l=>{
   const m=byWaterbody.get(String(l.waterbodyId||"").trim());
   l.observedSpecies=m?[...m.entries()].sort((a,b)=>a[0].localeCompare(b[0])).map(([species,caught])=>({species,caught})):[];
  });
  speciesLoaded=true;apply();
 }catch(e){console.warn("Fish ON-Line species observations unavailable",e)}
}
function normName(s){return String(s||"").toLowerCase().replace(/\([^)]*\)/g," ").replace(/\b(lake|lac|river|rivière|reservoir|réservoir)\b/g," ").replace(/[^a-z0-9]+/g," ").trim().replace(/\s+/g," ")}
/* Fish consumption advisories: 11 MB, and the single most expensive thing the
   app touches.

   It used to be fetched at startup and then matched like this:

       lakes.forEach(l => l.advisoryMatches =
         advisoryLocations.filter(a => normName(a.name) === normName(l.name)));

   That is 10,948 lakes × 2,799 advisory locations = 30.6 million normName()
   calls, each doing string work, all on the main thread immediately after
   load. On a phone that froze the app for twenty seconds or more — the splash
   would leave on time and the menus would then be unresponsive, which is
   exactly what it looked like from the outside.

   Two changes. The matching is now a single Map lookup per lake — O(n+m)
   rather than O(n×m), about 14,000 operations instead of 30 million. And the
   file is no longer fetched at startup at all: nothing on the search screen
   uses it. It is only needed by the advisory panel inside a lake sheet, so it
   loads the first time someone opens one. */
let advisoryPromise=null;
function ensureAdvisories(){
 if(advisoryPromise)return advisoryPromise;
 advisoryPromise=fetch("fish-advisories-2025.json")
  .then(r=>r.json())
  .then(list=>{
   advisoryLocations=list;advisoriesLoaded=true;
   // Index once by normalised name, then one lookup per lake.
   const byName=new Map();
   for(const a of advisoryLocations){
    const k=normName(a.name);
    if(!byName.has(k))byName.set(k,[]);
    byName.get(k).push(a);
   }
   for(const l of lakes)l.advisoryMatches=byName.get(normName(l.name))||[];
   return true;
  })
  .catch(e=>{console.warn("Fish consumption advisory data unavailable",e);return false});
 return advisoryPromise;
}
function parseRange(s){
 const m=String(s||"").match(/(\d+(?:\.\d+)?)\s*-\s*(\d+(?:\.\d+)?)/);return m?[Number(m[1]),Number(m[2])]:null;
}
function adviceFor(loc,species,length){
 const rows=loc.advisories.filter(a=>a.species===species),byPop={};
 rows.forEach(a=>{const rg=parseRange(a.length);if(rg&&length>=rg[0]&&length<rg[1])byPop[a.population]=a});
 return byPop;
}
function advisoryPanel(l){
 /* v4o: this panel was the one screen still hardcoded in English — every
    other string in the app is bilingual. Labels now go through t(); species
    options show speciesLabel() but keep the dataset's English name as the
    value so adviceFor() still matches. */
 if(!advisoriesLoaded)return `<div class="historynote">${t("advLoading")}</div>`;
 const matches=l.advisoryMatches||[];
 if(matches.length!==1)return `<div class="historynote">${matches.length>1?t("advMulti"):t("advNone")} ${t("advVerifyLoc")}</div><a class="secondaryAction" target="_blank" rel="noopener" href="https://www.ontario.ca/page/fish-consumption-report">${t("advOpenGuide")}</a>`;
 const loc=matches[0],species=[...new Set(loc.advisories.map(a=>a.species))].sort();
 return `<div class="advisorybox"><b>${esc(loc.name)}</b>${loc.desc?`<span>${esc(loc.desc)}</span>`:""}<label>${t("advSpeciesLabel")}<select id="advSpecies">${species.map(s=>`<option value="${esc(s)}">${esc(speciesLabel(s))}</option>`).join("")}</select></label><label>${t("advLengthLabel")}<input id="advLength" type="number" inputmode="numeric" min="1" step="1" placeholder="${t("advLengthPh")}"></label><button id="checkAdvice">${t("advCheckBtn")}</button><div id="adviceResult"></div></div><a class="secondaryAction" target="_blank" rel="noopener" href="https://www.ontario.ca/page/fish-consumption-report">${t("advVerifyBtn")}</a>`;
}
function wireAdvisory(l){
 const btn=$("checkAdvice");if(!btn)return;
 btn.onclick=()=>{const loc=(l.advisoryMatches||[])[0],sp=$("advSpecies").value,len=Number($("advLength").value),out=$("adviceResult");if(!len){out.innerHTML=`<p>${t("advEnterLength")}</p>`;return}
  const a=adviceFor(loc,sp,len),g=a.General,s=a.Sensitive;
  if(!g&&!s){out.innerHTML=`<div class="historynote">${t("advNoRange").replace("{len}",String(len)).replace("{sp}",esc(speciesLabel(sp)))}</div>`;return}
  const cause=[g&&g.cause,s&&s.cause].filter(Boolean)[0]||"";
  out.innerHTML=`<div class="mealgrid"><div><small>${t("advGeneral")}</small><b>${g?esc(g.meals):t("advNA")}</b><span>${t("advMeals")}</span></div><div><small>${t("advSensitive")}</small><b>${s?esc(s.meals):t("advNA")}</b><span>${t("advMeals")}</span></div></div>${cause?`<p class="microcopy">${t("advCause").replace("{c}",esc(cause))}</p>`:""}<p class="microcopy">${t("advPlanNote")}</p>`;
 };
}
/* ---------------------------------------------------------------------------
   Where the stocking table comes from.

   It used to come from the live ArcGIS API on every cold open: 12,000-odd
   records, every field, before the user had asked for anything. Invisible on
   wifi; a spinner and a chunk of cellular data on a weak signal; and with no
   signal at all, an app with no stocking data whatsoever — which is a strange
   state for something whose whole argument is that it works at the lake.

   Now it is a bundled file like every other dataset here, built by
   tools/build-stocking.py. The API is still available, but only when the user
   asks for it from Settings.

   If the file has not been built, we fall back to the API exactly as before,
   so a fresh checkout still works before anyone has run the tool. --------- */

let stockingBuilt="";     // snapshot date, shown in the UI so it never looks live

/* The bundled file shortens its keys to halve the size. Expand them back to
   the names the rest of the app already uses, so nothing downstream changes. */
function expandStocking(payload){
 const map=payload.fields||{};
 return (payload.rows||[]).map(r=>{
  const out={};
  for(const k in r)out[map[k]||k]=r[k];
  return out;
 });
}

async function loadBundledStocking(){
 const r=await fetch("manitoba-stocking.json");
 if(!r.ok)throw Error("not built");
 const j=await r.json();
 if(!Array.isArray(j.rows)||!j.rows.length)throw Error("empty");
 stockingBuilt=j.built||"";
 return expandStocking(j);
}

async function loadLiveStocking(){
 let all=[],offset=0,page=0;
 while(true){const j=await fetchPage(offset),batch=(j.features||[]).map(x=>x.attributes);all.push(...batch);$("count").textContent=`${t("loadingRecords")} ${num(all.length)} ${t("records")}`;page++;if(batch.length<1000||!j.exceededTransferLimit)break;offset+=batch.length;if(page>100)break}
 stockingBuilt="";        // live data has no snapshot date; it is today's
 return all;
}

/* Fades the splash and then removes it from the layout, so a transparent
   full-screen layer is not left swallowing every tap. Safe to call twice.

   The floor exists because the data usually arrives in well under a second on
   a warm cache, and the artwork was flashing past faster than it could be
   read. This holds it for a minimum, measured from page load rather than from
   the call, so a slow load is never made slower — the wait is only ever the
   remainder, and is zero when loading already took longer than the floor.

   Five seconds, per Richard. Long for a splash by most standards, but this
   one carries a warning worth reading, and the data genuinely is still
   arriving behind it. */
const SPLASH_MIN_MS=5000;
const splashShownAt=Date.now();
/* A version stamp in the corner of the splash. It exists because "the old
   picture is still showing" and "it is still slow" are the same bug seen
   twice — a stale cached app.js — and there was no way to tell from the
   outside which build was actually running. Now there is: read the corner. */
document.addEventListener("DOMContentLoaded",()=>{
 const v=document.getElementById("splashVer");
 if(v)v.textContent=APP_VERSION;
 /* The caption shows the lake count, but the number is never hardcoded —
    v4g's "10,948" was baked into the artwork and survived two releases of
    string fixes. The count comes from the last successfully loaded index
    (localStorage), then updates live the moment this launch's index lands.
    First-ever run has no count yet and says "Loading Ontario lakes…". */
 const sm=document.getElementById("splashMsg");
 if(sm){const c=Number(localStorage.getItem("osl-lakecount")||0);
  sm.textContent=c>0?t("splashCount").replace("{n}",num(c)):t("splashLoading");}
 // The bar fills once, left to right, and reaches 100% exactly as the splash
 // ends. The duration comes from SPLASH_MIN_MS rather than being repeated in
 // the CSS — the suite has caught this kind of paired constant drifting three
 // times already, so this pair is kept from existing at all.
 const bar=document.querySelector("#splash .splashBar i");
 if(bar)bar.style.animationDuration=SPLASH_MIN_MS+"ms";
});
let splashHiding=false;
function hideSplash(){
 const sp=document.getElementById("splash");
 if(!sp||splashHiding)return;
 splashHiding=true;
 const remaining=Math.max(0,SPLASH_MIN_MS-(Date.now()-splashShownAt));
 setTimeout(()=>{
  sp.classList.add("done");
  setTimeout(()=>{try{sp.remove()}catch(e){}},600);
 },remaining);
}
/* The splash comes down on a timer, not when the data is ready.

   It used to wait for afterStockingLoaded(), and v3b awaits both 2 MB
   datasets before exposing anything — so on a phone that was ten to fifteen
   seconds behind a fish. Nobody should stare at a splash screen to be told
   the app is working.

   The app underneath is safe to show empty because it already says so
   honestly: the count reads "Loading…", and the results area reads
   "Loading…" too, because searchPrompt falls back to it whenever there are
   no lakes yet. Searching early returns emptyNoDataYet, which is true. What
   v3b actually forbade was showing a PARTIAL lake list as if it were
   complete; showing an empty one that says it is still loading is a
   different thing, and the honest one. */
setTimeout(hideSplash,SPLASH_MIN_MS);

function afterStockingLoaded(){
 buildLakes();
 // Search must always use one complete lake collection.  Merge Ontario's
 // full waterbody index before the first dashboard/filter/search render.
 if(waterbodiesLoaded)mergeWaterbodies();
 updateDashboard();buildFilters();
 if(!restoreLastSearch())apply();
 loadFMZ(false).then(()=>apply());
 loadObservedSpecies();loadFullRegulations();loadTripData();loadSpeciesArt();

}

async function load(){
 $("count").textContent=t("loadingData");
 // The splash leaves after a second, so this screen is what people look at
 // while the two datasets land. It has to say what it is doing.
 if($("results"))$("results").innerHTML=`<div class="record searchPrompt">
  <b>${t("loadingData")}</b><span>${t("loadingSub")}</span>
  <div class="splashBar mini" aria-hidden="true"><i></i></div></div>`;
 ["statLakes","statRecords","statSpecies","statLatest"].forEach(id=>{const el=$(id);if(el)el.textContent="…"});
 try{
  // Load both core datasets together.  Do not expose a temporary stocked-only
  // lake list: that was the source of the startup/species-search inconsistency.
  const waterPromise=beginWaterbodies();
  let all;
  try{ all=await loadBundledStocking(); }
  catch(e){ all=await loadLiveStocking(); }
  const fullIndex=await waterPromise;
  if(!fullIndex||!fullIndex.length)throw new Error("Ontario lake database unavailable");
  rows=all.filter(x=>x.Latitude&&x.Longitude);
  waterbodies=fullIndex;
  waterbodiesLoaded=true;waterbodiesState="ready";
  // Remember the real count for the next launch's splash, and correct this
  // splash on the spot if it is still up (first run, or the index grew).
  try{localStorage.setItem("osl-lakecount",String(fullIndex.length))}catch(_){}
  const sm2=document.getElementById("splashMsg");
  if(sm2&&!splashHiding)sm2.textContent=t("splashCount").replace("{n}",num(fullIndex.length));
  afterStockingLoaded();
 }catch(e){
  waterbodiesLoaded=false;waterbodiesState="unavailable";
  $("results").innerHTML=`<div class="error"><b>${t("dbLoadErrTitle")}</b><br>${t("dbLoadErrBody")}</div>`;
  $("count").textContent="Unavailable";
  ["statLakes","statRecords","statSpecies","statLatest"].forEach(id=>{const el=$(id);if(el)el.textContent="—"});
  toast("Ontario lake database didn't load. Reload the app.");
  hideSplash();   // the failure screen is the thing to show, not the artwork
 }
}

/* Settings → "Check for new stockings". The only thing that touches the live
   API now, and only because someone asked it to. */
async function refreshStockingFromAPI(){
 const btn=$("refreshStocking");
 if(btn){btn.disabled=true;btn.textContent=t("checkingStockings")}
 try{
  const all=await loadLiveStocking();
  const fresh=all.filter(x=>x.Latitude&&x.Longitude);
  const added=fresh.length-rows.length;
  rows=fresh;
  afterStockingLoaded();
  toast(added>0?`${num(added)} new stocking records.`
       :added<0?"Ontario's records changed. Updated."
       :"No new stocking records.");
 }catch(e){
  toast("Couldn't reach Ontario's stocking service.");
 }finally{
  if(btn){btn.disabled=false;btn.textContent=t("checkStockings")}
 }
}

/* ---------------------------------------------------------------------------
   Waterbodies that are not stocked.

   The app used to be built purely from the stocking table, so a lake only
   existed if it had been stocked — Moira, Rice and every other self-sustaining
   fishery in the province were simply missing.

   manitoba-waterbodies.json is Manitoba's Waterbody Data, flattened
   by tools/build-waterbodies.py: name, centre point, recorded species, depth.
   WATERBODY_LID joins it to the stocking table, so a stocked lake gains its
   full species list and everything else arrives as a new, unstocked lake.

   The file is optional. If it has not been built the app behaves exactly as
   before rather than failing.
--------------------------------------------------------------------------- */
let waterbodies=[],waterbodiesLoaded=false;
/* "loading" until the index resolves either way. Drives the note that stops a
   half-loaded search from looking like a complete one. */
let waterbodiesState="loading";
/* Lakes the text and distance matched but the species or year wheel removed. */
let suppressedByWheels=0;

/* The 2.2 MB lake index used to be requested only after the stocking file had
   arrived and been built into lakes. Until it landed the app held about 2,100
   stocked lakes and nothing else, so any search in that window came back
   stocked-only — and on a phone over cellular that window is seconds, not
   milliseconds. Reported by Trevor, who searched inside it.

   The request now starts at the same moment as the stocking one and is
   awaited when there is something to merge it into. Two parallel fetches
   instead of two sequential ones, for no extra work. */
let waterbodiesPromise=null;
function beginWaterbodies(){
 if(waterbodiesPromise)return waterbodiesPromise;
 waterbodiesPromise=fetch("manitoba-waterbodies.json")
  .then(r=>{if(!r.ok)throw new Error("not built");return r.json()})
  .then(j=>j.waterbodies||[])
  .catch(()=>null);
 return waterbodiesPromise;
}

async function loadWaterbodies(){
 try{
  const list=await beginWaterbodies();
  if(!list)throw new Error("not built");
  waterbodies=list;
  waterbodiesLoaded=true;waterbodiesState="ready";
  try{localStorage.setItem("osl-lakecount",String(list.length))}catch(_){}
  mergeWaterbodies();
  buildFilters(true);
  // A saved species may only exist in the wheel after the merge, so try the
  // restore again here; restoreLastSearch() runs at most once either way.
  if(!restoreLastSearch())apply();
 }catch(e){
  /* Not built, or offline before it was ever cached. This used to fail
     silently, which meant the app quietly held a fifth of Ontario's lakes
     with nothing on screen to say why — the same "present but invisible"
     failure as the sort bug, and just as indistinguishable from "these lakes
     do not exist". It says so now. */
  waterbodiesLoaded=false;waterbodiesState="unavailable";
  apply();
 }
}

/* ---------------------------------------------------------------------------
   Trip data: where a lake actually is, and where you could stay near it.

   Two optional files, both built once a year on a machine with a network and
   committed like the waterbody index:

   ontario-places.json   tools/build-gazetteer.py — Ontario towns from
                         GeoNames (CC-BY). Lets the sheet say "12 km N of
                         Apsley" instead of leaving a coordinate to speak for
                         itself.
   ontario-nearby.json   tools/build-nearby.py — campgrounds, motels, lodges
                         and cabins from OpenStreetMap (ODbL). The lake sheet
                         lists anything within NEARBY_KM.

   Both are optional, and both fail the same way the waterbody index does:
   silently. Missing files mean the cards simply do not render.
--------------------------------------------------------------------------- */
const NEARBY_KM=10;
let gazetteer=[],nearbyStays=[],nearbyLoaded=false;
/* Fishing access points, bundled by tools/build-access.py.

   This was a live ArcGIS call until v3o, which meant it answered only with a
   signal — and "where do I launch?" is asked standing at a lake. Now it is a
   file, so it works in airplane mode like the rest of the app. Optional: if
   the build tool has not been run, the card says the data has not been built
   rather than implying the lake has no access. */
let accessPoints=[],accessLoaded=false;

async function loadTripData(){
 try{
  const r=await fetch("ontario-places.json");
  if(r.ok){const j=await r.json();gazetteer=j.places||[]}
 }catch(e){ /* not built; the sheet just has no "where is this" line */ }
 try{
  const r=await fetch("ontario-nearby.json");
  if(r.ok){const j=await r.json();nearbyStays=j.stays||[];nearbyLoaded=true}
 }catch(e){ /* not built; the lodging card just does not render */ }
 try{
  const r=await fetch("manitoba-access.json");
  if(r.ok){const j=await r.json();accessPoints=j.access||[];accessLoaded=true}
 }catch(e){ /* not built yet; the access card says so rather than guessing */ }
}

/* ---------------------------------------------------------------------------
   Species plates.

   Anglers want to see the fish. Everything below is decorative: it makes the
   app feel like a fishing app rather than a database, and it is deliberately
   NOT an identification reference. Ontario has pairs that are genuinely hard
   to tell apart and whose limits differ — lake trout and splake above all —
   and a pretty watercolour with no distinguishing marks called out is how
   somebody ends up keeping a fish they should have released. So each plate is
   captioned as an illustration, and the official rule link does the real work.

   The plate is only shown where the angler has named ONE species: a tapped
   species chip, or a Find Fish search for a particular fish. The app never
   picks a "headline" fish for a lake, because it has no honest basis to.

   Optional, like the gazetteer and the lodging data. If species-art has not
   been built the cards render exactly as before.
--------------------------------------------------------------------------- */
let speciesArt={},speciesArtCredit="";

async function loadSpeciesArt(){
 try{
  const r=await fetch("species-art/manifest.json");
  if(!r.ok)return;
  const j=await r.json();
  speciesArt=j.species||{};
  speciesArtCredit=j.credit||"";
 }catch(e){ /* not built; no plates, everything else unchanged */ }
}

/* A species with no plate of THAT species gets no plate. Never a stand-in —
   the same rule the fish-survey wording and the lodging card follow. */
function plateFor(species,cls){
 const a=speciesArt[species];
 if(!a)return "";
 return `<figure class="${cls}">
  <img src="species-art/${encodeURIComponent(a.f)}" alt="" width="1200" height="420" loading="lazy" decoding="async">
  <figcaption class="plateCap"><i>${esc(a.sci||"")}</i><span>${t("plateNote")}</span></figcaption>
 </figure>`;
}

/* "About 12 km N of Apsley." Nearest wins, but a town people have heard of
   beats a hamlet slightly further away, so distance is discounted by
   population. Nothing within 120 km (far north): say nothing. */
function whereLine(l){
 if(!gazetteer.length||!Number.isFinite(l.lat))return "";
 let best=null,bestScore=Infinity;
 for(const p of gazetteer){
  if(Math.abs(p.lat-l.lat)>1.2||Math.abs(p.lon-l.lon)>1.7)continue; // cheap prefilter
  const km=distance(l.lat,l.lon,p.lat,p.lon);
  if(km>120)continue;
  const score=km/Math.log10(Math.max(p.pop||0,10));
  if(score<bestScore){bestScore=score;best={p,km}}
 }
 if(!best)return "";
 const n=best.km<10?best.km.toFixed(1):Math.round(best.km);
 const dir=bearingLabel(best.p.lat,best.p.lon,l.lat,l.lon);
 return `<p class="whereLine">About ${n} km ${dir} of ${esc(best.p.name)}.</p>`;
}

function stayIcon(kind){
 return /camp|rv|trailer|caravan|hut/i.test(kind||"")?"🏕️":"🛏️";
}

/* Nearest fishing access, from the bundled LIO index.

   Built by tools/build-access.py. Everything here is offline: the whole point
   is that "where do I put the boat in" gets asked at the lake, where there is
   no signal. That is why the live version was removed in v3o rather than
   repaired.

   The flags distinguish three states, not two. "No parking" and "nobody
   recorded whether there is parking" are different answers, and only the first
   is worth printing — an omitted flag says nothing rather than guessing. */
const ACCESS_KM=15;
function accessFacts(a){
 const bits=[];
 if(a.park===true)bits.push(t("accParking"));
 if(a.acc===true)bits.push(t("accAccessible"));
 if(a.fee===true)bits.push(t("accFee"));
 else if(a.fee===false)bits.push(t("accNoFee"));
 if(a.mat)bits.push(esc(a.mat));
 return bits;
}
function accessCard(l){
 if(!accessLoaded)
  return `<div class="infoCard"><h3>🚤 ${t("nearestAccess")}</h3>
   <p class="setNote">${t("accessNotBuilt")}</p></div>`;
 const within=accessPoints
  .filter(a=>Math.abs(a.lat-l.lat)<0.2&&Math.abs(a.lon-l.lon)<0.3)   // cheap prefilter
  .map(a=>({...a,km:distance(l.lat,l.lon,a.lat,a.lon)}))
  .filter(a=>a.km<=ACCESS_KM)
  .sort((a,b)=>a.km-b.km)
  .slice(0,6);
 const rows=within.length
  ?within.map(a=>{
    const facts=accessFacts(a);
    const ver=a.ver?` • ${t("accVerified").replace("{year}",a.ver)}`:"";
    /* Two-thirds of Ontario's sites are unnamed, and build-access.py falls
       back to a generic label for those. Printing "Fishing access" as a
       heading above a line reading "Boat Launch" says nothing twice, so an
       unnamed site leads with what it actually is. */
    const named=a.n&&a.n!==t("accPoint");
    return `<div class="accessrow"><div><b>🚤 ${esc(named?a.n:(a.t||t("accPoint")))}</b><span>${
      esc(named?(a.t||t("accPoint")):t("accUnnamed"))} • ${a.km.toFixed(1)} km ${bearingLabel(l.lat,l.lon,a.lat,a.lon)}${
      facts.length?` • ${facts.join(" • ")}`:""}${ver}</span></div>`+
     `<a target="_blank" rel="noopener" href="https://www.google.com/maps/dir/?api=1&destination=${a.lat},${a.lon}">Directions</a></div>`;
   }).join("")
  :`<p class="setNote">${t("accessNoneNearby").replace("{km}",ACCESS_KM)}</p>`;
 return `<div class="infoCard"><h3>🚤 ${t("nearestAccess")}</h3>${rows}
  <p class="microcopy">${t("accessNote")}</p></div>`;
}

/* Camping & lodging near the lake, from the bundled OSM index. OSM coverage
   in cottage country is genuinely patchy, so — exactly like the fish-survey
   wording — an empty list must say "no data", never "nothing nearby". */
function nearbyStaysCard(l){
 if(!nearbyLoaded)return "";
 const within=nearbyStays
  .filter(s=>Math.abs(s.lat-l.lat)<0.15&&Math.abs(s.lon-l.lon)<0.22) // cheap prefilter
  .map(s=>({...s,km:distance(l.lat,l.lon,s.lat,s.lon)}))
  .filter(s=>s.km<=NEARBY_KM)
  .sort((a,b)=>a.km-b.km)
  .slice(0,8);
 const rows=within.length
  ?within.map(s=>`<div class="accessrow"><div><b>${stayIcon(s.kind)} ${esc(s.name)}</b><span>${esc(s.kind)} • ${s.km.toFixed(1)} km ${bearingLabel(l.lat,l.lon,s.lat,s.lon)}</span></div><a target="_blank" rel="noopener" href="https://www.google.com/maps/dir/?api=1&destination=${s.lat},${s.lon}">Directions</a></div>`).join("")
  :`<p class="setNote">Nothing within ${NEARBY_KM} km appears in the bundled index. That means no data for this area, not that there is nowhere to stay.</p>`;
 return `<div class="infoCard"><h3>🏕️ Camping &amp; lodging within ${NEARBY_KM} km</h3>${rows}
 <p class="microcopy osmNote">Locations © OpenStreetMap contributors (ODbL). Community-maintained and incomplete — confirm they are open and taking bookings before you drive.</p></div>`;
}


/* ---------------------------------------------------------------------------
   Province-wide lake lookup.

   The bundled index (manitoba-waterbodies.json) is the offline path, but it has
   to be generated with tools/build-waterbodies.py and committed. Until that
   happens — and for anything the index misses — this asks Ontario directly.

   It runs only when a typed search finds little or nothing locally, so the
   normal case still costs no network at all. Failure is silent: offline is the
   expected state for this app, not an error.
--------------------------------------------------------------------------- */
const ARA_API="https://ws.lioservices.lrc.gov.on.ca/arcgis2/rest/services/LIO_OPEN_DATA/LIO_Open07/MapServer/2/query";
const liveTried=new Set();
let liveBusy=false;


/* "42 km NE" says more than "42 km" when two lakes share a name. */
function bearingLabel(fromLat,fromLon,toLat,toLon){
 const rad=x=>x*Math.PI/180;
 const dLon=rad(toLon-fromLon);
 const y=Math.sin(dLon)*Math.cos(rad(toLat));
 const x=Math.cos(rad(fromLat))*Math.sin(rad(toLat))-Math.sin(rad(fromLat))*Math.cos(rad(toLat))*Math.cos(dLon);
 const deg=(Math.atan2(y,x)*180/Math.PI+360)%360;
 return ["N","NE","E","SE","S","SW","W","NW"][Math.round(deg/45)%8];
}


function distanceLabel(l){
 const c=searchCentre();
 if(!c)return "";
 const km=distance(c[0],c[1],l.lat,l.lon);
 const n=km<10?km.toFixed(1):Math.round(km);
 return `${n} km ${bearingLabel(c[0],c[1],l.lat,l.lon)}`;
}

function ringCentre(geom){
 const rings=(geom&&geom.rings)||[];
 if(!rings.length)return null;
 const ring=rings.reduce((a,b)=>b.length>a.length?b:a,rings[0]);
 if(ring.length<3){
  const n=ring.length||1;
  return [ring.reduce((t,p)=>t+p[1],0)/n, ring.reduce((t,p)=>t+p[0],0)/n];
 }
 let a=0,cx=0,cy=0;
 for(let i=0;i<ring.length-1;i++){
  const x0=ring[i][0],y0=ring[i][1],x1=ring[i+1][0],y1=ring[i+1][1];
  const cr=x0*y1-x1*y0; a+=cr; cx+=(x0+x1)*cr; cy+=(y0+y1)*cr;
 }
 if(Math.abs(a)<1e-12){
  const n=ring.length;
  return [ring.reduce((t,p)=>t+p[1],0)/n, ring.reduce((t,p)=>t+p[0],0)/n];
 }
 a*=0.5;
 return [cy/(6*a), cx/(6*a)];
}

function escSql(v){return String(v).replace(/'/g,"''")}


/* ---------------------------------------------------------------------------
   Species-aware Explore search.

   The Explore box used to hand the query to Ontario as a NAME lookup only, so
   typing "walleye" asked for lakes *called* Walleye — there are none — and
   fell back to whatever stocked walleye lakes happened to be loaded. Moira,
   which holds walleye but has never been stocked, could not appear.

   If the query names a species the app knows, it now also runs the same
   area-and-species query Find Fish uses.
--------------------------------------------------------------------------- */
function knownSpeciesName(q){
 const t=String(q||"").trim().toLowerCase();
 if(t.length<3)return null;
 const all=new Set(SPORT_SPECIES);
 rows.forEach(r=>{if(r.Species)all.add(r.Species)});
 lakes.forEach(l=>anglerSpecies(l.present).forEach(x=>all.add(x)));
 for(const sp of all)if(sp.toLowerCase()===t)return sp;              // "walleye"
 for(const sp of all)if(sp.toLowerCase().startsWith(t)&&t.length>=4)return sp;  // "walle"
 // "brook trout" typed against "Brook Trout" with odd spacing
 const norm=x=>x.toLowerCase().replace(/\s+/g," ").trim();
 for(const sp of all)if(norm(sp)===norm(t))return sp;
 return null;
}

/* The radius the Explore box should search when the query is a species.
   Uses whatever distance is set; falls back to 100 km. */
function explorerRadius(){
 return Number($("radius") && $("radius").value)||100;
}

async function speciesLookupFor(q){
 const sp=knownSpeciesName(q);
 const c=searchCentre();
 if(!sp||!c)return 0;
 const status=$("count"),previous=status?status.textContent:"";
 if(status)status.textContent=t("searchingFor").replace("{sp}",speciesLabel(sp));
 try{
  const n=await araNearby(c[0],c[1],explorerRadius(),sp);
  if(n){buildFilters(true);apply()}
  else if(status)status.textContent=previous;
  return n;
 }catch(e){
  if(status)status.textContent=previous;
  return 0;
 }
}


/* ---------------------------------------------------------------------------
   Explore filters are staged, not live.

   Every filter change used to run a search immediately, and a species query
   can reach out to Ontario's servers. Changing species and then distance fired
   two searches and two requests, neither of which the person had asked for —
   wasted data on a phone that is often on a weak signal at a lake.

   Nothing runs now until Search is pressed (or Enter). The button shows when
   there are unapplied changes so it never looks like the app is ignoring you.
--------------------------------------------------------------------------- */
let filtersDirty=false;

/* The staged group — search text, species, year, Explore's own radius —
   only takes effect when Search is pressed or Clear is used. apply() used to
   read these controls' live DOM values directly, which meant switching tabs
   (setView calls apply() unconditionally) silently applied whatever was
   sitting unsubmitted in the box: the Search button still showed "pending",
   nothing had been confirmed, and the list changed anyway. committed is the
   snapshot apply() actually filters against; only commitFilters() advances
   it, and only from a real submission — a Search press, Clear, or an
   intentionally-immediate control like Near Me's own radius picker. */
/* Explore holds its results back until asked.

   Loading the app used to paint 250 result cards and drop 400 markers on the
   map before anyone had searched for anything — the slowest thing at startup,
   and 10,900 lakes in no particular order answer no question. The data still
   loads in the background exactly as before; only the rendering waits. */
let searched=false;

/* A search can be centred on a town instead of on the person. The bundled
   GeoNames gazetteer has 5,430 Ontario places with coordinates, so "Belleville"
   is answerable entirely offline: the query becomes the centre, the radius
   applies from there, and distances are measured from there. Exact-name match
   only — "Rice" must keep finding Rice Lake, not the hamlet of Rice Point. */
let townOrigin=null;
function placeByName(q){
 const norm=x=>x.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/\s+/g," ").trim();
 const n=norm(q);if(!n)return null;
 let best=null;
 for(const p of gazetteer){
  if(norm(p.name)===n&&(!best||(p.pop||0)>(best.pop||0)))best=p;
 }
 return best;
}
/* The point a search measures from: a named town if one was typed, otherwise
   the person. */
function searchCentre(){return townOrigin?[townOrigin.lat,townOrigin.lon]:userLoc}

/* Explore opens at 50 km rather than the whole province. 10,900 lakes in no
   particular order are not a useful answer, and an angler asking about
   walleye almost always means near here. "Any distance" is still one tap
   away, and the filter is ignored entirely when there is no position, so a
   refused location degrades to a province-wide search rather than to nothing. */
/* "Any distance" — a search should not silently exclude the province by
   default. The distance filter is one tap away when it is wanted; a default
   that hides most of Ontario is not something the person asked for. */
const DEFAULT_RADIUS="";

/* Closest, not "best guess". The old default ranked by a blend that put
   recently stocked lakes first, which is a preference rather than an answer —
   and it was the mechanism behind the v2t bug that buried every unstocked
   lake. Closest is what someone standing at a boat ramp means. Without a
   position to measure from there is nothing to be closest to, so the sort
   falls through to the alphabet, which apply() already does. */
const DEFAULT_SORT="closest";

/* Reopening the last search.

   Explore holds its results back until asked (v2m) — but a search you made
   yourself is something you asked for, so replaying it on launch does not
   break that rule the way a canned default would. Everything needed is
   stored, including the town's coordinates rather than just its name, so the
   restore does not have to wait for the gazetteer to load.

   Deliberately does NOT ask for location on startup. A permission prompt is a
   bad way to greet someone opening an app, and apply() ignores the distance
   filter without a position, so the worst case is a wider search than the one
   that was saved rather than a wrong one. */
const LAST_SEARCH_KEY="osl-lastsearch";
const RESTORE_KEY="osl-restore-search";
function restoreSearchEnabled(){return localStorage.getItem(RESTORE_KEY)!=="0"}
function setRestoreSearch(on){localStorage.setItem(RESTORE_KEY,on?"1":"0");if(!on)forgetLastSearch()}
function forgetLastSearch(){localStorage.removeItem(LAST_SEARCH_KEY)}

function saveLastSearch(){
 if(!restoreSearchEnabled())return;
 try{
  localStorage.setItem(LAST_SEARCH_KEY,JSON.stringify({
   q:$("search")?$("search").value:"",
   sp:$("species")?$("species").value:"",
   yr:$("year")?$("year").value:"",
   radius:$("radius")?$("radius").value:DEFAULT_RADIUS,
   sort:$("sort")?$("sort").value:"",
   town:townOrigin?{name:townOrigin.name,lat:townOrigin.lat,lon:townOrigin.lon}:null,
   at:Date.now()
  }));
 }catch(e){ /* storage full or blocked; the app just opens fresh */ }
}

let lastSearchRestored=false;
function restoreLastSearch(){
 if(lastSearchRestored||!restoreSearchEnabled())return false;
 let v;
 try{ v=JSON.parse(localStorage.getItem(LAST_SEARCH_KEY)||"null"); }catch(e){ return false }
 if(!v)return false;
 lastSearchRestored=true;
 const set=(id,val)=>{const el=$(id);if(el&&val!=null)el.value=val};
 set("search",v.q||"");set("species",v.sp||"");set("year",v.yr||"");
 set("radius",v.radius==null?DEFAULT_RADIUS:v.radius);set("sort",v.sort||"");
 townOrigin=v.town&&Number.isFinite(v.town.lat)?v.town:null;
 searched=true;
 clearFiltersDirty();
 commitFilters();
 apply();
 return true;
}

let committed={q:"",sp:"",yr:"",radius:0,sort:""};
function commitFilters(){
 committed.q=$("search")?$("search").value:"";
 committed.sp=$("species")?$("species").value:"";
 committed.yr=$("year")?$("year").value:"";
 committed.radius=Number($("radius")?$("radius").value:0)||0;
 committed.sort=$("sort")?$("sort").value:"";
}

/* Is there anything for Clear to actually clear?

   Clear used to sit in the filter grid looking exactly like the three selects
   beside it — same white card, same size — while doing something entirely
   different, and it was live even on a fresh screen where it did nothing at
   all. A control that does nothing when tapped teaches people to ignore it,
   which is worse than not showing it.

   Note townOrigin and the search box count: "Within 100 km of Tweed" is a
   filter even though no <select> changed, and Clear resets both. */
function filtersAreSet(){
 const q=$("search"),sp=$("species"),yr=$("year"),rad=$("radius"),so=$("sort");
 return !!(
  (q&&q.value.trim()) ||
  (sp&&sp.value) ||
  (yr&&yr.value) ||
  (rad&&rad.value!==DEFAULT_RADIUS) ||
  (so&&so.value!==DEFAULT_SORT) ||
  townOrigin
 );
}

function syncClearButton(){
 const btn=$("clearFilters");
 if(!btn)return;
 /* v4p: armed by filters OR a finished search. The handler already resets
    searched and returns to the prompt — "start over" was fully built — but the
    arming test only looked at filter widgets. So pressing Search with nothing
    set showed every lake with the one control that goes back greyed out. */
 const on=filtersAreSet()||searched;
 btn.classList.toggle("armed",on);
 btn.disabled=!on;
 // Spelled out for screen readers, which cannot see the dimming.
 btn.setAttribute("aria-label", on ? t("clearFiltersOn") : t("clearFiltersOff"));
}

function markFiltersDirty(){
 filtersDirty=true;
 const btn=$("searchBtn"),hint=$("filterHint");
 if(btn)btn.classList.add("pending");
 if(hint)hint.hidden=false;
 syncClearButton();
}

function clearFiltersDirty(){
 filtersDirty=false;
 const btn=$("searchBtn"),hint=$("filterHint");
 if(btn)btn.classList.remove("pending");
 if(hint)hint.hidden=true;
 syncClearButton();
}

/* The one place a search actually happens. */
async function runSearch(){
 clearFiltersDirty();
 commitFilters();
 searched=true;

 const q=$("search").value.trim();
 const sp=$("species")?$("species").value:"";
 const speciesTyped=q.length>=3?knownSpeciesName(q):null;

 // A typed town name moves the centre of the search. Species names win the
 // tie — "Splake" the fish must never become a place — and only an exact
 // gazetteer match counts, so lake names keep working as lake names.
 townOrigin=(q&&!speciesTyped)?placeByName(q):null;

 const radius=$("radius")?$("radius").value:"";
 // A distance filter is meaningless without a position — but a town search
 // brings its own position, so it never needs to ask for one.
 if(radius&&!userLoc&&!townOrigin){locate(runSearch);return}
 apply();

 // One request per request, not two. A bare species name has no business
 // being sent as a lake-name lookup as well, and a town name is a centre,
 // not something to ask the province's lake index about.
 if(townOrigin){if(sp)await speciesLookupFor(sp)}
 else if(speciesTyped)await speciesLookupFor(q);
 else if(q.length>=3&&shown.length<5)await searchProvince(q);
 else if(sp)await speciesLookupFor(sp);

 apply();   // settle the count after any lookup, rather than leaving "Searching…"
 saveLastSearch();
}

async function searchProvince(q){
 // MANITOBA: disabled. ARA_API is Ontario's Aquatic Resource Area. This
 // tops up a thin search with live results, which on a Manitoba search
 // means injecting lakes from the wrong province.
 return;
 const term=q.trim();
 if(term.length<3||liveBusy||liveTried.has(term.toLowerCase()))return false;
 liveBusy=true;liveTried.add(term.toLowerCase());
 const status=$("count");
 const previous=status?status.textContent:"";
 if(status)status.textContent=t("searchingAllLakes");
 try{
  const p=new URLSearchParams({
   where:`WATERBODY_TYPE = 'Lake or Pond' AND UPPER(OFFICIAL_WATERBODY_NAME) LIKE UPPER('%${escSql(term)}%')`,
   outFields:"OFFICIAL_WATERBODY_NAME,WATERBODY_LID,FISH_SPECIES_SUMMARY,SURFACE_AREA,MAXIMUM_DEPTH,MEAN_DEPTH,SECCHI_DEPTH,THERMAL_REGIME,FISHERIES_MANAGEMENT_ZONE_ID",
   returnGeometry:"true",
   // The shoreline detail is irrelevant — we only need somewhere to put a
   // marker — and generalising keeps this a small request on a slow connection.
   maxAllowableOffset:"0.02",
   geometryPrecision:"4",
   outSR:"4326",
   f:"json",
   resultRecordCount:"60"
  });
  const j=await fetch(ARA_API+"?"+p).then(r=>r.json());
  if(j.error)throw Error(j.error.message);
  const added=mergeLiveResults(j.features||[]);

  if(added){buildFilters(true);apply();}
  else if(status)status.textContent=previous;
  return added>0;
 }catch(e){
  if(status)status.textContent=previous;
  return false;
 }finally{liveBusy=false}
}

function mergeLiveResults(features){
 const byLid=new Map();
 lakes.forEach(l=>{const k=String(l.waterbodyId||"").trim();if(k)byLid.set(k,l)});
 const byName=new Set(lakes.map(l=>(l.name||"").toLowerCase()+"|"+l.lat.toFixed(2)));

 const grouped=new Map();
 features.forEach(f=>{
  const a=f.attributes||{},name=(a.OFFICIAL_WATERBODY_NAME||"").trim();
  if(!name)return;
  const pt=ringCentre(f.geometry);
  if(!pt)return;
  const lid=String(a.WATERBODY_LID||"").trim();
  const key=lid||name.toLowerCase()+"|"+pt[0].toFixed(2);
  const spp=(a.FISH_SPECIES_SUMMARY||"").split(",").map(x=>x.trim()).filter(Boolean);
  const area=a.SURFACE_AREA||0;
  const cur=grouped.get(key);
  if(!cur){
   grouped.set(key,{name,lid,lat:pt[0],lon:pt[1],sp:spp,area:area||null,
    max:a.MAXIMUM_DEPTH,mean:a.MEAN_DEPTH,clar:a.SECCHI_DEPTH,
    th:a.THERMAL_REGIME||null,fmz:a.FISHERIES_MANAGEMENT_ZONE_ID||null,_a:area||0});
  }else{
   // One lake is often several ARA segments. Union the species, keep the
   // deepest reading, and take the centre of the biggest piece — averaging two
   // arms of a lake can put the marker on dry land.
   spp.forEach(x=>{if(!cur.sp.includes(x))cur.sp.push(x)});
   if((a.MAXIMUM_DEPTH||0)>(cur.max||0))cur.max=a.MAXIMUM_DEPTH;
   if(area>cur._a){cur._a=area;cur.lat=pt[0];cur.lon=pt[1];cur.area=area}
  }
 });

 let added=0;
 grouped.forEach(w=>{
  w.sp.sort();
  const existing=w.lid?byLid.get(w.lid):null;
  if(existing){
   if(!existing.present||!existing.present.length)existing.present=w.sp;
   existing.depthMax=existing.depthMax||w.max;
   existing.depthMean=existing.depthMean||w.mean;
   existing.clarity=existing.clarity||w.clar;
   existing.areaHa=existing.areaHa||w.area;
   existing.thermal=existing.thermal||w.th;
   if(!existing.fmz&&w.fmz)existing.fmz=w.fmz;
   return;
  }
  if(byName.has(w.name.toLowerCase()+"|"+w.lat.toFixed(2)))return;
  lakes.push({
   key:"wb:"+(w.lid||w.name+w.lat),
   records:[],name:w.name,lat:w.lat,lon:w.lon,
   township:"",district:"",waterbodyId:w.lid,
   latestYear:0,species:[],present:w.sp,
   depthMax:w.max,depthMean:w.mean,clarity:w.clar,areaHa:w.area,thermal:w.th,
   fmz:w.fmz,observedSpecies:[],advisoryMatches:[],
   stocked:false
  });
  added++;
 });
 return added;
}


/* ---------------------------------------------------------------------------
   "Where can I catch a black crappie within 50 km?"

   Find Fish used to filter stocking records, so it could only answer "where
   has this species been stocked" — useless for crappie, muskie, bass, walleye
   and most of what people actually fish for, none of which are stocked in the
   majority of the lakes that hold them.

   This asks Ontario's survey data for the species directly, inside a box
   around you, then trims the box to a true radius.
--------------------------------------------------------------------------- */
const araAreaTried=new Set();

async function araNearby(lat,lon,km,species){
 // MANITOBA: disabled, same reason as searchProvince. Returns 0 because
 // the caller adds this to a count of newly found lakes.
 return 0;
 const tag=`${species||"*"}|${km}|${lat.toFixed(2)},${lon.toFixed(2)}`;
 if(araAreaTried.has(tag))return 0;
 araAreaTried.add(tag);

 // A degree of latitude is ~111.32 km everywhere; longitude shrinks with the
 // cosine of latitude, which matters a lot this far north.
 const dLat=km/111.32, dLon=km/(111.32*Math.cos(lat*Math.PI/180));
 const env={xmin:lon-dLon,ymin:lat-dLat,xmax:lon+dLon,ymax:lat+dLat,
            spatialReference:{wkid:4326}};

 let where="WATERBODY_TYPE = 'Lake or Pond' AND FISH_SPECIES_SUMMARY IS NOT NULL";
 if(species)where+=` AND UPPER(FISH_SPECIES_SUMMARY) LIKE UPPER('%${escSql(species)}%')`;

 const p=new URLSearchParams({
  where,
  geometry:JSON.stringify(env),
  geometryType:"esriGeometryEnvelope",
  spatialRel:"esriSpatialRelIntersects",
  inSR:"4326",outSR:"4326",
  outFields:"OFFICIAL_WATERBODY_NAME,WATERBODY_LID,FISH_SPECIES_SUMMARY,SURFACE_AREA,MAXIMUM_DEPTH,MEAN_DEPTH,SECCHI_DEPTH,THERMAL_REGIME,FISHERIES_MANAGEMENT_ZONE_ID",
  returnGeometry:"true",maxAllowableOffset:"0.02",geometryPrecision:"4",
  f:"json",resultRecordCount:"400"
 });
 const j=await fetch(ARA_API+"?"+p).then(r=>r.json());
 if(j.error)throw Error(j.error.message);
 const n=mergeLiveResults(j.features||[]);
 return n;
}


function mergeWaterbodies(){
 if(!waterbodies.length)return;
 const byLid=new Map();
 lakes.forEach(l=>{const k=String(l.waterbodyId||"").trim();if(k)byLid.set(k,l)});

 const added=[];
 waterbodies.forEach(w=>{
  const lid=String(w.lid||"").trim();
  const existing=lid?byLid.get(lid):null;
  if(existing){
   existing.present=w.sp||[];
   existing.depthMax=w.max;existing.depthMean=w.mean;existing.clarity=w.clar;
   existing.areaHa=w.area;existing.thermal=w.th;
   if(!existing.fmz&&w.fmz)existing.fmz=w.fmz;
   return;
  }
  added.push({
   key:"wb:"+(lid||w.n+w.lat),
   records:[],            // never stocked, so no stocking history
   name:w.n,
   lat:w.lat,lon:w.lon,
   township:"",district:"",
   waterbodyId:lid,
   latestYear:0,
   species:[],            // "species" means stocked species throughout the app
   present:w.sp||[],
   depthMax:w.max,depthMean:w.mean,clarity:w.clar,areaHa:w.area,thermal:w.th,
   fmz:w.fmz||null,
   observedSpecies:[],advisoryMatches:[],
   stocked:false
  });
 });
 lakes.forEach(l=>{if(l.stocked===undefined)l.stocked=true});
 lakes=lakes.concat(added);
}

function buildLakes(){
 const groups=new Map();
 rows.forEach(r=>{const k=lakeKey(r);if(!groups.has(k))groups.set(k,{key:k,records:[],name:name(r),lat:Number(r.Latitude),lon:Number(r.Longitude),township:r.Geographic_Township||"",district:r.MNRF_District||"",waterbodyId:r.Waterbody_Location_Identifier||""});groups.get(k).records.push(r)});
 lakes=[...groups.values()].map(l=>{l.records.sort((a,b)=>(b.Stocking_Year||0)-(a.Stocking_Year||0));l.latestYear=Math.max(...l.records.map(r=>Number(r.Stocking_Year)||0));l.species=[...new Set(l.records.map(r=>r.Species).filter(Boolean))].sort();l.observedSpecies=[];l.advisoryMatches=[];l.present=l.present||[];l.stocked=true;return l}).sort((a,b)=>b.latestYear-a.latestYear||a.name.localeCompare(b.name));
}
function updateDashboard(){
 const speciesCount=new Set(rows.map(r=>r.Species).filter(Boolean)).size;
 const latestYear=rows.reduce((m,r)=>Math.max(m,Number(r.Stocking_Year)||0),0);
 $("statLakes").textContent=num(lakes.filter(l=>l.stocked).length);
 $("statRecords").textContent=num(rows.length);
 $("statSpecies").textContent=num(speciesCount);
 $("statLatest").textContent=latestYear||"—";
 const age=$("dataAge");
 if(age)age.textContent=stockingBuilt?`${t("asOf")} ${stockingBuilt}.`:t("liveData");
}
function buildFilters(rebuild){
 const sel=$("species");
 if(rebuild){
  const keep=sel?sel.value:"";
  if(sel)sel.length=1;
  fillSpecies();
  if(sel)sel.value=keep;
  return;
 }
 fillSpecies();
 const yrs=[...new Set(rows.map(x=>x.Stocking_Year).filter(Boolean))].sort((a,b)=>b-a);
 const yr=$("year");
 if(yr)yrs.forEach(v=>yr.insertAdjacentHTML("beforeend",`<option>${v}</option>`));
}

function fillSpecies(){
 // The wheel has to offer the fish people actually go looking for, not only
 // the ones somebody happened to stock.
 const set=new Set(SPORT_SPECIES);
 rows.forEach(r=>{if(r.Species)set.add(r.Species)});
 lakes.forEach(l=>anglerSpecies(l.present).forEach(x=>set.add(x)));
 const all=[...set].sort((a,b)=>a.localeCompare(b));
 const opts=all.map(v=>`<option value="${esc(v)}">${esc(speciesLabel(v))}</option>`).join("");
 const sel=$("species");
 if(sel)sel.insertAdjacentHTML("beforeend",opts);
}

function apply(){
 if(currentView==="trips"){renderTrips();return}
 let q=(currentView==="favorites"&&$("favSearch")?$("favSearch").value:committed.q).trim().toLowerCase();
 const sp=committed.sp,yr=committed.yr,radius=committed.radius;
 // A town query is a centre, not a text to match — "belleville" matches no
 // lake, so leaving it in the text filter would guarantee zero results.
 const centre=currentView==="favorites"?userLoc:searchCentre();
 if(townOrigin&&currentView!=="favorites")q="";
 /* How many lakes the text and distance would have matched if the species and
    year wheels were not also applied. When that is more than zero and the
    result is zero, the wheels are the reason — and saying which one is the
    difference between "no lakes match these filters" and "Moira Lake is
    right there, but you have Brook Trout selected". This became a real trap
    in v2y, when the species wheel started persisting across launches: you
    can now arrive at a search carrying a filter you set yesterday. */
 suppressedByWheels=0;
 shown=lakes.filter(l=>{
  if(currentView==="favorites"&&!favoriteKeys.has(l.key))return false;
  // My Lakes is exempt from the distance filter. #radius is shared with
  // Explore, and since v2n it defaults to 50 km — without this, saving a lake
  // and driving home would make it vanish from your own saved list.
  const useRadius=currentView!=="favorites";
  // Stocked and unstocked lakes always appear together, each labelled for
  // what it is. There used to be an "Include lakes that aren't stocked"
  // checkbox; it shipped checked, unchecking it hid four fifths of Ontario,
  // and the pills already tell the two apart at a glance.
  if(q&&!matchesQuery(l,q))return false;
  if(useRadius&&radius&&centre&&distance(centre[0],centre[1],l.lat,l.lon)>radius)return false;
  const okSpecies=!sp||l.species.includes(sp)||anglerSpecies(l.present).includes(sp);
  const okYear=!yr||l.records.some(r=>String(r.Stocking_Year)===yr);
  if(!okSpecies||!okYear){suppressedByWheels++;return false}
  return true;
 });

 /* An explicit sort wins over everything else, including name relevance: if
    someone has asked for "most recently stocked", that is what they want to
    see, not what the search box thinks is the closest name match. */
 const explicit=committed.sort;
 if(explicit==="closest"&&centre){
  shown.sort((a,b)=>distance(centre[0],centre[1],a.lat,a.lon)-distance(centre[0],centre[1],b.lat,b.lon));
  render();return;
 }
 if(explicit==="recent"){
  shown.sort((a,b)=>(b.latestYear||0)-(a.latestYear||0)||a.name.localeCompare(b.name));
  render();return;
 }
 if(explicit==="quantity"){
  // Stocked totals only. An unstocked lake has no number to rank on, so it
  // sorts to the bottom rather than being silently dropped or counted as 0
  // alongside a lake that genuinely received no fish.
  const qty=l=>(l.records||[]).reduce((n,r)=>n+(Number(r.Number_of_Fish_Stocked)||0),0);
  shown.sort((a,b)=>qty(b)-qty(a)||a.name.localeCompare(b.name));
  render();return;
 }
 if(q){
  // With a query typed, closeness of the NAME match beats everything else —
  // "Rice Lake" should not sit below "Big Rice Lake" alphabetically.
  shown.forEach(l=>l._nameScore=nameScore(l,q));
  const byDist=(a,b)=>centre?distance(centre[0],centre[1],a.lat,a.lon)-distance(centre[0],centre[1],b.lat,b.lon):0;
  shown.sort((a,b)=>b._nameScore-a._nameScore||byDist(a,b)||a.name.localeCompare(b.name));
 }
 /* Default order is distance when there is anywhere to measure from, and the
    alphabet when there is not. It used to be stocking year, which quietly
    ranked every stocked lake above every unstocked one — and with only the
    first 250 results rendered, the unstocked lakes were all IN the results
    and all invisible, sorted behind up to 2,100 stocked lakes. Present but
    buried is indistinguishable from excluded. Recency ordering still exists;
    it is just something you ask for — the sort dropdown or the Recently
    Stocked shortcut — not something applied to people who didn't. */
 else if(centre)shown.sort((a,b)=>distance(centre[0],centre[1],a.lat,a.lon)-distance(centre[0],centre[1],b.lat,b.lon));
 else shown.sort((a,b)=>a.name.localeCompare(b.name));
 render();
}
function render(){
 syncClearButton();   // v4p: searched may have flipped since the last sync
 $("count").textContent=lakeCount(shown.length);
 /* "Filtering" means the person has narrowed something, which is why it hides
    the hero copy and the shortcut cards. The distance dropdown counts only
    when it differs from the default — v2n made 50 km the default and this
    line kept treating any value as a deliberate narrowing, so `filtering`
    was true from launch and the two shortcut buttons were hidden for good,
    while the prompt card went on telling people to tap them. */
 const radiusNarrowed=!!($("radius")&&$("radius").value&&$("radius").value!==DEFAULT_RADIUS);
 const filtering=!!(($("search").value||"").trim()||$("species").value||$("year").value||radiusNarrowed);
 document.body.classList.toggle("filtering",filtering&&currentView==="explore");
 const mc=$("mapCount");if(mc)mc.textContent=lakeCount(Math.min(shown.length,400))+" on the map";
 $("listTitle").textContent=currentView==="favorites"?t("myLakes")
  :currentView==="recentnear"?t("recentWithin100")
  :townOrigin?t("lakesNearTown").replace("{town}",townOrigin.name)
  :t("exploreStocked");

 // Nothing asked for yet: say what is available and how to reach it, rather
 // than showing an arbitrary 250 of it. My Lakes and Trips are exempt — those
 // views ARE their contents, and holding them back would just be broken.
 if(currentView==="explore"&&!searched){
  const ready=lakes.length;
  $("count").textContent=ready?t("readyToSearch").replace("{n}",num(ready)):t("loadingData");
  const mc0=$("mapCount");if(mc0)mc0.textContent="";
  $("results").innerHTML=`<div class="record searchPrompt">
   <b>${ready?t("searchPromptTitle").replace("{n}",num(ready)):t("loadingData")}</b>
   <span>${t("searchPromptSub")}</span>
   </div>`+locationPrompt();
  const dp0=$("distancePrompt");if(dp0)dp0.onclick=()=>locate(apply);
  markerLayer.clearLayers();
  return;
 }

 /* A search that ran before the lake index landed is not wrong, it is
    partial — and a partial list of lakes is the one thing this app must never
    present as complete. The note goes above the results, and disappears by
    itself when the index arrives and apply() runs again. */

 $("results").innerHTML=shown.slice(0,250).map((l,i)=>{
  const latest=l.records.filter(r=>Number(r.Stocking_Year)===l.latestYear),latestFish=latest.reduce((n,r)=>n+(Number(r.Number_of_Fish_Stocked)||0),0),fav=favoriteKeys.has(l.key);
  // An unstocked lake has no year and no stocking totals, so it gets its own
  // pill and its own meta line instead of a row of dashes.
  const listSpecies=displaySpecies(l);
  // The empty case is not one case. A stocked lake with no stocked species is
  // a data gap; an unstocked lake can be unsurveyed, forage-only, or keyed no
  // finer than a family. Each says a different thing to someone choosing a lake.
  const headGap=l.stocked?"none":speciesGap(l.present);
  const head=listSpecies.length?esc(listSpecies.slice(0,3).map(speciesLabel).join(" • "))+(listSpecies.length>3?` <span class="more">+${listSpecies.length-3}</span>`:"")
   :`<span class="nospecies">${t(headGap==="forage"?"headForageOnly":headGap==="unidentified"?"headUnidentified":"noSpeciesRecorded")}</span>`;
  const pill=l.stocked?`<span class="pill">${esc(l.latestYear||"—")}</span>`
   :`<span class="pill wild">${t("notStocked")}</span>`;
  // Zone and distance come first: with three Rice Lakes on screen they
  // are the only things that tell them apart.
  // Zone and distance identify the lake. Everything after them is
  // detail — with three Rice Lakes on screen these three are the answer.
  const where=[

   l.fmz?`<span class="zone">FMZ ${esc(l.fmz)}</span>`:"",
   searchCentre()?`<span class="dist">${esc(distanceLabel(l))}</span>`:""
  ].join("");
  const meta=where+(l.stocked
   ?`<span>${num(latestFish)} stocked</span><span>${l.records.length} record${l.records.length===1?"":"s"}</span>`
   :`<span>${surveyMetaLabel(l)}</span>${depthFt(l.depthMax)?`<span>${depthFt(l.depthMax)} ft deep</span>`:""}`);
  return `<article class="record" data-i="${i}"><div class="topline"><div><h4>${esc(l.name)}</h4><div class="species">${head}</div></div><div class="cardactions">${pill}<button class="star ${fav?"saved":""}" data-fav="${esc(l.key)}" aria-label="Favourite">${fav?"★":"☆"}</button></div></div><div class="meta">${meta}</div></article>`;
 }).join("")||`<div class="record empty">${emptyMessage()}</div>`;
 /* The species plate used to live in Find Fish, which no longer exists. It
    belongs wherever a single species has been named — the same rule as before:
    a specific fish gets its plate, "All species" gets none, because the app
    would otherwise be choosing a fish on the angler's behalf. */
 // No plate over an empty list: a big confident fish above "0 lakes" reads as
 // a result rather than as decoration.
 const namedSpecies=shown.length?(committed.sp||(committed.q?knownSpeciesName(committed.q):null)):null;
 if(namedSpecies&&currentView==="explore"){
  const plate=plateFor(namedSpecies,"findPlate");
  if(plate)$("results").insertAdjacentHTML("afterbegin",plate);
 }
 $("results").insertAdjacentHTML("afterbegin",locationPrompt());
 document.querySelectorAll(".record[data-i]").forEach(el=>el.onclick=e=>{if(e.target.closest(".star"))return;const l=shown[+el.dataset.i];map.setView([l.lat,l.lon],11);detail(l)});
 document.querySelectorAll(".star").forEach(b=>b.onclick=e=>{e.stopPropagation();toggleFav(b.dataset.fav)});
 const dw=$("dropWheels");
 if(dw)dw.onclick=()=>{
  const sel=$("species");if(sel)sel.value="";
  const yr=$("year");if(yr)yr.value="";
  clearFiltersDirty();commitFilters();saveLastSearch();apply();
 };
 markerLayer.clearLayers();
 fitToResults();
 shown.slice(0,400).forEach(l=>{const m=L.circleMarker([l.lat,l.lon],{radius:8,color:"#13263C",weight:2,fillColor:l.stocked?"#C4941F":"#8FB6D6",fillOpacity:l.stocked?.92:.85}).addTo(markerLayer).bindPopup(`<b>${esc(l.name)}</b><br>${esc(displaySpecies(l).slice(0,4).map(speciesLabel).join(", "))}<br>${l.stocked?(t("latestStocking")+": "+esc(l.latestYear||"—")):t("notStocked")}`);m.on("click",()=>detail(l))});
}
function lakeCount(n){return num(n)+" "+(n===1?t("lakeOne"):t("lakeMany"))}

/* ---------------------------------------------------------------------------
   Search matching.

   The old filter did a plain substring test, so "rice lake" matched
   "Maurice Lake" and "Price Lake" — the query sits inside both of those words.
   Matching is now anchored to word starts: a token must begin a word.

     "rice lake"  -> Rice Lake, Big Rice Lake, Little Rice Lake
                     NOT Maurice Lake, NOT Price Lake
     "walle"      -> Walleye        (still forgiving while you type)
     "brook tr"   -> Brook Trout

   Every token has to match somewhere, in any order, across the lake's name,
   district and species.
--------------------------------------------------------------------------- */
function searchWords(v){
 return String(v||"").toLowerCase()
  .replace(/[^a-z0-9\s]+/g," ")
  .split(/\s+/).filter(Boolean);
}

/* Does `toks` appear as a run of consecutive words in `words`?

   Only the LAST token is a prefix match — that is the word still being typed.
   Every earlier token must match a whole word. Without that, "pine lake"
   matched "Pineapple Lake", which is the same class of wrong answer as
   "Maurice Lake". */
function phraseIn(words,toks){
 if(!toks.length)return true;
 const last=toks.length-1;
 for(let i=0;i+toks.length<=words.length;i++){
  let ok=true;
  for(let j=0;j<toks.length;j++){
   const w=words[i+j],t=toks[j];
   if(j===last?!w.startsWith(t):w!==t){ok=false;break}
  }
  if(ok)return true;
 }
 return false;
}

/* Fields are matched separately so a phrase cannot straddle two of them —
   otherwise "trout district" could match a Trout in one field and a District
   in another and look like a hit. */
function searchFields(l){
 /* Townships are gone. The boundaries came from a live government layer and
    could not be trusted — lakes were coming back in the wrong township, and a
    confidently wrong answer is worse than no answer. The Fisheries Management
    Zone does the job that mattered (it is what the regulations are written
    against), and whereLine() says "about 3.3 km SE of Madoc", which is what
    people actually wanted from a township anyway. */
 return [l.name,l.district,...(l.species||[]),...anglerSpecies(l.present)]
  .filter(Boolean).map(searchWords);
}

function matchesQuery(l,q){
 const toks=searchWords(q);
 if(!toks.length)return true;
 return searchFields(l).some(f=>phraseIn(f,toks));
}

/* Rank so an exact name lands above a lake that merely contains the phrase. */
function nameScore(l,q){
 const toks=searchWords(q);
 if(!toks.length)return 0;
 const name=searchWords(l.name);
 const joined=name.join(" "),query=toks.join(" ");
 if(joined===query)return 4;                       // Pine Lake
 if(joined.startsWith(query+" "))return 3;         // Pine Lake (Unofficial Name)
 if(phraseIn(name,toks))return 2;                  // Big Pine Lake
 return 1;                                         // matched on species or township
}

/* Distance was simply absent with no location granted, which reads as a
   missing feature rather than a missing permission. Ask for it instead. */
function locationPrompt(){
 if(userLoc)return "";
 return `<button type="button" id="distancePrompt" class="distPrompt">
  <b>${t("turnOnLocation")}</b><span>${t("turnOnLocationSub")}</span></button>`;
}
/* Every one of these was hardcoded English until v2m, so the empty states —
   the moments the app most needs to explain itself — were the least
   translated part of it. They also stay distinct rather than collapsing into
   one "nothing here": no saved lakes, no location, no data yet and no match
   are four different situations. */
function emptyMessage(){
 if(currentView==="favorites")return t("emptyFavorites");
 if(currentView==="recentnear"&&!userLoc)return t("emptyNeedLocation");
 if(!lakes.length)return t("emptyNoDataYet");
 if(liveBusy)return t("emptySearchingProvince");
 if(!userLoc&&knownSpeciesName($("search").value))return t("emptySpeciesNeedsLocation");
 /* The wheels removed everything the text and distance found. Name them, and
    offer to drop them, rather than blaming "these filters" in general. */
 if(suppressedByWheels>0){
  const sp=committed.sp,yr=committed.yr;
  const what=sp&&yr?`${speciesLabel(sp)} + ${yr}`:sp?speciesLabel(sp):yr;
  return `${t("emptyWheelsHid").replace("{n}",num(suppressedByWheels)).replace("{what}",esc(what))}
   <button id="dropWheels" class="inlineClear">${t("clearThose")}</button>`;
 }
 return t("emptyNoMatch");
}
function toggleFav(key){favoriteKeys.has(key)?favoriteKeys.delete(key):favoriteKeys.add(key);localStorage.setItem("osl-favorites",JSON.stringify([...favoriteKeys]));persistDurable();apply()}

function regulationUrl(l){return l.fmz?`${REGS_BASE}${l.fmz}`:"https://www.ontario.ca/document/ontario-fishing-regulations-summary"}


const ONTARIO_REGS_SUMMARY_URL="https://www.ontario.ca/document/ontario-fishing-regulations-summary";
const ONTARIO_REGS_UPDATED="2026-08-04";
const ECCC_ALERTS_API="https://api.weather.gc.ca/collections/weather-alerts/items";
const ECCC_WEATHER_HOME="https://weather.gc.ca/";


function officialRuleSource(l){
 return l&&l.fmz?`${REGS_BASE}${l.fmz}`:ONTARIO_REGS_SUMMARY_URL;
}
function regulationConfidence(l,species){
 const r=resolveVerifiedRule(l,species);
 if(r.status==="zone") return {level:"verified",label:"Verified 2026 zone rule"};
 if(r.status==="exception") return {level:"exception",label:"Waterbody exception — verify exact rule"};
 return {level:"official",label:"Official Ontario rule required"};
}
const VERIFIED_ZONE_RULES={
  "11":{
    "Brook Trout":{season:"Feb 15 – Sep 30",sport:"5",conservation:"2",size:"Sport: max 1 over 31 cm • Conservation: none over 31 cm",source:"Ontario 2026 FMZ 11"}
  },
  "17":{
    "Brook Trout":{season:"4th Saturday in Apr – Sep 30",sport:"2",conservation:"1",size:"No zone-wide size restriction stated",source:"Ontario 2026 FMZ 17"},
    "Brown Trout":{season:"4th Saturday in Apr – Sep 30",sport:"5",conservation:"2",size:"No zone-wide size restriction stated",source:"Ontario 2026 FMZ 17"}
  },
  "10":{
    "Brook Trout":{season:"Jan 1 – Sep 30",sport:"5",conservation:"2",size:"No zone-wide size restriction stated",source:"Ontario 2026 FMZ 10"},
    "Brown Trout":{season:"Open all year",sport:"5",conservation:"2",size:"No zone-wide size restriction stated",source:"Ontario 2026 FMZ 10"},
    "Channel Catfish":{season:"Open all year",sport:"12",conservation:"6",size:"No zone-wide size restriction stated",source:"Ontario 2026 FMZ 10"}
  }
};
const KNOWN_WATERBODY_EXCEPTION_NAMES={
 "11":["cut lake","french river provincial park","green lake","lake nipissing","lake temagami","mcconnell lake","shanty lake","surecatch lake","trout lake"],
 "17":["lake scugog","trent river"]
};
function canonicalSpecies(s){
 const x=String(s||"").trim().toLowerCase();
 const map={"brook trout":"Brook Trout","brown trout":"Brown Trout","channel catfish":"Channel Catfish"};
 return map[x]||String(s||"").trim();
}
function hasKnownWaterbodyException(l){
 const names=KNOWN_WATERBODY_EXCEPTION_NAMES[String(l.fmz)]||[];
 return names.includes(String(l.name||"").trim().toLowerCase());
}
function resolveVerifiedRule(l,species){
 const sp=canonicalSpecies(species),zone=VERIFIED_ZONE_RULES[String(l.fmz)]||{},rule=zone[sp]||null;
 if(!rule)return {status:"unverified",species:sp};
 if(hasKnownWaterbodyException(l))return {status:"exception",species:sp,rule};
 return {status:"zone",species:sp,rule};
}

let fullRegs=null,fullRegsLoaded=false,zoneRuleIndex=new Map(),exceptionIndex=new Map(),additionalIndex=new Map();

/* Regulations go stale on a schedule, and stale fishing rules are the one
   thing in this app that could put someone on the wrong side of the law.

   Ontario publishes a new summary each year and the new rules take effect on
   1 January, so the bundled file is good through 31 December of its own year
   and not a day after. Updating the data on 1 January is not enough on its
   own: App Store review takes days, people update when they feel like it, and
   an angler at a lake with no signal is running whatever copy was last
   cached — which is offline-first working exactly as designed.

   So the app checks rather than trusting the calendar. The year is read from
   the file's own metadata rather than hardcoded, so regenerating the data is
   all that is needed to clear the warning. */
const REGS_YEAR_FALLBACK=2026;
function regsYear(){
 const y=fullRegs&&fullRegs.meta&&Number(fullRegs.meta.year);
 return Number.isFinite(y)&&y>2000?y:REGS_YEAR_FALLBACK;
}
function regsStale(){
 // Stale from 1 January of the year after the data's own year.
 return new Date().getFullYear()>regsYear();
}
/* One banner, used everywhere regulations are shown. Empty while current, so
   it costs nothing and cannot be forgotten in one place and not another. */
function regsStaleNote(){
 if(!regsStale())return "";
 return `<div class="record staleRegs">${t("regsStale")
   .replace("{year}",regsYear())
   .replace("{now}",new Date().getFullYear())}</div>`;
}
async function loadFullRegulations(){
 try{
  fullRegs=await fetch("ontario-regulations-2026.json").then(r=>r.json());
  fullRegs.zoneRules.forEach(r=>zoneRuleIndex.set(`${r.zone}|${canonicalSpecies(r.species)}`,r));
  const add=(map,k,v)=>{if(!map.has(k))map.set(k,[]);map.get(k).push(v)};
  fullRegs.exceptions.forEach(r=>{if(r.wli)add(exceptionIndex,String(r.wli),r)});
  fullRegs.additional.forEach(r=>{if(r.wli)add(additionalIndex,String(r.wli),r)});
  fullRegsLoaded=true;assignFMZ();apply();
 }catch(e){console.warn("Full 2026 regulations unavailable",e)}
}
function fullRuleFor(l,species){
 const sp=canonicalSpecies(species), wli=String(l.waterbodyId||"");
 const ex=(exceptionIndex.get(wli)||[]).filter(r=>!r.species||canonicalSpecies(r.species)===sp);
 const add=(additionalIndex.get(wli)||[]).filter(r=>!r.species||canonicalSpecies(r.species)===sp);
 const zone=zoneRuleIndex.get(`${l.fmz}|${sp}`)||null;
 return {sp,zone,exceptions:ex,additional:add,general:fullRegs&&fullRegs.zoneGeneral?fullRegs.zoneGeneral[String(l.fmz)]||{}:{}};
}
function fullRegCard(l,species){
 if(!fullRegsLoaded)return exactRuleCard(l,species);
 const r=fullRuleFor(l,species);
 if(r.exceptions.length||r.additional.length){
  const rows=[...r.exceptions.map(x=>({kind:"Waterbody exception",...x})),...r.additional.map(x=>({kind:"Additional fishing opportunity",...x}))];
  return `<div class="regCard exception"><div class="regTitle"><b>⚠️ ${esc(r.sp)} — FMZ ${l.fmz}</b><span>Exact waterbody rule found</span></div>
   ${rows.map(x=>`<div class="exactException"><b>${esc(x.kind)}</b>${x.season?`<span>Season: ${esc(x.season)}</span>`:""}${x.limit?`<span>Limit: ${esc(x.limit)}</span>`:""}${x.size?`<span>Size: ${esc(x.size)}</span>`:""}${x.bait?`<span>Bait: ${esc(x.bait)}</span>`:""}${x.gear?`<span>Gear: ${esc(x.gear)}</span>`:""}${x.time?`<span>Time: ${esc(x.time)}</span>`:""}</div>`).join("")}
   <a target="_blank" rel="noopener" href="${officialRuleSource(l)}">${t("verify")}</a></div>`;
 }
 if(r.zone){
  const g=r.general||{};
  return `<div class="regCard verified"><div class="regTitle"><b>🎣 ${esc(r.sp)} — FMZ ${l.fmz}</b><span>Imported 2026 Ontario data</span></div>
   <div class="regGrid exact"><div><small>${t("sportLimit")}</small><b>${esc(r.zone.sport||"—")}</b></div><div><small>${t("conservationLimit")}</small><b>${esc(r.zone.conservation||"—")}</b></div><div><small>${t("season")}</small><b>${esc(r.zone.season||"—")}</b></div><div><small>Aggregate trout/salmon</small><b>${esc(r.zone.aggregate||"—")}</b></div></div>
   ${g.bait?`<p class="ruleNote"><b>Bait:</b> ${esc(g.bait)}</p>`:""}${g.gear?`<p class="ruleNote"><b>Gear:</b> ${esc(g.gear)}</p>`:""}${g.general?`<p class="ruleNote">${esc(g.general)}</p>`:""}
   <p class="regWarning">Imported from Ontario's 2026 open regulation workbook. Ontario states the dataset is not a complete legal representation; variation orders may supersede it.</p>
   <a target="_blank" rel="noopener" href="${officialRuleSource(l)}">${t("verify")}</a></div>`;
 }
 return regulationCard(l,r.sp);
}

function exactRuleCard(l,species){
 const r=resolveVerifiedRule(l,species);
 if(r.status==="zone"){
  return `<div class="regCard verified"><div class="regTitle"><b>🎣 ${esc(r.species)} — FMZ ${l.fmz}</b><span>Verified zone-wide 2026 rule</span></div>
  <div class="regGrid exact"><div><small>${t("sportLimit")}</small><b>${esc(r.rule.sport)}</b></div><div><small>${t("conservationLimit")}</small><b>${esc(r.rule.conservation)}</b></div><div><small>Slot / size</small><b>${esc(r.rule.size)}</b></div><div><small>${t("season")}</small><b>${esc(r.rule.season)}</b></div></div>
  <p class="regWarning">These are catch/possession limits for the selected licence type. Zone-wide rule shown only when the app has not identified a packaged waterbody exception. Fish sanctuaries, bait/gear rules and variation orders can still override normal rules.</p>
  <div class="sourceStamp">Ontario 2026 regulations • current-summary check: Aug. 4, 2026</div>
  <a target="_blank" rel="noopener" href="${officialRuleSource(l)}">Verify Current FMZ ${l.fmz} Regulations</a></div>`;
 }
 if(r.status==="exception"){
  return `<div class="regCard exception"><div class="regTitle"><b>⚠️ ${esc(r.species)} — special waterbody</b><span>Exception check required</span></div>
  <p>This lake is identified in the packaged Ontario waterbody-exception index for FMZ ${l.fmz}. The app will not substitute the normal zone-wide limit, season or slot size.</p><div class="exceptionChecklist"><span>✓ Zone identified</span><span>✓ Species identified</span><span>⚠ Waterbody exception applies</span></div><a target="_blank" rel="noopener" href="${officialRuleSource(l)}">Open Exact Ontario Exception</a></div>`;
 }
 return regulationCard(l,r.species);
}

function regulationCard(l,species){
 const sp=species||"selected species";
 if(!l.fmz)return `<div class="regCard warning"><b>Limits &amp; slot sizes</b><p>FMZ could not be determined for this lake. Open Ontario's current regulations before fishing.</p><a target="_blank" rel="noopener" href="${regulationUrl(l)}">Check Official Regulations</a></div>`;
 return `<div class="regCard">
   <div class="regTitle"><b>🎣 ${esc(sp)} — FMZ ${l.fmz}</b><span>2026 rules</span></div>
   <div class="regGrid">
     <div><small>${t("sportLimit")}</small><b>See official rule</b></div>
     <div><small>${t("conservationLimit")}</small><b>See official rule</b></div>
     <div><small>Slot / size</small><b>Check zone + exception</b></div>
     <div><small>${t("season")}</small><b>Check current dates</b></div>
   </div>
   <p class="regWarning">This species/FMZ combination has not yet been packaged as a verified numeric rule. Ontario rules can also be overridden by species exceptions, waterbody exceptions, fish sanctuaries and variation orders. The app will not display a guessed legal limit.</p>
   <div class="regActions"><a target="_blank" rel="noopener" href="${officialRuleSource(l)}">Open FMZ ${l.fmz} Current Rules</a></div>
 </div>`;
}


/* ---------------------------------------------------------------------------
   Per-species limits, from tapping a species.

   Ontario's zone tables list limits under ~20 regulation CATEGORIES, while
   survey and stocking data name the actual fish. "Black Crappie" has to become
   "Crappie", "Walleye" has to become "Walleye and Sauger or any combination",
   and so on, or the lookup silently misses.

   Everything in this map is a grouping Ontario's own summary uses. Where a
   species is not confidently mappable — rock bass, suckers, shiners, sculpin,
   most baitfish — it is deliberately LEFT OUT, and the app says the zone table
   does not list a limit for it rather than guessing one. A wrong limit shown
   confidently is the worst thing this app can do: somebody keeps a fish on it.
--------------------------------------------------------------------------- */

/* Ontario sport fish, for the species wheel. Every one of these resolves to a
   regulation category, so picking any of them can show a limit. Species the
   app discovers in stocking or survey data are merged in on top. */
const SPORT_SPECIES=["Atlantic Salmon","Black Crappie","Bluegill","Brook Trout","Brown Trout",
 "Channel Catfish","Chinook Salmon","Coho Salmon","Lake Herring (Cisco)","Lake Sturgeon",
 "Lake Trout","Lake Whitefish","Largemouth Bass","Muskellunge","Northern Pike","Pumpkinseed",
 "Rainbow Trout","Sauger","Smallmouth Bass","Splake","Walleye","White Crappie","Yellow Perch"];

const REG_CATEGORY={
 "black crappie":"Crappie",
 "white crappie":"Crappie",
 "crappie":"Crappie",
 "walleye":"Walleye and Sauger or any combination",
 "sauger":"Walleye and Sauger or any combination",
 /* Bass are listed as a combined category in 18 of Ontario's 20 zones; only
    zone 20 breaks them out separately. Both candidates are listed here, most
    common first, and the zone decides which one actually applies. */
 "largemouth bass":["Largemouth and Smallmouth Bass or any combination","Largemouth Bass"],
 "smallmouth bass":["Largemouth and Smallmouth Bass or any combination","Smallmouth Bass"],
 "northern pike":"Northern Pike",
 "muskellunge":"Muskellunge",
 "musky":"Muskellunge",
 "yellow perch":"Yellow Perch",
 "lake trout":"Lake Trout",
 "brook trout":"Brook Trout",
 "speckled trout":"Brook Trout",
 "brown trout":"Brown Trout",
 "rainbow trout":"Rainbow Trout",
 "steelhead":"Rainbow Trout",
 "splake":"Splake",
 "lake whitefish":"Lake Whitefish",
 "lake sturgeon":"Lake Sturgeon",
 "channel catfish":"Channel Catfish",
 "atlantic salmon":"Atlantic Salmon",
 "chinook salmon":"Pacific Salmon",
 "coho salmon":"Pacific Salmon",
 "pink salmon":"Pacific Salmon",
 "lake herring":"Lake Herring (Cisco)",
 "cisco":"Lake Herring (Cisco)",
 "lake herring (cisco)":"Lake Herring (Cisco)",
 "pumpkinseed":"Sunfish",
 "bluegill":"Sunfish"
};

function regCategoriesFor(species){
 const k=String(species||"").trim().toLowerCase();
 const v=REG_CATEGORY[k];
 if(!v)return [];
 return Array.isArray(v)?v:[v];
}

/* Resolve to the category this zone's table actually carries. A species can
   sit under different groupings from zone to zone, so a single fixed name
   silently misses wherever the grouping differs. When no candidate matches,
   the first is returned so the caller still reports the zone table as not
   listing a limit rather than guessing one. */
function regCategoryFor(species,fmz){
 const cands=regCategoriesFor(species);
 if(!cands.length)return null;
 if(fmz)for(const c of cands)if(zoneRuleIndex.get(`${fmz}|${c}`))return c;
 return cands[0];
}

/* Everything known about one species on one lake. */
function speciesRule(l,species){
 const cat=regCategoryFor(species,l.fmz);
 const cats=regCategoriesFor(species);
 const wli=String(l.waterbodyId||"").trim();
 // A waterbody exception overrides the zone table, so it is looked up first
 // and reported even when it carries no species of its own.
 const ex=(exceptionIndex.get(wli)||[]).filter(r=>!r.species||
   cats.includes(canonicalSpecies(r.species))||String(r.species).toLowerCase()===String(species).toLowerCase());
 const extra=(additionalIndex.get(wli)||[]).filter(r=>!r.species||
   cats.includes(canonicalSpecies(r.species))||String(r.species).toLowerCase()===String(species).toLowerCase());
 const zone=cat&&l.fmz?zoneRuleIndex.get(`${l.fmz}|${cat}`)||null:null;
 return {species,category:cat,zone,exceptions:ex,additional:extra};
}

function speciesRuleCard(l,species){
 if(!fullRegsLoaded)
  return `<div class="ruleDrawer"><p class="setNote">Regulations are still loading.</p></div>`;
 if(!l.fmz)
  return `<div class="ruleDrawer"><p class="setNote">This lake's Fisheries Management Zone could not be determined, so no zone limit can be shown.</p>
   <a class="ruleLink" target="_blank" rel="noopener" href="${regulationUrl(l)}">Open the official regulations</a></div>`;

 const r=speciesRule(l,species);
 let body="";

 if(r.zone){
  body+=`<div class="ruleGrid">
   <div><small>Sport licence</small><b>${esc(r.zone.sport||"—")}</b></div>
   <div><small>Conservation licence</small><b>${esc(r.zone.conservation||"—")}</b></div>
   <div class="wide"><small>Season</small><b>${esc(r.zone.season||"—")}</b></div>
  </div>`;
  if(r.zone.aggregate==="Yes")
   body+=`<p class="setNote">This limit is aggregate — it is shared across the species grouped with it, not counted separately.</p>`;
  if(r.category&&r.category.toLowerCase()!==String(species).toLowerCase())
   body+=`<p class="setNote">Listed by Ontario under "${esc(r.category)}".</p>`;
 }else{
  body+=`<p class="setNote">Ontario's FMZ ${esc(l.fmz)} table does not list a catch limit under this species' name. That does not mean there is no rule — check the official summary before keeping one.</p>`;
 }

 if(r.exceptions.length){
  body+=`<div class="ruleAlert"><b>This waterbody has its own rule</b>
   <p>A waterbody exception is listed for this lake, and it overrides the zone limit above.</p>
   ${r.exceptions.slice(0,3).map(e=>`<div class="exRow">
     ${e.season?`<span><small>Season</small>${esc(e.season)}</span>`:""}
     ${e.limit?`<span><small>Limit</small>${esc(e.limit)}</span>`:""}
     ${e.size?`<span><small>Size</small>${esc(e.size)}</span>`:""}
   </div>`).join("")}</div>`;
 }
 if(r.additional.length){
  body+=`<p class="setNote">An additional fishing opportunity is also listed for this waterbody.</p>`;
 }

 return `<div class="ruleDrawer">
  ${plateFor(species,"plate")}
  <div class="ruleHead"><b>${esc(speciesLabel(species))}</b><span>FMZ ${esc(l.fmz)} • 2026</span></div>
  ${body}
  <p class="ruleFine">Summary only. Sanctuaries, bait and gear restrictions and in-season variation orders can all change this.</p>
  <a class="ruleLink" target="_blank" rel="noopener" href="${officialRuleSource(l)}">Verify on Ontario's official FMZ ${esc(l.fmz)} page</a>
 </div>`;
}

/* Delegated so it keeps working for chips rendered after this runs. */
function wireSpeciesChips(){
 const sheet=$("detail");if(!sheet)return;
 sheet.onclick=e=>{
  const chip=e.target.closest("[data-sprule]");
  if(!chip)return;
  const open=chip.classList.contains("open");
  sheet.querySelectorAll("[data-sprule].open").forEach(c=>c.classList.remove("open"));
  sheet.querySelectorAll(".ruleDrawer").forEach(d=>d.remove());
  if(open)return;
  chip.classList.add("open");
  const lake=lakes.find(x=>x.key===chip.dataset.lakekey);
  if(!lake)return;
  chip.insertAdjacentHTML("afterend",speciesRuleCard(lake,chip.dataset.sprule));
 };
}

/* The one-line survey summary on a result row. Three different facts, three
   different sentences — see speciesGap(). */
function surveyMetaLabel(l){
 const shownSp=anglerSpecies(l.present);
 if(shownSp.length)return shownSp.length+" "+t(shownSp.length===1?"speciesRecordedOne":"speciesRecordedMany");
 const gap=speciesGap(l.present);
 return gap==="none"?t("metaNoSurvey"):gap==="unidentified"?t("metaUnidentified"):t("metaForageOnly");
}

function presentBlock(l){
 const sp=anglerSpecies(l.present);
 const facts=[
  depthFt(l.depthMax)?[t("maxDepth"),depthFt(l.depthMax)+" ft"]:null,
  depthFt(l.depthMean)?[t("meanDepth"),depthFt(l.depthMean)+" ft"]:null,
  l.areaHa?[t("surfaceArea"),num(l.areaHa)+" ha"]:null,
  l.clarity?[t("waterClarity"),l.clarity+" m"]:null,
  l.thermal?[t("thermalRegime"),thermalLabel(l.thermal)]:null
 ].filter(Boolean);
 const gap=speciesGap(l.present);
 if(!sp.length&&!facts.length&&l.stocked)return "";

 // A blank list is never "no fish". There are three separate reasons a list
 // can come back empty and they are three different facts:
 //
 //   none          nobody has surveyed this lake
 //   forage        surveyed, but only baitfish were recorded
 //   unidentified  surveyed, but the records stop at family or genus
 //
 // Saying "only baitfish" about a lake whose record reads "Pikes" would be a
 // lie — there IS a pike-family fish in there, ARA just never keyed it. Each
 // case gets its own sentence, and each keeps the ARA link so a curious angler
 // is never stonewalled.
 const list=sp.length
  ?`<div class="speciesGrid">${sp.map(x=>`<button type="button" class="spChip" data-sprule="${esc(x)}" data-lakekey="${esc(l.key)}">${esc(speciesLabel(x))}<i aria-hidden="true">›</i></button>`).join("")}</div>`
  :`<p class="setNote">${t(gap==="none"?"surveyNone":gap==="unidentified"?"surveyUnidentified":"surveyForageOnly")}</p>`;

 return `<div class="infoCard">
  <h3>${t("fishPresentHead")}</h3>
  <p class="panelNote">${t("fishPresentSub")}${l.stocked?" "+t("fishPresentSeparate"):""} ${t("fishPresentTap")}</p>
  ${list}
  ${facts.length?`<div class="detailgrid">${facts.map(f=>`<div><small>${f[0]}</small>${esc(String(f[1]))}</div>`).join("")}</div>`:""}
 </div>`;
}

function detail(l){
 recentLakes=[l.key,...recentLakes.filter(k=>k!==l.key)].slice(0,10);localStorage.setItem("osl-recent",JSON.stringify(recentLakes));persistDurable();
 const fav=favoriteKeys.has(l.key),history=l.records.map(r=>`<div class="historyrow"><div><b>${esc(r.Stocking_Year||"—")}</b><span>${esc(r.Species?speciesLabel(r.Species):t("speciesUnavailable"))}</span></div><div class="historyright"><b>${num(r.Number_of_Fish_Stocked)}</b><span>${esc(r.Developmental_Stage?stageLabel(r.Developmental_Stage):"")}</span></div></div>`).join("");
 $("detail").innerHTML=`<div class="detailhead"><div><h2>${esc(l.name)}</h2><div class="species">${esc(displaySpecies(l).slice(0,6).map(speciesLabel).join(" • "))}${displaySpecies(l).length>6?` <span class="more">+${displaySpecies(l).length-6}</span>`:""}</div></div><button class="bigstar ${fav?"saved":""}" id="detailFav">${fav?"★":"☆"}</button></div>
 ${whereLine(l)}
 <div class="detailMapBlock"><div class="detailMapHead"><button type="button" id="offlineBtn" class="offlineBtn">${t("offlineSave")}</button><div class="baseSwitch detailBaseSwitch" role="group" aria-label="Basemap"><button type="button" data-dbase="map">${t("baseMap")}</button><button type="button" data-dbase="topo">${t("baseTopo")}</button><button type="button" data-dbase="depth">${t("baseDepth")}</button></div></div>
 <div class="detailMapWrap"><div id="detailMap" role="img" aria-label="${t('lakeMapLabel')}"></div><button type="button" class="mapExpand detailMapExpand" aria-label="${t("expandMap")}">${EXPAND_ICON}</button></div></div>
 <div class="detailgrid">${l.stocked?`<div><small>Latest stocking</small><b>${esc(l.latestYear||"—")}</b></div><div><small>Stocking records</small><b>${l.records.length}</b></div>`:`<div><small>Stocking</small><b>Not stocked</b></div>`}${userLoc?`<div><small>Distance from you</small><b>${esc(distanceLabel(l))}</b></div>`:""}${l.district?`<div><small>MNRF district</small><b>${esc(l.district)}</b></div>`:""}
 <div><small>Fisheries Management Zone</small><b>${l.fmz?`FMZ ${l.fmz}`:"Loading / unavailable"}</b></div><div><small>Waterbody ID</small><b>${esc(l.waterbodyId||"—")}</b></div></div>
 ${l.fmz?`<a class="zoneAction${regsStale()?" stale":""}" target="_blank" rel="noopener" href="${REGS_BASE}${l.fmz}">${
   regsStale()?t("checkRegsFor").replace("{zone}",l.fmz)
              :t("viewCurrentRegs").replace("{zone}",l.fmz)}</a>`:""}
 ${regsStaleNote()}
${presentBlock(l)}
 <button class="tripStart" id="startTrip">Start a fishing trip</button>
 <div id="lake-rules" class="tabAnchor"></div>${fullRegCard(l,l.species[0]||"Fish")}
 ${fishingConditionsCard(l)}
 <div id="lake-eating" class="tabAnchor"></div><div class="infoCard"><h3>🍽️ Eating Ontario Fish</h3><p>Ontario consumption advice depends on the exact waterbody, fish species and fish length.</p>${advisoryPanel(l)}</div>
 <div id="lake-species" class="tabAnchor"></div><div class="infoCard"><h3>${t("netHead")}</h3><p class="microcopy">${t("netSub")}</p>
 ${speciesLoaded?(l.observedSpecies&&l.observedSpecies.length?`<div class="specieschips netchips">${l.observedSpecies.map(s=>`<span>${esc(s.species)}<em>${s.caught>0?`${Number(s.caught).toLocaleString()} ${t("netCaught")}`:t("netNoCount")}</em></span>`).join("")}</div><p class="microcopy">Species shown come from Fish ON-Line survey records and are not a guarantee of current abundance.</p>`:`<p>${t("netNone")}</p>`):`<p>${t("netLoading")}</p>`}
 </div>
 <div id="lake-depth" class="tabAnchor"></div><div class="infoCard"><h3>🌊 ${t("lakeDepth")}</h3><p>${l.depthMax?t("depthKnown").replace("{max}",esc(depthFt(l.depthMax))).replace("{mean}",depthFt(l.depthMean)?esc(depthFt(l.depthMean)):"—"):t("depthUnknown")}</p><p class="helpNote">${t("depthNotForNav")}</p></div>
 <div id="lake-stocking" class="tabAnchor"></div><h3>Recent Stocking History</h3><div class="history">${history}</div>
 ${accessCard(l)}
 ${nearbyStaysCard(l)}
 <div class="infoCard"><h3>Fishing information</h3><p>Stocking records are useful planning information, but fishing seasons, limits and exceptions can change. Check Ontario's current regulations before fishing.</p>
 <div class="actionstack">
 <a class="secondaryAction" target="_blank" rel="noopener" href="https://www.ontario.ca/document/ontario-fishing-regulations-summary">Check 2026 Fishing Regulations</a>
 <a class="secondaryAction" target="_blank" rel="noopener" href="https://www.ontario.ca/fishonline">Open Ontario Fish ON-Line</a>
 </div></div>
 <a class="directions" target="_blank" rel="noopener" href="https://www.google.com/maps/dir/?api=1&destination=${l.lat},${l.lon}">Get Directions</a>`;
 wireSpeciesChips();
 detailLakeKey=l.key;
 $("sheet").classList.remove("hidden");$("detailFav").onclick=()=>{toggleFav(l.key);detail(l)};
 showDetailMap(l);

 /* The advisory panel is the only consumer of the 11 MB advisory file, so it
    is fetched here rather than at startup. If it was not already in hand, the
    panel says it is loading; redraw the sheet once it lands so the eating
    advice appears without the person having to close and reopen the lake. */
 if(!advisoriesLoaded){
  const openFor=l.key;
  ensureAdvisories().then(ok=>{
   const sheet=$("sheet");
   if(ok&&sheet&&!sheet.classList.contains("hidden")&&detailLakeKey===openFor)detail(l);
  });
 }
 const st=$("startTrip");if(st)st.onclick=()=>startTrip(l);wireAdvisory(l);wireWeather(l);
 document.querySelectorAll("[data-laketab]").forEach(b=>b.onclick=()=>{
  document.querySelectorAll("[data-laketab]").forEach(x=>x.classList.remove("active"));b.classList.add("active");
  const id=b.dataset.laketab, target=id==="trips"?st:$("lake-"+id);
  if(target)target.scrollIntoView({behavior:"smooth",block:"start"});
 });
}
function saveTrips(){localStorage.setItem("osl-trips",JSON.stringify(trips));persistDurable()}

/* Units. Measurements are stored canonically in centimetres and kilograms and
   converted only for display, so switching the setting reinterprets nothing —
   a fish logged at 45 cm reads 17.7 in and still weighs what it weighed. */
function currentUnits(){return localStorage.getItem("osl-units")==="imperial"?"imperial":"metric"}
function setUnits(u){localStorage.setItem("osl-units",u==="imperial"?"imperial":"metric")}
const CM_PER_IN=2.54, LB_PER_KG=2.20462262;
function lenOut(cm){const n=Number(cm);if(!isFinite(n)||!n)return null;return currentUnits()==="imperial"?n/CM_PER_IN:n}
function lenIn(v){const n=parseFloat(v);if(!isFinite(n)||n<=0)return null;return currentUnits()==="imperial"?n*CM_PER_IN:n}
function wtOut(kg){const n=Number(kg);if(!isFinite(n)||!n)return null;return currentUnits()==="imperial"?n*LB_PER_KG:n}
function wtIn(v){const n=parseFloat(v);if(!isFinite(n)||n<=0)return null;return currentUnits()==="imperial"?n/LB_PER_KG:n}
function lenUnit(){return currentUnits()==="imperial"?t("unitIn"):t("unitCm")}
function wtUnit(){return currentUnits()==="imperial"?t("unitLb"):t("unitKg")}
function num1(n){return n==null?"":(Math.round(n*10)/10).toString()}

/* Trips written before v2j kept length as a free-text string of centimetres
   and had no weight or checklist. Read them forward rather than dropping the
   data — someone's logbook is the least disposable thing in the app. */
function migrateTrips(){
 let touched=false;
 trips.forEach(tr=>{
  if(!Array.isArray(tr.catches))tr.catches=[];
  tr.catches.forEach(c=>{
   if(c.lenCm==null&&c.size!=null&&c.size!==""){const n=parseFloat(c.size);if(isFinite(n)&&n>0){c.lenCm=n;touched=true}}
   if(c.wtKg===undefined){c.wtKg=null;touched=true}
  });
  if(!Array.isArray(tr.checklist)){tr.checklist=defaultChecklist();touched=true}
 });
 if(touched)saveTrips();
}

/* Default gear list. Items are stored by key, not by label, so the list still
   reads correctly after a language switch. Custom items store their own text
   because there is nothing to translate them against. */
const CHECKLIST_KEYS=["licence","rodReel","tackle","lineHooks","bait","netPliers","measure",
 "pfd","firstAid","sunProtection","rainGear","waterFood","phonePower","floatPlan","garbageBag"];
function defaultChecklist(){return CHECKLIST_KEYS.map((k,i)=>({id:i+1,key:k,done:false}))}
function checklistLabel(item){return item.key?t("chk_"+item.key):(item.label||"")}

function tripLake(tr){return lakes.find(l=>l.key===tr.lakeKey)}
function startTrip(l){
 /* Tapping "Start a fishing trip" twice on the same lake used to make two
    trips, and nothing on the lake sheet showed one was already running — so
    a stray tap left an empty duplicate in the logbook forever. If a trip for
    this lake is still open, that is the trip you meant. */
 const open=trips.find(x=>!x.ended&&x.lakeKey===l.key);
 if(open){$("sheet").classList.add("hidden");openTrip(open.id);toast(t("tripAlreadyOpen"));return}
 const trip={id:Date.now(),lakeKey:l.key,lakeName:l.name,lat:l.lat,lon:l.lon,fmz:l.fmz||null,
  started:new Date().toISOString(),ended:null,catches:[],notes:"",checklist:defaultChecklist()};
 trips.unshift(trip);saveTrips();$("sheet").classList.add("hidden");openTrip(trip.id);
}

/* Which tab the trip sheet opens on. Reset per trip rather than kept globally:
   opening a different trip should start at its catches. */
let tripTab="catches", tripTabFor=null;

/* Which catch is being edited, and which is one tap from deletion. Both reset
   when the trip changes or the tab changes: an edit you walked away from
   should not still be open when you come back, and a half-confirmed delete
   should certainly not be. */
let editingCatchId=null, confirmDeleteId=null;
/* Which trip is one tap from deletion, in the sheet and in the list. A trip
   is a season of someone's fishing; it does not go on a single tap. */
let confirmTripId=null;
function clearCatchState(){editingCatchId=null;confirmDeleteId=null}

function deleteTrip(id){
 trips=trips.filter(x=>x.id!==id);
 saveTrips();
 confirmTripId=null;
 if(tripTabFor===id){tripTabFor=null;clearCatchState()}
 $("tripSheet").classList.add("hidden");
 if(currentView==="trips")renderTrips();
 toast(t("tripDeleted"));
}

/* Species the angler could plausibly log here: what the lake is stocked with,
   plus what surveys actually recorded, minus the forage species that are in
   the data but that nobody is catching on a rod. If that comes to nothing the
   picker is not shown at all — a blank dropdown would imply the lake holds no
   fish, which is not what "no data" means. */
function catchSpeciesOptions(tr){
 const l=tripLake(tr);if(!l)return [];
 const set=new Set([...(l.species||[]),...anglerSpecies(l.present||[])]);
 (tr.catches||[]).forEach(c=>{if(c.species)set.add(c.species)});
 return [...set].filter(Boolean).sort((a,b)=>a.localeCompare(b));
}

/* ---- Catches and spots, joined --------------------------------------------
   A logged catch that recorded GPS already knows where the fish was. Turning
   that into a marked spot is the one step the angler would otherwise redo by
   hand on the map, so it is a single button on the catch row. The spot is
   keyed to the trip's own lake, so it lands in that lake's My Spots panel and
   in the master Spots screen at once.
   The link is kept on the catch (c.spotId), so the row can show "Marked" and
   stop offering to make a second copy of the same fish. */
function catchSpotMarkup(c,trip){
 const lk=String(trip.lakeKey||"");
 const existing=c.spotId&&getSpots(lk).some(x=>x.id===c.spotId);
 if(existing)return `<span class="catchSpotDone" style="display:inline;font-size:12px;font-weight:800;color:#27AE60;margin:0">${t("catchMarked")}</span>`;
 return `<button type="button" class="catchSpotBtn" style="width:auto;height:auto;border:1px solid #CBD5E0;background:#fff;border-radius:9px;padding:6px 11px;font:inherit;font-weight:800;font-size:12px;color:#13263C;white-space:nowrap;line-height:1.2;display:inline-block" data-spotfromcatch="${c.id}" data-triplake="${esc(lk)}">${t("saveCatchAsSpot")}</button>`;
}
function viewCatchOnMap(tripId,catchId){
 const trip=trips.find(x=>String(x.id)===String(tripId));if(!trip)return;
 const c=(trip.catches||[]).find(x=>String(x.id)===String(catchId));
 if(!c||!c.location)return;
 const lake=tripLake(trip);if(!lake)return;
 /* Trips live in their own sheet, stacked over the lake sheet. Without this
    line the lake opened invisibly underneath it -- "nothing happens". */
 $("tripSheet").classList.add("hidden");
 /* Open the lake sheet, then steer its map to the fish once the sheet's map
    has had its moment to size itself -- the same settling delay the sheet
    itself uses. A brief ring marks the point so the eye lands right. */
 detail(lake);
 setTimeout(()=>{
  try{
   if(!detailMap)return;
   detailMap.setView([c.location.lat,c.location.lon],15,{animate:true});
   const ring=L.circleMarker([c.location.lat,c.location.lon],
    {radius:14,color:"#E74C3C",weight:3,fillOpacity:0,interactive:false}).addTo(detailMap);
   setTimeout(()=>{try{detailMap.removeLayer(ring)}catch(_){}},4000);
  }catch(_){}
 },350);
}
function spotFromCatch(tripId,catchId){
 const trip=trips.find(x=>String(x.id)===String(tripId));if(!trip)return;
 const c=(trip.catches||[]).find(x=>String(x.id)===String(catchId));
 if(!c||!c.location)return;
 const lk=String(trip.lakeKey||"");
 if(!lk)return;
 const when=new Date(c.time).toLocaleDateString(appLang==="fr"?"fr-CA":"en-CA",{month:"short",day:"numeric"});
 const spots=getSpots(lk);
 if(spots.length>=50){toast(t("spotsFull"));return}
 /* Red and a fish: the colour and symbol a caught fish should carry, so a
    season of catches reads as one category on the map without extra taps. */
 const sp={id:"s"+Date.now(),lat:Number(c.location.lat.toFixed(6)),lon:Number(c.location.lon.toFixed(6)),
           name:(c.species+" \u00b7 "+when).slice(0,50),color:"red",icon:"fish",ts:Date.now()};
 spots.unshift(sp);setSpots(lk,spots);
 const shown=getShownSpots(lk);if(shown.indexOf(sp.id)===-1)shown.push(sp.id);
 setShownSpots(lk,shown);
 c.spotId=sp.id;saveTrips();
 redrawSpots();
 openTrip(trip.id);
 toast(t("catchMarkedToast"));
}

function catchRowMarkup(c,active,trip){
 const len=lenOut(c.lenCm), wt=wtOut(c.wtKg);
 const bits=[];
 if(len!=null)bits.push(`${num1(len)} ${lenUnit()}`);
 if(wt!=null)bits.push(`${num1(wt)} ${wtUnit()}`);
 const disp=c.disposition==="Kept"?t("kept"):t("released");
 const when=new Date(c.time).toLocaleTimeString(appLang==="fr"?"fr-CA":"en-CA",{hour:"numeric",minute:"2-digit"});
 /* Deleting is two taps, not one. This gets used with cold wet hands in a
    moving boat, and a catch log is not something you can get back. */
 const confirming=confirmDeleteId===c.id;
 return `<div class="catchrow${confirming?" confirming":""}${editingCatchId===c.id?" editing":""}"><div><b>${esc(c.species)}</b>
  <span>${when} • ${esc(disp)}</span>
  ${bits.length?`<span>${esc(bits.join(" • "))}</span>`:""}
  ${c.notes?`<span class="catchNote">${esc(c.notes)}</span>`:""}
  ${c.edited?`<span class="catchNote">${t("editedMark")}</span>`:""}
  ${c.disposition==="Kept"?`<span>🍽️ ${t("checkEatingAdvice")}</span>`:""}
  ${confirming?`<div class="confirmRow"><span class="confirmAsk">${t("deleteCatchAsk")}</span>
    <button data-confirmdel="${c.id}" class="dangerBtn" style="width:auto;height:auto;border:1px solid #E4B6B0;background:#C0392B;border-radius:9px;padding:7px 14px;font:inherit;font-weight:800;font-size:13px;color:#fff;white-space:nowrap;line-height:1.2">${t("delete")}</button>
    <button data-canceldel="${c.id}" class="secondaryAction" style="width:auto;height:auto;border:1px solid #CBD5E0;background:#fff;border-radius:9px;padding:7px 14px;font:inherit;font-weight:800;font-size:13px;color:#13263C;white-space:nowrap;line-height:1.2">${t("cancel")}</button></div>`:""}</div>
  ${c.location&&trip?`<div class="catchSpotRow" style="display:flex;gap:8px;align-items:center;flex-wrap:wrap;margin-top:7px"><button type="button" class="catchSpotBtn" style="width:auto;height:auto;border:1px solid #CBD5E0;background:#fff;border-radius:9px;padding:6px 11px;font:inherit;font-weight:800;font-size:12px;color:#13263C;white-space:nowrap;line-height:1.2;display:inline-block" data-viewcatch="${c.id}">${t("viewOnMap")}</button>${catchSpotMarkup(c,trip)}</div>`:`<div class="catchSpotRow" style="display:flex;gap:8px;align-items:center;flex-wrap:wrap;margin-top:7px"><span class="catchNoLoc" style="display:inline;font-size:11.5px;color:#5B6B7C;margin:0">${t("noCatchLocation")}</span></div>`}
  ${active&&!confirming?`<div class="rowActions">
   <button data-editcatch="${c.id}" aria-label="${t("editCatch")}" title="${t("editCatch")}">✎</button>
   <button data-delcatch="${c.id}" aria-label="${t("deleteCatch")}" title="${t("deleteCatch")}">×</button>
  </div>`:""}</div>`;
}

function catchFormMarkup(tr){
 /* One form, two jobs. Editing prefills it and retitles the button rather
    than opening a second form somewhere else, so there is only ever one place
    in this sheet where a fish gets described. */
 const editing=editingCatchId?tr.catches.find(c=>c.id===editingCatchId):null;
 const opts=catchSpeciesOptions(tr);
 const known=editing&&opts.includes(editing.species);
 const selVal=editing?(known?editing.species:"__other"):"";
 const otherVal=editing&&!known?editing.species:"";
 const picker=opts.length
  ? `<select id="catchSpecies" aria-label="${t("catchSpeciesLabel")}">
      <option value=""${selVal===""?" selected":""}>${t("choooseSpecies")}</option>
      ${opts.map(s=>`<option value="${esc(s)}"${selVal===s?" selected":""}>${esc(s)}</option>`).join("")}
      <option value="__other"${selVal==="__other"?" selected":""}>${t("otherSpecies")}</option>
     </select>
     <input id="catchSpeciesOther"${selVal==="__other"?"":' class="hidden"'} value="${esc(otherVal)}" placeholder="${t("catchSpeciesPh")}" aria-label="${t("catchSpeciesLabel")}">`
  : `<p class="setNote">${t("noSpeciesListNote")}</p>
     <input id="catchSpeciesOther" value="${esc(editing?editing.species:"")}" placeholder="${t("catchSpeciesPh")}" aria-label="${t("catchSpeciesLabel")}">`;
 const lenV=editing?num1(lenOut(editing.lenCm)):"";
 const wtV=editing?num1(wtOut(editing.wtKg)):"";
 const kept=editing&&editing.disposition==="Kept";
 return `<div class="catchform${editing?" editingForm":""}">
  ${editing?`<div class="formHead"><b>${t("editingCatch")}</b><button id="cancelEdit" class="secondaryAction">${t("cancel")}</button></div>`:""}
  ${picker}
  <div class="formrow">
   <label class="fieldLabel">${t("length")} (${lenUnit()})<input id="catchSize" type="number" inputmode="decimal" min="0" step="0.1" value="${lenV}" placeholder="${lenUnit()}"></label>
   <label class="fieldLabel">${t("weight")} (${wtUnit()})<input id="catchWeight" type="number" inputmode="decimal" min="0" step="0.01" value="${wtV}" placeholder="${wtUnit()}"></label>
  </div>
  <select id="catchDisposition" aria-label="${t("disposition")}">
   <option value="Released"${kept?"":" selected"}>${t("released")}</option>
   <option value="Kept"${kept?" selected":""}>${t("kept")}</option>
  </select>
  <textarea id="catchNotes" placeholder="${t("catchNotesPh")}">${esc(editing&&editing.notes?editing.notes:"")}</textarea>
  ${editing?"":`<label class="checkline"><input id="catchLocation" type="checkbox"${localStorage.getItem("osl-catch-gps")==="0"?"":" checked"}> ${t("saveCatchLocation")}</label>`}
  <button id="addCatch">${editing?t("saveCatch"):t("addCatch")}</button>
 </div>`;
}

function checklistMarkup(tr){
 const list=tr.checklist||[];
 const done=list.filter(i=>i.done).length;
 /* An ended trip locked its catch log and made its notes read-only, but left
    the checklist fully editable — you could still tick "bring the net" for a
    trip you got home from. Locked now, for the same reason and in the same
    way as the rest of the sheet. */
 const locked=!!tr.ended;
 return `<div class="checklistHead"><h3>${t("checklist")}</h3><span class="pill">${done}/${list.length}</span></div>
 <p class="setNote">${t("checklistNote")}</p>
 <div class="checklist">${list.map(i=>`<label class="checkItem${i.done?" done":""}">
   <input type="checkbox" data-chk="${i.id}"${i.done?" checked":""}${locked?" disabled":""}>
   <span>${esc(checklistLabel(i))}</span>
   ${i.key||locked?"":`<button data-delchk="${i.id}" aria-label="${t("removeItem")}">×</button>`}
  </label>`).join("")}</div>
 ${locked?`<p class="setNote">${t("checklistLocked")}</p>`:`<div class="formrow addItemRow">
  <input id="newChkItem" placeholder="${t("addItemPh")}" aria-label="${t("addItemPh")}">
  <button id="addChkItem" class="secondaryAction">${t("addItem")}</button>
 </div>
 <button id="resetChk" class="secondaryAction wide">${t("uncheckAll")}</button>`}`;
}

function openTrip(id){
 const trip=trips.find(x=>x.id===id);if(!trip)return;
 if(!Array.isArray(trip.checklist))trip.checklist=defaultChecklist();
 const l=tripLake(trip),active=!trip.ended;
 if(tripTabFor!==id){tripTab="catches";tripTabFor=id;clearCatchState();confirmTripId=null}
 const tab=tripTab;

 const head=`<h2>🎣 ${esc(trip.lakeName)}</h2>
 <div class="tripmeta">${new Date(trip.started).toLocaleString(appLang==="fr"?"fr-CA":"en-CA")}${trip.fmz?` • ${t("fmz")} ${trip.fmz}`:""} • ${active?t("activeTrip"):t("completedTrip")}</div>
 ${l?`<div class="lakeSnapshot"><b>${t("lakeSnapshot")}</b>
   ${l.stocked&&(l.species||[]).length
     ?`<span>${t("stockedWith")}: ${esc(l.species.join(", "))}</span>
       <span>${t("latestStocking")}: ${esc(l.latestYear||"—")}</span>`
     :`<span>${t("notStocked")}</span>`}
   ${l.observedSpecies&&l.observedSpecies.length?`<span>${t("observed")}: ${esc(l.observedSpecies.map(s=>s.species).join(", "))}</span>`:""}</div>`:""}
 ${trip.fmz?`<a class="zoneAction" target="_blank" rel="noopener" href="${REGS_BASE}${trip.fmz}">${t("checkFmzRegs")} ${trip.fmz}</a>`:""}
 <div class="tripTabs" role="tablist" aria-label="${t("tripSections")}">
  <button type="button" role="tab" data-triptab="catches" class="${tab==="catches"?"on":""}">${t("catchLog")} (${trip.catches.length})</button>
  <button type="button" role="tab" data-triptab="checklist" class="${tab==="checklist"?"on":""}">${t("checklist")}</button>
  <button type="button" role="tab" data-triptab="notes" class="${tab==="notes"?"on":""}">${t("notes")}</button>
 </div>`;

 let body="";
 if(tab==="catches"){
  /* Units live in Settings too, but the moment you want them is standing over
     a fish with a tape in your hand, not three sheets away. Same setting,
     second door. */
  const u=currentUnits();
  body=`<div class="segmented unitToggle" role="group" aria-label="${t("units")}">
    <button type="button" data-tripunits="metric" class="${u==="metric"?"on":""}">${t("unitCm")} / ${t("unitKg")}</button>
    <button type="button" data-tripunits="imperial" class="${u==="imperial"?"on":""}">${t("unitIn")} / ${t("unitLb")}</button>
   </div>
   <div class="catchlist">${trip.catches.length?trip.catches.map(c=>catchRowMarkup(c,active,trip)).join(""):`<div class="historynote">${t("noCatchesYet")}</div>`}</div>
   ${active?catchFormMarkup(trip):`<p class="setNote">${t("tripEndedNote")}</p>`}`;
 }else if(tab==="checklist"){
  body=checklistMarkup(trip);
 }else{
  body=`<h3>${t("notes")}</h3>
   <textarea id="tripNotes" class="tripnotes" placeholder="${t("tripNotesPh")}"${active?"":" readonly"}>${esc(trip.notes||"")}</textarea>
   ${active?`<button id="saveTripNotes" class="secondaryAction wide">${t("saveTripNotes")}</button>`:""}`;
 }

 const confirmingTrip=confirmTripId===id;
 const foot=`${active?`<button id="endTrip" class="endTrip">${t("endTrip")}</button>`:""}
  ${confirmingTrip
   ?`<div class="confirmRow tripConfirm"><span class="confirmAsk">${t("deleteTripAsk")}</span>
      <button id="confirmTripDel" class="dangerBtn">${t("delete")}</button>
      <button id="cancelTripDel" class="secondaryAction">${t("cancel")}</button></div>`
   :`<button id="deleteTrip" class="deleteTrip">${t("deleteTrip")}</button>`}`;
 $("tripDetail").innerHTML=head+body+foot;
 $("tripSheet").classList.remove("hidden");

 document.querySelectorAll("[data-triptab]").forEach(b=>b.onclick=()=>{tripTab=b.dataset.triptab;clearCatchState();openTrip(id)});

 if(tab==="catches"){
  document.querySelectorAll("[data-tripunits]").forEach(b=>b.onclick=()=>{setUnits(b.dataset.tripunits);openTrip(id)});
  // First tap arms the delete, second one commits it.
  document.querySelectorAll("[data-delcatch]").forEach(b=>b.onclick=()=>{
   confirmDeleteId=Number(b.dataset.delcatch);editingCatchId=null;openTrip(id);
  });
  document.querySelectorAll("[data-canceldel]").forEach(b=>b.onclick=()=>{confirmDeleteId=null;openTrip(id)});
  document.querySelectorAll("[data-confirmdel]").forEach(b=>b.onclick=()=>{
   trip.catches=trip.catches.filter(c=>c.id!==Number(b.dataset.confirmdel));
   confirmDeleteId=null;saveTrips();openTrip(id);toast(t("catchDeleted"));
  });
  document.querySelectorAll("[data-viewcatch]").forEach(b=>b.onclick=()=>{
   viewCatchOnMap(id,b.dataset.viewcatch);
  });
  document.querySelectorAll("[data-spotfromcatch]").forEach(b=>b.onclick=()=>{
   spotFromCatch(id,b.dataset.spotfromcatch);
  });
  document.querySelectorAll("[data-editcatch]").forEach(b=>b.onclick=()=>{
   editingCatchId=Number(b.dataset.editcatch);confirmDeleteId=null;openTrip(id);
   const f=$("catchSpecies")||$("catchSpeciesOther");if(f)f.scrollIntoView({behavior:"smooth",block:"center"});
  });
  const ce=$("cancelEdit");if(ce)ce.onclick=()=>{editingCatchId=null;openTrip(id)};
  const sel=$("catchSpecies"),other=$("catchSpeciesOther");
  if(sel&&other)sel.onchange=()=>{
   other.classList.toggle("hidden",sel.value!=="__other");
   if(sel.value==="__other")other.focus();
  };
  const ac=$("addCatch");if(ac)ac.onclick=()=>addCatch(id);
 }else if(tab==="checklist"){
  document.querySelectorAll("[data-chk]").forEach(b=>b.onchange=()=>{
   const item=trip.checklist.find(i=>i.id===Number(b.dataset.chk));
   if(item){item.done=b.checked;saveTrips();openTrip(id)}
  });
  document.querySelectorAll("[data-delchk]").forEach(b=>b.onclick=e=>{
   e.preventDefault();
   trip.checklist=trip.checklist.filter(i=>i.id!==Number(b.dataset.delchk));saveTrips();openTrip(id);
  });
  const add=$("addChkItem"),inp=$("newChkItem");
  const addItem=()=>{
   const label=(inp.value||"").trim();if(!label)return;
   const nextId=trip.checklist.reduce((m,i)=>Math.max(m,i.id),0)+1;
   trip.checklist.push({id:nextId,label,done:false});saveTrips();openTrip(id);
  };
  if(add)add.onclick=addItem;
  if(inp)inp.onkeydown=e=>{if(e.key==="Enter"){e.preventDefault();addItem()}};
  const rc=$("resetChk");if(rc)rc.onclick=()=>{trip.checklist.forEach(i=>i.done=false);saveTrips();openTrip(id)};
 }else{
  const st=$("saveTripNotes");
  if(st)st.onclick=()=>{trip.notes=$("tripNotes").value;saveTrips();toast(t("notesSaved"))};
 }

 const dt=$("deleteTrip");if(dt)dt.onclick=()=>{confirmTripId=id;openTrip(id)};
 const ctd=$("cancelTripDel");if(ctd)ctd.onclick=()=>{confirmTripId=null;openTrip(id)};
 const cfd=$("confirmTripDel");if(cfd)cfd.onclick=()=>deleteTrip(id);

 const et=$("endTrip");
 if(et)et.onclick=()=>{
  const ta=$("tripNotes");if(ta)trip.notes=ta.value;
  trip.ended=new Date().toISOString();saveTrips();openTrip(id);
 };
}

function addCatch(id){
 const trip=trips.find(x=>x.id===id);if(!trip)return;
 const sel=$("catchSpecies"),other=$("catchSpeciesOther");
 let species="";
 if(sel&&sel.value&&sel.value!=="__other")species=sel.value;
 else if(other)species=(other.value||"").trim();
 if(!species)return toast(t("enterSpecies"));
 const lenCm=lenIn($("catchSize").value), wtKg=wtIn($("catchWeight").value);
 const disposition=$("catchDisposition").value;
 const notes=($("catchNotes").value||"").trim();

 /* Editing keeps the original id, timestamp and saved location: it is the
    same fish, corrected. Only the description changes, plus a marker so the
    log does not quietly claim to be what was first written down. */
 if(editingCatchId){
  const c=trip.catches.find(x=>x.id===editingCatchId);
  if(c){
   Object.assign(c,{species,lenCm,wtKg,disposition,notes,edited:new Date().toISOString()});
   saveTrips();
  }
  editingCatchId=null;openTrip(id);toast(t("catchUpdated"));
  return;
 }

 const finish=(loc)=>{
  trip.catches.unshift({id:Date.now(),species,lenCm,wtKg,disposition,notes,
   time:new Date().toISOString(),location:loc});
  saveTrips();openTrip(id);
 };
 const gps=$("catchLocation");
 if(gps)try{localStorage.setItem("osl-catch-gps",gps.checked?"1":"0")}catch(_){}
 if(gps&&gps.checked&&navigator.geolocation)
  navigator.geolocation.getCurrentPosition(p=>finish({lat:p.coords.latitude,lon:p.coords.longitude}),()=>finish(null),{timeout:8000});
 else finish(null);
}

function renderTrips(){
 $("listTitle").textContent=t("myFishingTrips");$("count").textContent=`${trips.length} ${t("tripsCount")}`;markerLayer.clearLayers();
 $("results").innerHTML=trips.length?trips.map(tr=>{
  const done=(tr.checklist||[]).filter(i=>i.done).length,total=(tr.checklist||[]).length;
  return `<article class="record tripcard" data-trip="${tr.id}"><div class="topline"><div>
   <h4>${esc(tr.lakeName)}</h4>
   <div class="species">${tr.ended?t("completedTrip"):t("activeTrip")}</div></div>
   <span class="pill">${tr.catches.length} ${tr.catches.length===1?t("catchOne"):t("catchMany")}</span></div>
   <div class="meta"><span>🎣 ${new Date(tr.started).toLocaleDateString(appLang==="fr"?"fr-CA":"en-CA")}</span>
   ${tr.fmz?`<span>🗺️ ${t("fmz")} ${tr.fmz}</span>`:""}
   ${total&&!tr.ended?`<span>✅ ${done}/${total}</span>`:""}</div>
   ${confirmTripId===tr.id
    ?`<div class="confirmRow"><span class="confirmAsk">${t("deleteTripAsk")}</span>
       <button data-tripdelyes="${tr.id}" class="dangerBtn">${t("delete")}</button>
       <button data-tripdelno="${tr.id}" class="secondaryAction">${t("cancel")}</button></div>`
    :`<button data-tripdel="${tr.id}" class="deleteTripCard">${t("deleteTrip")}</button>`}
   </article>`;
 }).join(""):`<div class="record empty">${t("noTripsYet")}</div>`;
 /* The card opens the trip, so every control inside it has to stop the click
    reaching the card — otherwise arming a delete would open the sheet on top
    of the question it just asked. */
 document.querySelectorAll("[data-trip]").forEach(e=>e.onclick=(ev)=>{
  if(ev.target.closest("[data-tripdel],[data-tripdelyes],[data-tripdelno]"))return;
  openTrip(Number(e.dataset.trip));
 });
 document.querySelectorAll("[data-tripdel]").forEach(b=>b.onclick=(ev)=>{
  ev.stopPropagation();confirmTripId=Number(b.dataset.tripdel);renderTrips();
 });
 document.querySelectorAll("[data-tripdelno]").forEach(b=>b.onclick=(ev)=>{
  ev.stopPropagation();confirmTripId=null;renderTrips();
 });
 document.querySelectorAll("[data-tripdelyes]").forEach(b=>b.onclick=(ev)=>{
  ev.stopPropagation();deleteTrip(Number(b.dataset.tripdelyes));
 });
}

function locate(after){
 const nativeLoc=nativeBridge("requestLocation");
 if(!nativeLoc&&!navigator.geolocation)return toast("This device cannot share a location. Use the search box to find a lake by name.");
 $("count").textContent=t("findingLocation");

 if(nativeLoc){
  window.__nativeLocationResult=r=>{
   window.__nativeLocationResult=null;
   if(r&&r.ok){rememberLocation(r.lat,r.lon);return onLocated({coords:{latitude:r.lat,longitude:r.lon}})}
   onLocateFailed(r&&r.reason==="denied");
  };
  nativeLoc.postMessage({});
  return;
 }

 navigator.geolocation.getCurrentPosition(onLocated,()=>onLocateFailed(true),{enableHighAccuracy:true,timeout:10000});

 function onLocated(p){
  userLoc=[p.coords.latitude,p.coords.longitude];rememberLocation(userLoc[0],userLoc[1]);
  if(mapAvailable){
   if(userMarker)map.removeLayer(userMarker);
   userMarker=L.marker(userLoc).addTo(map).bindPopup("Your location");
   map.setView(userLoc,8);
  }
  if(after)after();else apply();
 }
 function onLocateFailed(denied){
  // Falling back rather than dead-ending. apply() ignores the distance filter
  // when there is no position, so this runs the search province-wide instead
  // of leaving the person looking at a stale screen and a toast.
  toast(denied?t("locationOffFallback"):t("locationUnavailableFallback"));
  apply();
 }
}
function lakeQuantityFor(l,sp,yr){
 return l.records.filter(r=>(!sp||r.Species===sp)&&(!yr||String(r.Stocking_Year)===String(yr))).reduce((n,r)=>n+(Number(r.Number_of_Fish_Stocked)||0),0);
}

function windDirection(deg){
 const dirs=["N","NE","E","SE","S","SW","W","NW"];return dirs[Math.round((Number(deg)||0)/45)%8];
}
function fishingConditionsCard(l){
 return `<div id="lake-weather" class="tabAnchor"></div><div class="infoCard weatherCard"><h3>🌤️ ${t("weatherTitle")}</h3>
 <p>Check current Environment Canada conditions and active weather alerts before heading out. Wind and storms can make lake conditions unsafe even when the fishing looks good.</p>
 <div id="weatherAlertBox"><span class="weatherLoading">Checking Environment Canada alerts…</span></div>
 <div class="weatherActions"><a target="_blank" rel="noopener" href="${ECCC_WEATHER_HOME}">Environment Canada Weather</a><button id="refreshAlerts">${t("refreshAlerts")}</button></div>
 <p class="microcopy">Manitoba Stocked Lakes does not claim to predict whether fish will bite. Weather is trip-planning information only.</p></div>`;
}
async function wireWeather(l){
 const box=$("weatherAlertBox");if(!box)return;
 const load=async()=>{
  box.innerHTML='<span class="weatherLoading">Checking Environment Canada alerts…</span>';
  const alerts=await weatherAlertsForLake(l);
  if(!alerts.length){box.innerHTML='<div class="weatherOK">✓ ${t("noAlert")}</div>';return}
  box.innerHTML=alerts.slice(0,5).map(f=>{const p=f.properties||{};return `<div class="weatherAlert"><b>⚠ ${esc(p.alert_name_en||p.alert_short_name_en||t("weatherAlert"))}</b><span>${esc(p.feature_name_en||p.province||t("lakeArea"))}</span>${p.alert_type?`<span>${esc(p.alert_type)}</span>`:""}</div>`}).join("");
 };
 await load();const b=$("refreshAlerts");if(b)b.onclick=load;
}

function lakeOverviewTabs(l){
 const sections=[
  ["overview",t("overview")],["weather",t("weather")],["stocking",t("stocking")],["rules",t("regulations")],["access",t("access")],
  ["species",t("fishSpecies")],["depth",t("depth")],["eating",t("eatingAdvice")],["trips",t("trips")]
 ];
 return `<div class="lakeTabs">${sections.map((s,i)=>`<button class="${i===0?"active":""}" data-laketab="${s[0]}">${s[1]}</button>`).join("")}</div>`;
}
function recentNearMe(){
 const run=()=>{
  currentView="recentnear";searched=true;townOrigin=null;$("search").value="";$("species").value="";$("year").value="";$("radius").value="100";
  commitFilters();
  shown=[...lakes].filter(l=>distance(userLoc[0],userLoc[1],l.lat,l.lon)<=100)
    .sort((a,b)=>b.latestYear-a.latestYear || distance(userLoc[0],userLoc[1],a.lat,a.lon)-distance(userLoc[0],userLoc[1],b.lat,b.lon));
  $("listTitle").textContent=t("recentWithin100");
  render();
 };
 if(!userLoc)locate(run);else run();
}
function setView(v){
 currentView=v;
 document.querySelectorAll(".tabs button").forEach(b=>{
  const on=b.dataset.view===v;
  b.classList.toggle("active",on);b.setAttribute("aria-selected",String(on));
 });
 const active=document.querySelector(".tabs button.active");
 if(active&&active.scrollIntoView)active.scrollIntoView({block:"nearest",inline:"nearest",behavior:"smooth"});

 // Every section declares which views it belongs to. Before this, only the
 // resources panel was hidden, so Explore's hero, stats and shortcuts sat
 // underneath whichever tab you picked.
 document.querySelectorAll("[data-show]").forEach(el=>{
  el.hidden=!el.dataset.show.split(" ").includes(v);
 });

 window.scrollTo({top:0,behavior:"smooth"});

 if(v==="resources")return;
 if(v==="spots")return renderAllSpots();
 if(v==="trips")return renderTrips();
 apply();
}

function syncTabs(){
 // "Recent Near Me" is a shortcut on Explore, not a view of its own, so it
 // reports back as Explore rather than as a tab that no longer exists.
 const map={recentnear:"explore",findfish:"explore",near:"explore"};
 setView(map[currentView]||currentView);
}
const fs2=$("favSearch");if(fs2)fs2.oninput=()=>{clearTimeout(fs2._t);fs2._t=setTimeout(apply,200)};
/* Full-screen map. A depth chart is the one thing in this app worth the whole
   screen — contour labels crowd each other in a card. The button swaps to a
   close cross while expanded, Escape backs out on a keyboard, and Leaflet is
   told to re-measure after the CSS has applied or it draws into the old,
   smaller box and leaves grey where the new edges are. */
(function(){
 const btn=$("mapExpand"),card=document.querySelector(".mapcard");
 if(!btn||!card)return;
 const OPEN=EXPAND_ICON,SHUT=COLLAPSE_ICON;
 function setFull(on){
  card.classList.toggle("isFull",on);
  btn.innerHTML=on?SHUT:OPEN;
  btn.setAttribute("aria-label",on?t("closeMap"):t("expandMap"));
  document.body.style.overflow=on?"hidden":"";
  if(mapAvailable&&map)setTimeout(()=>{try{map.invalidateSize()}catch(e){}},80);
 }
 btn.onclick=()=>setFull(!card.classList.contains("isFull"));
 document.addEventListener("keydown",e=>{
  if(e.key==="Escape"&&card.classList.contains("isFull"))setFull(false);
 });
})();
$("showFMZ").onchange=()=>{$("showFMZ").checked?loadFMZ(true):renderFMZ()};
/* Contours follow the view when Depth is selected. Debounced: a pinch-zoom
   fires moveend repeatedly and each one is a query against a 239k-line layer. */
if(mapAvailable&&map&&map.on){
 let mt=null;
 map.on("moveend zoomend",()=>{clearTimeout(mt);mt=setTimeout(refreshMainContours,400)});
}

$("searchBtn").onclick=runSearch;

/* The fifth way to search. Near Me carried "Use my location" until v2l folded
   it into Explore, and the control left with the tab — so after a town search
   there was no way back to your own position except pressing Clear, which
   also threw away the species and the distance. This clears only the centre.
   The search box is emptied because a town name left sitting in it would
   re-establish the town as the centre on the very next search. */
const gtm=$("goToMapBtn");
if(gtm)gtm.onclick=()=>{
 /* Jump straight to the map card. It lives a long scroll below the hero, and
    "where is the map" was a real question — this answers it in one tap. */
 const mc=document.querySelector(".mapcard");
 if(mc)mc.scrollIntoView({behavior:"smooth",block:"start"});
};
const uml=$("useMyLocation");
if(uml)uml.onclick=()=>{
 townOrigin=null;
 const box=$("search");if(box)box.value="";
 commitFilters();
 if(!userLoc)locate(runSearch);else runSearch();
};
$("search").onkeydown=e=>{if(e.key==="Enter"){e.preventDefault();$("search").blur();runSearch()}};
$("search").oninput=markFiltersDirty;
$("species").onchange=markFiltersDirty;
$("year").onchange=markFiltersDirty;
$("radius").onchange=markFiltersDirty;
document.addEventListener("click",e=>{
 if(e.target.closest("#distancePrompt"))locate(apply);
 /* The lake sheet's Map/Topo/Depth tabs. Delegated because detail() rebuilds
    the sheet's HTML on every open, which would orphan a per-button handler. */
 const db=e.target.closest(".detailBaseSwitch button");
 if(db)setDetailBasemap(db.dataset.dbase);
 /* Save this lake's map tiles for offline use, or give them back. */
 const ob=e.target.closest("#offlineBtn");
 if(ob&&detailLakeObj)requestOffline(detailLakeObj,!!savedAreas[areaKeyFor(detailLakeObj)]);
 /* The lake sheet's fullscreen button — same treatment as the main map's,
    delegated for the same rebuild reason. The contours are the thing that
    earns the whole screen, and they live here more than anywhere. */
 const ex=e.target.closest(".detailMapExpand");
 if(ex)setDetailFull(!ex.closest(".detailMapBlock").classList.contains("isFull"));
});
function setDetailFull(on){
 const block=document.querySelector(".detailMapBlock"),
       btn=document.querySelector(".detailMapExpand");
 if(!block||!btn)return;
 block.classList.toggle("isFull",on);
 btn.innerHTML=on?COLLAPSE_ICON:EXPAND_ICON;
 btn.setAttribute("aria-label",on?t("closeMap"):t("expandMap"));
 if(detailMap)setTimeout(()=>{try{detailMap.invalidateSize()}catch(e){}},80);
}
document.addEventListener("keydown",e=>{
 if(e.key!=="Escape")return;
 const block=document.querySelector(".detailMapBlock.isFull");
 if(block)setDetailFull(false);
});
document.querySelectorAll(".baseSwitch button").forEach(b=>b.onclick=()=>setBasemap(b.dataset.base));
setBasemap(baseKey);
const so=$("sort");if(so)so.onchange=markFiltersDirty;
// The access filter needs the access-point file loaded before it can mean
// anything, so asking for it fetches it rather than silently matching nothing.
$("clearFilters").onclick=()=>{townOrigin=null;$("search").value="";$("species").value="";$("year").value="";$("radius").value=DEFAULT_RADIUS;const so=$("sort");if(so)so.value=DEFAULT_SORT;clearFiltersDirty();commitFilters();searched=false;currentView="explore";forgetLastSearch();apply();syncClearButton()};


$("recentNearBtn").onclick=recentNearMe;
$("recentBtn").onclick=()=>{townOrigin=null;$("search").value="";$("species").value="";$("year").value="";$("radius").value="";commitFilters();searched=true;currentView="explore";shown=[...lakes].sort((a,b)=>b.latestYear-a.latestYear);render()};
document.querySelectorAll(".tabs button").forEach(b=>b.onclick=()=>setView(b.dataset.view));
/* v4m — Trevor: with a lake page open you could still scroll the lake list
   underneath it. Every sheet opens and closes by toggling the "hidden" class
   from a dozen call sites, so rather than patch each one, watch the class:
   whenever any sheet is visible the body is frozen in place (position:fixed
   at the current scroll offset — the only lock iOS respects), and when the
   last sheet closes the page is put back exactly where it was. */
let sheetScrollY=0;
function syncSheetLock(){
 const open=[...document.querySelectorAll(".sheet")].some(s=>!s.classList.contains("hidden"));
 const locked=document.body.classList.contains("sheetOpen");
 if(open&&!locked){
  sheetScrollY=window.scrollY||document.documentElement.scrollTop||0;
  document.body.style.top=-sheetScrollY+"px";
  document.body.classList.add("sheetOpen");
 }else if(!open&&locked){
  document.body.classList.remove("sheetOpen");
  document.body.style.top="";
  window.scrollTo(0,sheetScrollY);
 }
}
{
 const mo=new MutationObserver(syncSheetLock);
 document.querySelectorAll(".sheet").forEach(s=>mo.observe(s,{attributes:true,attributeFilter:["class"]}));
 syncSheetLock();
}
$("closeSheet").onclick=()=>$("sheet").classList.add("hidden");
$("closeTrip").onclick=()=>$("tripSheet").classList.add("hidden");$("tripSheet").onclick=e=>{if(e.target===$("tripSheet"))$("tripSheet").classList.add("hidden")};$("sheet").onclick=e=>{if(e.target===$("sheet"))$("sheet").classList.add("hidden")};
load();
/* Durable-store restore runs beside load(), not inside it: the lake database
   and the person's own data are independent, and neither should wait for the
   other. If the Documents copy was newer, whatever is on screen re-renders. */
restoreDurable().then(changed=>{if(changed){renderTrips();apply()}});
syncClearButton();   // a restored search should arrive with Clear already armed
if("serviceWorker"in navigator&&location.protocol.startsWith("http"))navigator.serviceWorker.register("sw.js").catch(()=>{});



function toast(msg){
 let el=document.getElementById("toast");
 if(!el){el=document.createElement("div");el.id="toast";el.setAttribute("role","status");document.body.appendChild(el)}
 el.textContent=msg;el.classList.add("show");
 clearTimeout(toast._t);toast._t=setTimeout(()=>el.classList.remove("show"),4200);
}

const nativeBridge=k=>window.webkit&&window.webkit.messageHandlers&&window.webkit.messageHandlers[k];

/* ---------------------------------------------------------------------------
   Durable storage.

   Trips, catches, saved lakes and recents live in localStorage, and inside a
   WKWebView iOS treats that as WEBSITE data: it can be purged under storage
   pressure, and Settings > Clear Website Data wipes it silently. A season of
   catch logs is not something to keep in evictable storage.

   In the native app the real copy is an ordinary JSON file in the app's own
   Documents folder, which iOS never evicts and which device backups include:

     reads  — startup fetches __storage/osl-user.json. The custom scheme
              handler serves it from Documents; on the plain web there is
              nothing at that path, the fetch 404s, and localStorage remains
              the store, exactly as before.
     writes — every save still hits localStorage first (instant, and the web
              version's only store), then hands the same payload to the
              persistStore native bridge, which writes the file atomically.
              Writes cannot go through the custom scheme: WKWebView strips
              request bodies on custom-scheme fetches, a long-standing WebKit
              quirk, so this half rides a WKScriptMessageHandler like the
              location bridge does.

   Newer copy wins on startup, decided by a savedAt stamp kept in both places
   — covers a restored device, a cleared web view, and the first run after
   this update (migration is just "the file does not exist yet, write it").

   Language, units and text size stay plain localStorage on purpose: losing
   them costs two taps, and rebuilding them here would be complexity spent on
   nothing. */
const DURABLE_KEYS=["osl-trips","osl-favorites","osl-recent"];
const SAVED_AT_KEY="osl-saved-at";

function persistDurable(){
 const stamp=Date.now();
 try{localStorage.setItem(SAVED_AT_KEY,String(stamp))}catch(e){}
 const br=nativeBridge("persistStore");
 if(!br)return;
 const data={};
 for(const k of DURABLE_KEYS){const v=localStorage.getItem(k);if(v!=null)data[k]=v}
 try{br.postMessage(JSON.stringify({savedAt:stamp,data}))}catch(e){}
}

/* Adopt the Documents copy when it is the newer one, then re-init the
   in-memory structures the top of this file already built from localStorage.
   Returns true when anything changed so the caller can re-render. */
async function restoreDurable(){
 let file=null;
 try{
  const r=await fetch("__storage/osl-user.json",{cache:"no-store"});
  if(r.ok)file=await r.json();
 }catch(e){ /* the plain web: nothing at that path, and nothing to do */ }
 const localAt=Number(localStorage.getItem(SAVED_AT_KEY)||0);
 let changed=false;
 if(file&&file.data&&Number(file.savedAt||0)>localAt){
  for(const k of DURABLE_KEYS){
   if(typeof file.data[k]==="string"&&file.data[k]!==localStorage.getItem(k)){
    try{localStorage.setItem(k,file.data[k]);changed=true}catch(e){}
   }
  }
  if(changed){
   try{localStorage.setItem(SAVED_AT_KEY,String(file.savedAt))}catch(e){}
   trips=JSON.parse(localStorage.getItem("osl-trips")||"[]");
   favoriteKeys=new Set(JSON.parse(localStorage.getItem("osl-favorites")||"[]"));
   recentLakes=JSON.parse(localStorage.getItem("osl-recent")||"[]");
  }
 }
 // First run after this update, or a fresh install restored from an iCloud
 // device backup: make sure the Documents file exists from here on. On the
 // web this is only the stamp write.
 persistDurable();
 // The web fallback can at least ask Safari not to evict. Best effort;
 // browsers that do not support it ignore it.
 if(!nativeBridge("persistStore")&&navigator.storage&&navigator.storage.persist)
  navigator.storage.persist().catch(()=>{});
 return changed;
}

window.__nativeBackupFailed=()=>toast("The backup could not be saved. Try again, or free up some space on the device.");

function exportMyData(){
 const payload={app:"Manitoba Stocked Lakes",version:APP_VERSION,exported:new Date().toISOString(),
  trips:JSON.parse(localStorage.getItem("osl-trips")||"[]"),
  favorites:JSON.parse(localStorage.getItem("osl-favorites")||"[]"),
  recent:JSON.parse(localStorage.getItem("osl-recent")||"[]")};
 const json=JSON.stringify(payload,null,2);
 const filename="manitoba-stocked-lakes-backup.json";

 // In the iOS app this goes to the native share sheet. WKWebView will not
 // download a blob URL, so the anchor path below does nothing there.
 const native=nativeBridge("saveBackup");
 if(native){
  native.postMessage({filename,text:json});
  return;
 }

 const blob=new Blob([json],{type:"application/json"});
 const a=document.createElement("a");a.href=URL.createObjectURL(blob);
 a.download=filename;a.click();
 setTimeout(()=>URL.revokeObjectURL(a.href),4000);
 toast("Saved a backup of your trips, catches and saved lakes.");
}

function importMyData(file){
 const r=new FileReader();
 r.onload=()=>{
  try{
   const d=JSON.parse(r.result);
   if(Array.isArray(d.trips))localStorage.setItem("osl-trips",JSON.stringify(d.trips));
   if(Array.isArray(d.favorites))localStorage.setItem("osl-favorites",JSON.stringify(d.favorites));
   if(Array.isArray(d.recent))localStorage.setItem("osl-recent",JSON.stringify(d.recent));
   persistDurable();
   trips=JSON.parse(localStorage.getItem("osl-trips")||"[]");
   migrateTrips();
   favoriteKeys=new Set(JSON.parse(localStorage.getItem("osl-favorites")||"[]"));
   recentLakes=JSON.parse(localStorage.getItem("osl-recent")||"[]");
   apply();toast("Restored your backup.");
  }catch(e){toast("That file is not a Stocked Lakes backup. Choose the .json file you exported.")}
 };
 r.readAsText(file);
}

function helpMarkup(){
 return `<div class="helpHero"><img class="brandMark large" src="icons/icon-192.png" alt=""><div><h2>${t("helpTitle")}</h2><p>${t("disclaimer")}</p></div></div>
 <div class="helpGrid">
  <section><h3>${t("helpFind")}</h3><p>${t("helpFindText")}</p></section>
  <section><h3>${t("helpRules")}</h3><p>${t("helpRulesText")}</p></section>
  <section><h3>${t("helpTrips")}</h3><p>${t("helpTripsText")}</p></section>
  <section><h3>${t("helpWeather")}</h3><p>${t("helpWeatherText")}</p></section>
  <section><h3>${t("privacy")}</h3><p>${t("privacyText")}</p></section>
 </div>
 <div class="aboutBlock"><h3>${t("dataSources")}</h3>
  <a target="_blank" rel="noopener" href="https://www.ontario.ca/fishonline">Ontario Fish ON-Line / ON-Pêche</a>
  <a target="_blank" rel="noopener" href="https://www.ontario.ca/document/ontario-fishing-regulations-summary">2026 Ontario Fishing Regulations Summary</a>
  <a target="_blank" rel="noopener" href="https://weather.gc.ca/">Environment Canada Weather</a>
 </div>
 ${speciesArtCredit?`<div class="aboutBlock"><h3>${t("illustrations")}</h3>
  <p class="helpNote">${esc(speciesArtCredit).replace(/[.\s]+$/,"")}. ${t("plateAboutNote")}</p>
 </div>`:""}
 <div class="aboutBlock"><h3>${t("yourData")}</h3><p class="helpNote">${t("yourDataText")}</p>
  <div class="dataActions">
   <button id="exportData" type="button">${t("exportData")}</button>
   <label class="importBtn">${t("importData")}<input id="importData" type="file" accept="application/json,.json" hidden></label>
  </div>
 </div>
 <div class="versionStamp">Manitoba Stocked Lakes • ${APP_VERSION}<span>© 2026 Richard J Allinson</span><span class="rightsNote">${t("rightsNote")}</span></div>`;
}

const TEXT_SIZES=["standard","large","larger"];
function applyTextSize(size){
 document.body.classList.remove("text-large","text-larger");
 if(size==="large")document.body.classList.add("text-large");
 if(size==="larger")document.body.classList.add("text-larger");
 localStorage.setItem("osl-textsize",size);
}
function currentTextSize(){return localStorage.getItem("osl-textsize")||"standard"}

function settingsMarkup(){
 const size=currentTextSize();
 const label={standard:appLang==="fr"?"Standard":"Standard",large:appLang==="fr"?"Grand":"Large",larger:appLang==="fr"?"Très grand":"Larger"};
 return `<h2 class="sheetTitle">${t("settings")}</h2>

 <section class="setBlock">
  <h3>${t("textSize")}</h3>
  <p class="setNote">${t("textSizeNote")}</p>
  <div class="segmented" role="group" aria-label="${t("textSize")}">
   ${TEXT_SIZES.map(v=>`<button type="button" data-size="${v}" class="${v===size?"on":""}">${label[v]}</button>`).join("")}
  </div>
  <p class="sizePreview">${t("sizePreview")}</p>
 </section>

 <section class="setBlock">
  <h3>${t("language")}</h3>
  <div class="segmented" role="group" aria-label="${t("language")}">
   <button type="button" data-lang="en" class="${appLang==="en"?"on":""}">English</button>
   <button type="button" data-lang="fr" class="${appLang==="fr"?"on":""}">Français</button>
  </div>
 </section>

 <section class="setBlock">
  <h3>${t("onOpening")}</h3>
  <p class="setNote">${t("onOpeningNote")}</p>
  <div class="segmented" role="group" aria-label="${t("onOpening")}">
   <button type="button" data-restore="1" class="${restoreSearchEnabled()?"on":""}">${t("reopenLastSearch")}</button>
   <button type="button" data-restore="0" class="${restoreSearchEnabled()?"":"on"}">${t("startFresh")}</button>
  </div>
 </section>

 <section class="setBlock">
  <h3>${t("units")}</h3>
  <p class="setNote">${t("unitsNote")}</p>
  <div class="segmented" role="group" aria-label="${t("units")}">
   <button type="button" data-units="metric" class="${currentUnits()==="metric"?"on":""}">${t("metric")}</button>
   <button type="button" data-units="imperial" class="${currentUnits()==="imperial"?"on":""}">${t("imperial")}</button>
  </div>
 </section>

 <section class="setBlock">
  <h3>${t("location")}</h3>
  <p class="setNote">${t("locationNote")}</p>
  <button id="setLocate" class="ghostbtn wide" type="button">${t("useLocation")}</button>
 </section>

 ${appLang==="fr"?`<section class="setBlock">
  <h3>${t("language")}</h3>
  <p class="setNote">${t("regsEnglishNote")}</p>
 </section>`:""}

 <section class="setBlock">
  <h3>${t("stockingData")}</h3>
  <p class="setNote">${t("stockingDataNote")}</p>
  <p class="setNote">${stockingBuilt?`${t("asOf")} ${esc(stockingBuilt)}.`:t("liveData")}</p>
  <button id="refreshStocking" class="ghostbtn wide" type="button">${t("checkStockings")}</button>
 </section>

 <section class="setBlock">
  <h3>${t("yourData")}</h3>
  <p class="setNote">${t("yourDataText")}</p>
  <div class="dataActions">
   <button id="exportData" type="button">${t("exportData")}</button>
   <label class="importBtn">${t("importData")}<input id="importData" type="file" accept="application/json,.json" hidden></label>
  </div>
 </section>

 <section class="setBlock">
  <button id="openHelpFromSettings" class="ghostbtn wide" type="button">${t("helpTitle")}</button>
 </section>

 <div class="versionStamp">Manitoba Stocked Lakes • ${APP_VERSION}<span>© 2026 Richard J Allinson</span><span class="rightsNote">${t("rightsNote")}</span></div>`;
}

function openSettings(){
 const c=$("settingsContent");if(!c)return;
 c.innerHTML=settingsMarkup();
 c.querySelectorAll("[data-size]").forEach(b=>b.onclick=()=>{applyTextSize(b.dataset.size);openSettings()});
 c.querySelectorAll("[data-lang]").forEach(b=>b.onclick=()=>{setLanguage(b.dataset.lang);openSettings()});
 c.querySelectorAll("[data-restore]").forEach(b=>b.onclick=()=>{
  setRestoreSearch(b.dataset.restore==="1");
  // Turning it on from a screen you have already searched should capture
  // that search, not wait for the next one.
  if(b.dataset.restore==="1"&&searched)saveLastSearch();
  openSettings();
 });
 c.querySelectorAll("[data-units]").forEach(b=>b.onclick=()=>{
  setUnits(b.dataset.units);openSettings();
  if(tripTabFor!==null&&!$("tripSheet").classList.contains("hidden"))openTrip(tripTabFor);
 });
 const sl=$("setLocate");if(sl)sl.onclick=()=>{$("settingsSheet").classList.add("hidden");locate(apply)};
 const rs=$("refreshStocking");if(rs)rs.onclick=refreshStockingFromAPI;
 const ex=$("exportData");if(ex)ex.onclick=exportMyData;
 const im=$("importData");if(im)im.onchange=e=>{if(e.target.files[0])importMyData(e.target.files[0])};
 const oh=$("openHelpFromSettings");if(oh)oh.onclick=()=>{$("settingsSheet").classList.add("hidden");openHelp()};
 $("settingsSheet").classList.remove("hidden");
}

function openHelp(){
 const c=$("helpContent");if(c)c.innerHTML=helpMarkup();
 // Backup lives in Settings now; Help just points at it.
 const ex=$("exportData");if(ex)ex.onclick=exportMyData;
 const im=$("importData");if(im)im.onchange=e=>{if(e.target.files[0])importMyData(e.target.files[0])};
 $("helpSheet").classList.remove("hidden");
}
function wireShell(){
 const hb=$("helpBtn"),ch=$("closeHelp"),hs=$("helpSheet"),ob=$("onboarding"),co=$("closeOnboarding"),se=$("startExploring");
 const sb=$("settingsBtn"),cs=$("closeSettings"),ss=$("settingsSheet");
 if(sb)sb.onclick=openSettings;
 if(cs)cs.onclick=()=>ss.classList.add("hidden");
 if(ss)ss.onclick=e=>{if(e.target===ss)ss.classList.add("hidden")};
 applyTextSize(currentTextSize());
 if(hb)hb.onclick=openHelp;if(ch)ch.onclick=()=>hs.classList.add("hidden");
 if(hs)hs.onclick=e=>{if(e.target===hs)hs.classList.add("hidden")};
 const closeOnboard=()=>{if(ob)ob.classList.add("hidden");localStorage.setItem("osl-onboarded-v1t","1")};
 if(co)co.onclick=closeOnboard;
 /* "Start Exploring" asks for location, once, on first run.

    v2y refused to prompt at startup on the grounds that a permission dialog
    is a poor greeting. Trevor pointed out that anyone opening a
    find-me-a-lake app expects to be asked, and he is right — the mistake was
    treating "never prompt at startup" as the rule instead of "never prompt
    without context". This is a tap on a button reading Start Exploring, on
    the one screen that has just explained what the app does. That is context,
    and a user gesture, which is what the permission API wants anyway.

    Declining costs nothing: every distance feature already degrades to a
    province-wide search, and the button behaves the same either way. */
 if(se)se.onclick=()=>{
  closeOnboard();setView("explore");
  const askedKey="osl-asked-location";
  if(!localStorage.getItem(askedKey)&&(navigator.geolocation||nativeBridge("requestLocation"))){
   localStorage.setItem(askedKey,"1");
   if(!userLoc)locate(apply);
  }
 };
 if(ob&&!localStorage.getItem("osl-onboarded-v1t"))ob.classList.remove("hidden");
}

document.addEventListener("DOMContentLoaded",()=>{
 const en=$("langEN"),fr=$("langFR");
 if(en)en.onclick=()=>setLanguage("en");
 if(fr)fr.onclick=()=>setLanguage("fr");
 restoreLocation();
 migrateTrips();
 setLanguage(appLang);wireShell();
 refreshLocationQuietly();
});

/* ---- The master Spots screen -------------------------------------------
   The map panel answers "what is on this lake"; this answers "where are all
   my spots". Same storage, second door: anything long-pressed onto a lake
   map appears here at once, and a delete here removes it there too.
   Rows carry their own edit controls so tidying up never costs a trip to
   the lake and back, while tapping the row opens the lake itself -- the
   planning case, which is the common one. */
let allSpotsFilter=null,allSpotsIconFilter=null,allSpotsQuery="",allSpotsEditing=null;
let allSpotsCollapsed={};
function lakeByKey(k){
 return lakes.find(l=>String(l.key)===String(k))||
        lakes.find(l=>String(l.waterbodyId||"")===String(k))||null;
}
function allSpotsRows(){
 const out=[];
 Object.keys(savedSpots||{}).forEach(lk=>{
  const lake=lakeByKey(lk);
  (savedSpots[lk]||[]).forEach(sp=>{
   out.push({sp,lk,lake,lakeName:lake?lake.name:t("spotUnfiled")});
  });
 });
 const c=userLoc;
 out.forEach(r=>{r.km=(c&&c.length===2)?distance(c[0],c[1],r.sp.lat,r.sp.lon):null});
 /* Nearest first: "what is close to me this weekend" is the question this
    list exists to answer. Without a fix, newest first. */
 out.sort((a,b)=>{
  if(a.km!=null&&b.km!=null)return a.km-b.km;
  if(a.km!=null)return -1;
  if(b.km!=null)return 1;
  return (b.sp.ts||0)-(a.sp.ts||0);
 });
 return out;
}
function renderAllSpots(){
 const host=document.getElementById("allSpotsView");
 if(!host)return;
 let rows=allSpotsRows();
 if(allSpotsFilter)rows=rows.filter(r=>r.sp.color===allSpotsFilter);
 if(allSpotsIconFilter)rows=rows.filter(r=>(r.sp.icon||"pin")===allSpotsIconFilter);
 const q=allSpotsQuery.trim().toLowerCase();
 if(q)rows=rows.filter(r=>(r.sp.name||"").toLowerCase().includes(q)||(r.lakeName||"").toLowerCase().includes(q));
 const total=allSpotsRows().length;
 let h='';
 if(!total){
  h='<p class="asEmpty">'+t("noSpotsAnywhere")+'</p>';
  host.innerHTML=h;return;
 }
 h+='<div class="asTools"><input id="allSpotsSearch" type="search" placeholder="'+t("spotSearchPh")+'" value="'+escHtml(allSpotsQuery)+'"></div>';
 h+='<div class="asFilters"><button type="button" data-asfilter="" class="'+(allSpotsFilter?"":"on")+'">'+t("allSpots")+'</button>';
 SPOT_COLORS.forEach(c=>{h+='<button type="button" data-asfilter="'+c.key+'" class="asDot'+(allSpotsFilter===c.key?" on":"")+'" style="background:'+c.hex+'" aria-label="'+c.label+'"></button>'});
 h+='</div>';
 /* Second filter axis: the icon. Combined with colour and search, "red +
    fish + moira" answers itself. */
 h+='<div class="asFilters asIconFilters">';
 SPOT_ICONS.forEach(ic=>{h+='<button type="button" data-asiconfilter="'+ic.key+'" class="asIconChip'+(allSpotsIconFilter===ic.key?" on":"")+'" aria-label="'+ic.label+'">'+spotIconSvg(ic.key,allSpotsIconFilter===ic.key?"#13263C":"#8A99A8",20)+'</button>'});
 h+='</div>';
 h+='<p class="asCount">'+rows.length+" "+(rows.length===1?t("spotOne"):t("spotMany"))+'</p>';
 if(!rows.length){
  h+='<p class="asEmpty">'+t("noSpotsMatch")+'</p>';
  host.innerHTML=h;return;
 }
 /* Grouped by lake, nearest lake first: a hundred markers over ten lakes
    becomes ten headers. Tap a header to fold that lake away. */
 const groups=new Map();
 rows.forEach(r=>{
  if(!groups.has(r.lk))groups.set(r.lk,{lk:r.lk,lakeName:r.lakeName,lake:r.lake,rows:[],km:null});
  const g=groups.get(r.lk);
  g.rows.push(r);
  if(r.km!=null&&(g.km==null||r.km<g.km))g.km=r.km;
 });
 const glist=[...groups.values()].sort((a,b)=>{
  if(a.km!=null&&b.km!=null)return a.km-b.km;
  if(a.km!=null)return -1;
  if(b.km!=null)return 1;
  return a.lakeName.localeCompare(b.lakeName);
 });
 glist.forEach(g=>{
  const folded=!!allSpotsCollapsed[g.lk];
  h+='<button type="button" class="asLakeHead'+(folded?" folded":"")+'" data-asfold="'+escHtml(g.lk)+'">'+
     '<span class="asLakeName">'+escHtml(g.lakeName)+'</span>'+
     '<span class="asLakeMeta">'+g.rows.length+" "+(g.rows.length===1?t("spotOne"):t("spotMany"))+
     (g.km!=null?" \u00b7 "+g.km.toFixed(1)+" km":"")+'</span>'+
     '<span class="asChevron">'+(folded?"\u25b8":"\u25be")+'</span></button>';
  if(folded)return;
  h+='<div class="asList">';
  g.rows.forEach(r=>{
   const hex=(SPOT_COLORS.find(x=>x.key===r.sp.color)||{}).hex||"#D4A017";
   const editing=allSpotsEditing===r.sp.id;
   h+='<div class="asRow'+(editing?" editing":"")+'">';
   h+='<button type="button" class="asMain" data-asopen="'+escHtml(r.lk)+'" data-asid="'+r.sp.id+'"'+(r.lake?"":" disabled")+'>'+
      '<span class="asIcon">'+spotIconSvg(r.sp.icon||"pin",hex,22)+'</span>'+
      '<span class="asMeta"><span class="asName">'+escHtml(r.sp.name)+'</span>'+
      '<span class="asSub">'+(r.km!=null?r.km.toFixed(1)+" km":"")+'</span></span></button>';
   h+='<button type="button" class="asEdit" data-asedit="'+r.sp.id+'" aria-label="Edit">'+
      '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M5 19h3l9-9-3-3-9 9zM14 5l3 3"/></svg></button>';
   h+='</div>';
   if(editing){
    h+='<div class="asEditor"><input class="asRename" data-asid="'+r.sp.id+'" data-aslk="'+escHtml(r.lk)+'" maxlength="50" value="'+escHtml(r.sp.name)+'">';
    h+='<div class="asColors">';
    SPOT_COLORS.forEach(c=>{h+='<button type="button" class="asSwatch'+(r.sp.color===c.key?" sel":"")+'" data-ascolor="'+c.key+'" data-asid="'+r.sp.id+'" data-aslk="'+escHtml(r.lk)+'" style="background:'+c.hex+'" aria-label="'+c.label+'"></button>'});
    h+='</div><div class="asIcons">';
    SPOT_ICONS.forEach(ic=>{h+='<button type="button" class="asIconBtn'+((r.sp.icon||"pin")===ic.key?" sel":"")+'" data-asicon="'+ic.key+'" data-asid="'+r.sp.id+'" data-aslk="'+escHtml(r.lk)+'" aria-label="'+ic.label+'">'+spotIconSvg(ic.key,"#5B6B7C",20)+'</button>'});
    h+='</div><div class="asEditBtns">'+
       '<button type="button" class="asSave" data-assave="'+r.sp.id+'" data-aslk="'+escHtml(r.lk)+'">'+t("saveChanges")+'</button>'+
       '<button type="button" class="asDel" data-asdel="'+r.sp.id+'" data-aslk="'+escHtml(r.lk)+'">'+t("deleteSpot")+'</button>'+
       '</div></div>';
   }
  });
  h+='</div>';
 });
 host.innerHTML=h;
}
function updateSpotFields(lk,id,changes){
 const spots=getSpots(lk);
 const sp=spots.find(x=>x.id===id);
 if(!sp)return;
 Object.assign(sp,changes);
 setSpots(lk,spots);
 redrawSpots();
}
document.addEventListener("click",e=>{
 const host=document.getElementById("allSpotsView");
 if(!host||host.hidden||!host.contains(e.target))return;
 const b=e.target.closest("button");
 if(!b)return;
 if(b.hasAttribute("data-asfilter")){
  allSpotsFilter=b.dataset.asfilter||null;renderAllSpots();return;
 }
 if(b.dataset.asiconfilter){
  allSpotsIconFilter=allSpotsIconFilter===b.dataset.asiconfilter?null:b.dataset.asiconfilter;
  renderAllSpots();return;
 }
 if(b.dataset.asfold!==undefined&&b.classList.contains("asLakeHead")){
  allSpotsCollapsed[b.dataset.asfold]=!allSpotsCollapsed[b.dataset.asfold];
  renderAllSpots();return;
 }
 if(b.dataset.asedit){
  allSpotsEditing=allSpotsEditing===b.dataset.asedit?null:b.dataset.asedit;
  renderAllSpots();return;
 }
 if(b.dataset.ascolor){
  updateSpotFields(b.dataset.aslk,b.dataset.asid,{color:b.dataset.ascolor});renderAllSpots();return;
 }
 if(b.dataset.asicon){
  updateSpotFields(b.dataset.aslk,b.dataset.asid,{icon:b.dataset.asicon});renderAllSpots();return;
 }
 if(b.dataset.assave){
  const inp=host.querySelector('.asRename[data-asid="'+b.dataset.assave+'"]');
  const nm=inp&&inp.value.trim();
  if(nm)updateSpotFields(b.dataset.aslk,b.dataset.assave,{name:nm.slice(0,50)});
  allSpotsEditing=null;renderAllSpots();return;
 }
 if(b.dataset.asdel){
  /* Tap-again, as everywhere else destructive in this app. */
  if(b.dataset.armed){
   const lk=b.dataset.aslk;
   setSpots(lk,getSpots(lk).filter(x=>x.id!==b.dataset.asdel));
   setShownSpots(lk,getShownSpots(lk).filter(x=>x!==b.dataset.asdel));
   redrawSpots();allSpotsEditing=null;renderAllSpots();
  }else{b.dataset.armed="1";b.classList.add("armed");b.textContent=t("tapAgain")}
  return;
 }
 const open=b.closest("[data-asopen]");
 if(open){
  const lake=lakeByKey(open.dataset.asopen);
  /* Straight into the lake sheet: depth, regs, stocking and the marker in
     one tap -- the planning case this list exists for. */
  if(lake&&typeof detail==="function")detail(lake);
  return;
 }
},true);
document.addEventListener("input",e=>{
 if(e.target&&e.target.id==="allSpotsSearch"){
  allSpotsQuery=e.target.value;
  const host=document.getElementById("allSpotsView");
  const pos=e.target.selectionStart;
  renderAllSpots();
  const again=document.getElementById("allSpotsSearch");
  if(again){again.focus();try{again.setSelectionRange(pos,pos)}catch(_){}}
 }
});
