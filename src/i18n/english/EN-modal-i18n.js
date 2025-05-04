/* eslint-disable no-inline-comments */
/* eslint-disable line-comment-position */
/* eslint-disable max-len */
/* eslint-disable camelcase */

// All modal info, i18n support
export const modal = {
  confirm: "Confirm",
  begin: "Begin",
  catchupModalTitleA: "Content Catch-up",
  catchupModalTitleB: "Content Summary",
  timeStr: "It has been $1aX since you last loaded up the game.",
  catchupModalDescA: `If you need a refresher, here is a quick summary of all the content you have unlocked so far from the beginning of
the game, separated into different stages of progression. These are only very brief descriptions; you can check
the related How To Play entries by clicking the contents title or $1aX icons to view more detailed information.`,
  catchupModalDescB: `Based on your current progression, it will probably be useful to try to increase your $1aX`,
  eternityChallengeModalMessage: `You will Eternity (if possible) and start a new Eternity within the Challenge, with all the
Challenge-specific restrictions and modifiers active. To complete the Challenge $1aX, you must reach the Challenge goal of
$2aX Infinity Points. You can complete Eternity Challenges up to $3aX times, with increasing goals and bonuses.`,
  ecModalMsgPlaceholder: " and gain its reward",
  ecModalEterLabel: "You are about to enter Eternity Challenge $1aX",
  ecModalRewardText: "The reward for completing this challenge is: $1aX",
  ecModalConditionText: "Inside this Eternity Challenge, $1aX",
  infinityChallengeModalMessage: `You will Big Crunch (if possible) and start a new Infinity within the Challenge, with all the
Challenge-specific restrictions and modifiers active. To complete the Challenge $1aX, you must reach the Challenge goal of
$2aX Antimatter. You do not start with any Dimension Boosts or Galaxies, regardless of upgrades.`,
  icModalMsgPlaceholder: " and gain its reward",
  icModalEterLabel: "You are about to enter Infinity Challenge $1aX",
  icModalRewardText: "The reward for completing this challenge is: $1aX",
  icModalConditionText: "Inside this Infinity Challenge, $1aX",
  normalChallengeModalMessage: `You will Big Crunch (if possible) and start a new Infinity within the Challenge, with all the
Challenge-specific restrictions and modifiers active. To complete the Challenge $1aX, you must reach Infinity again.
You do not start with any Dimension Boosts or Galaxies, regardless of upgrades.`,
  ncModalMsgPlaceholder: " and gain its reward",
  ncModalEterLabel: "You are about to enter Challenge $1aX",
  ncModalRewardText: "The reward for completing this challenge is: $1aX",
  ncModalConditionText: "Inside this Challenge, $1aX",
  companionDeletion0: "Are you sure you want to get rid of your Companion Glyph?",
  companionDeletion1: "You will not receive any cake.",
  companionDeletion2: "This is permanent! You will not get another Companion Glyph!",
  companionDeletion3: `You deleted your faithful Companion Glyph more quickly than any other test subject on record. Congratulations.`,
  ty: "Thank you",
  glyphMoveModal: "The selected Glyph changed position or was otherwise changed!",
  deletionModalMsg1: "You are about to delete a Glyph",
  deletionModalMsg2: "Deleting a Glyph will remove the Glyph from your inventory!",
  deletionModalMsg3: "There is no benefit in deleting a Glyph before you have unlocked Glyph Sacrifice!",
  allGlyphPurgeLabel: "You are about to $1aX all rejected Glyphs",
  allGlyphPergeMsg: `Are you sure you want to $1aX all rejected Glyphs? This will remove
all Glyphs that would be rejected by your current Glyph Filter settings. $2aX`,
  allGlyphPurgeNegWarning: `Note that some of your Effect Filter scores are negative, which may cause you to
lose some Glyphs you normally want to keep.`,
  noGlyphRemoves: "This will remove no Glyphs.",
  allGlyphRemoves: "This will remove all your Glyphs.",
  someGlyphRemoves: "This process will remove $1aX Glyphs.",
  unprotGlyphPurgeLabel: "You are about to $1aX all unprotected Glyphs",
  unprotGlyphPergeMsg: `Are you sure you want to $1aX all unprotected Glyphs in your inventory?`,
  noGlyphRemovesRSD: "This will $1aX no Glyphs.",
  allGlyphRemovesRSD: "This will $1aX all your Glyphs.",
  someGlyphRemovesRSD: "This process $1aX remove $2aX Glyphs.",
  noGlyphPurged: "This will Purge no Glyphs.",
  allGlyphPurged: "This will Purge all your Glyphs.",
  harshPurge: "Harsh",
  someGlyphPurged: "$1aX Purging will delete $1aX of your Glyphs.",
  harshPurgeExplantion: `Harsh Purging deletes Glyphs that are strictly worse than any other Glyph in your
inventory. For example, if a Glyph has all the same effects as another Glyph, but the values
of ALL of the effects are worse, then it will be deleted.`,
  purgeExplanation: `Purging deletes Glyphs that are strictly worse than other Glyphs, while keeping enough to equip a full
set with those effects. This behaves like Harsh Purge, except that regular Purge will not delete any given
Glyph unless it finds five Glyphs which are better (instead of only one).`,
  aboutToPurge: "You are about to$1aX Purge your Glyphs",
  purgeMessage: `This could delete Glyphs in your inventory that are good enough that you might want to use them
later. $1aXPurging will Purge Glyphs based on your Purge mode. Are you sure you want to do this`,
  aboutToRefine: "You are about to refine a Glyph",
  refineMsgA: `Refining a Glyph will remove the Glyph from your inventory, and in return,
you will increase your $1aX Alchemy resource from $2aX to $3aX. This Glyph can raise your $4aX resource to at most $5aX.`,
  refineMsgB: `You cannot gain any $1aX alchemy resource because you have not
unlocked this Glyph's resource yet. You can still refine it anyway, but nothing will happen. Consider sacrificing the Glyph instead.`,
  sacrificeConfirm: `Do you really want to sacrifice this Glyph? Your total power of sacrificed $1aX
Glyphs will increase from $2aX to $3aX.`,
  sacrificeHeader: "You are about to sacrifice a glyph",
  glyphCosmeticChoose: "Choose a Glyph Cosmetic Set",
  glyphCosmeticChooseDropdown: "▼ Available Sets ▼",
  setContains: "The \"$1aX\" Set contains the following $2aX:",
  symbol: "symbol",
  colScheme: "color scheme",
  glyphModTitle: "Custom Glyph Appearance",
  hasCustomSets: "Reset Appearances to Default:",
  glyphModMessage: "All Types$This Type$This will not reset any individually-modified Glyphs.$Glyph Type:",
  glyphModNotes: `Note: Some options may cause very poor color contrast or readability on certain themes with certain Glyph types.$
You currently have no available options for changing the default appearance of your Glyphs. To unlock some, visit
the Shop Tab or beat the game.$
Enabling this setting will allow you to change individual Glyphs to special cosmetic types you have unlocked.$
Enabling or disabling this option will currently do nothing.`,
  resetCos: "Reset all individual Glyph cosmetics",
  perGlyphCos: "Appearance Options for $1aX Glyphs",
  noModCompanion: "Companion Glyphs cannot have their symbol modified.",
  col: "color",
  noCustomCosmeticOptions: "You have no custom options for changing Glyph $1aXs",
  glyphDisplayOptionsList: `New Glyph identifier: $ Unequipped Glyph identifier: $ Always show Glyph effect dots: $ 
  Fancy Glyph borders: $ Always show Glyph Info: $ High-cotrast rarity colors: $ Swap border and symbol colors`,
  GDOtopLabel: "Glyph Display Options",
  glyphBGcol: "Glyph BG color: $1aX",
  additionalGlyphInfo: "▼ Additional Glyph Info: ▼",
  singGlyphCosHeader: "Modifying Single Glyph Appearance",
  resetGlyphAppear: "Reset this Glyph's appearance",
  cantCos: "This Glyph's Cosmetic Type cannot be changed!",
  applySpecCos: "Apply Special Cosmetic Type:",
  dark: "Dark",
  light: "Light",
  auto: "Auto",
  cannotHideCurrent: "You cannot hide the tab you are on",
  cannotHideOption: "Options tabs cannot be hidden",
  clickHide: "Click to hide tab",
  clickUnhide: "Click to unhide tab",
  cantHide: "This tab cannot be hidden",
  modifyVisibleHeader: "Modify Visible Tabs",
  modifyVisibleMessage: `Click a button to toggle showing a tab on/off.$
Some tabs cannot be hidden, and you cannot hide your current tab.$
Unhiding a tab in which all subtabs are hidden will also unhide all subtabs,
and hiding all subtabs will also hide the tab.`,
  cantHideNearEnd: "You cannot hide your tabs after unlocking the Galaxy Generator.",
  namelessHideTextA: "You must... see everwhere...",
  namelessHideTextB: "(You cannot hide your tabs within this Reality)",
  showAllTabs: "Show all tabs",
  AnimationOpt: "Animation Options",
  AOlist: "Big Crunch:$Eternity:$Dilation:$Tachyon particles:$Reality$Always use Blobhole:$Background:$Blobsnow:$Blobflake:",
  AwayHeader: "Away Progress Options",
  AwayNote: "Note: Selected resources will only show if they've increased.",
  emptyInBrack: "(Empty)",
  savesEveryOn: "Saves every $1aX online",
  savesEveryOff: "Saves every $1aX offline",
  savesPre: "Pre-loading save",
  lastSave: "Last Saved: $1aX ago",
  slotNotUsed: "Slot not currently in use",
  slotX: "Slot #$1aX",
  load: "Load",
  resourceNames: "Reality Shards$Imaginary MAchine Cap$Reality MAchines$Eternity Points$Infinity Points$Antimatter",
  noResources: "No resources",
  notifyBackupLoad: "Game loaded from bakup slot #$1aX:",
  autoBackupHeader: "Automatic Backup Saves",
  autoBackupTextA: `The game makes automatic backups based on time you have spent online or offline.
Timers for online backups only run when the game is open, and offline backups only save to the slot with the longest applicable timer.
Additionally, your current save is saved into the last slot any time a backup from here is loaded.`,
  autoBackupTextB: `These backups are still stored in the same place as your game save and can still be lost if you do anything
external to the game which would delete your save itself, such as $1aX. You can import/export all backups at once as files, using these buttons:`,
  steamUninstalll: "fully uninstalling the game",
  cookieDelete: "clearing your browser cookies",
  loadWithNoOffline: "Load with offline progress disabled",
  exportAsFile: "Export as file",
  importAsFile: "Import from file",
  autoBackupTextC: "Each of your three save slots has its own seperate set of backups",
  confirmationHeader: "Confirmation Options",
  noConfirmations: `You do not have anything that requires confirmation, but if you did it would appear here.`,
  hotkeyHeader: "Hotkey List",
  buyNdims: "Buy 1 Dimension$Buy 10 Dimensions",
  shiftInfo: `Shift is a modifier key that shows additional information on certain things
and adjusts the function of certain buttons.`,
  altInfoA: `Alt is a modifier key that, when pressed in conjunction with any key that has a corresponding autobuyer, will toggle said autobuyer.`,
  altInfoB: `When pressing both Alt and Shift, you can toggle buying singles or buying max for the Antimatter Dimension and Tickspeed Autobuyers instead.`,
  arrowKeyInfo: `Using the Arrow Keys will cycle you through the game's pages.
The Up and Down arrows cycle you through tabs,
and the Left and Right arrows cycle you through that tab's subtabs.`,
  numpadLimit: `Due to technical reasons, pressing a numpad key will purchase 10 of a Dimension if possible, but pressing
a numpad key with $ will not buy a single Dimension. It may instead, depending on your device,
cause the page to scroll or change game tabs. $ will still work as expected.`,
  windowZoom: "Window Zoom",
  zoomAdj: `To adjust zoom level, hold $ and press either $ or $ to decrease or increase zoom. $ will reset zoom to 100%.`,
  fullscreen: "Fullscreen",
  fullscreenInfo: "$To enter or exit fullscreen, press $.",
  moreShiftInfo: `You can hold Shift $1aX. $ while buying Time Studies to buy all up until that point $ to save Time Study Trees $ to purge Glyphs`,
  modKeysHeader: "Modifier Keys",
  otherHotkeyHeaders: "Modifier Key$Autobuyer Controls$Tab Movement$Numpad Support",
  infoDisplayHeader: "Info Display Options",
  infoDisplayTexts: `Show % gain:$Achievement IDs:$Achievement unlock state indicators:$Challenge IDs:$Time Study IDs:$
Glyph effect dots:$Realit Upgrade names:$Perk IDs:$Alchemy resource amounts:`,
  infoDisplayNote: "Note: All types of additional info above will always display when holding shift.",
  on: "On",
  off: "Off",
  news: "News: $1aX",
  newsModalHeader: "News Options",
  msgRepeat: "$1aX message repeat buffer",
  aiMsg: "$1aX AI messages",
  scrollSpeed: "$1aX scroll speed",
  aniEff: "Animation Effects:",
  notationModalHeader: "Exponent Notation Settings",
  notationModalMsgA: `You can adjust what your numbers look like when very large. With small values, the exponent will
be directly displayed with no additional formatting. Larger values will have commas inserted into the exponent
for clarity, and the largest values will apply notation formatting to the exponent in order to shorten it. You can
adjust the two thresholds between these regions below:`,
  notationModalMsgB: "Minimum for commas in exponent: $1aX digits",
  notationModalMsgC: "Minimum for notation in exponent: $1aX digits",
  sample: "Sample numbers for exponent formatting:",
  notationModalMsgD: `Note: The interface is generally optimized for Scientific notation with settings of $1aX
and $2aX digits. Some text may look odd or overflow out of boxes if you
differ significantly from these values. Additionally, these settings might not cause any visual changes
when using certain notations.`,
  dimSplit: "Dimension Split Preference",
  paceSplit: "Pace Split Preference",
  selectGlyphLabels: "None$Level$Rarity$Sacrifice Value$Glyph Filter Score$Current Refinement Value$Maximum Refinement Value",
  aboutToPurchase: "You are about to purchase $1aX",
  ags: "Antimatter Galaxy",
  atpOneAG: "You are about to purchase an Antimatter Galaxy",
  resetResourcesAG: "Antimatter$Antimatter Dimensions$Tickspeed$Dimension Boosts",
  icN: "Infinity Challlenge $1aX",
  cel5Reality: "$1aX's Reality",
  agTSboost: "you will receive a small boost to Tickspeed Upgrades.",
  agNoTSboost: "you will not receive a boost to Tickspeed Upgrades, because you are in $1aX",
  resetNothing: "This will reset nothing, and $1aX",
  resetSome: "This will reset your $1aX. However, $2aX",
  surePurchase: "Are you sure you want to purchase $1aX? $2aX",
  surePurAG: "Are you sure you want to purchase an Antimatter Galaxy? $1aX",
  aboutToDoom: "You are about to Doom your Reality",
  armaResetHeader: "You are about to perform an Armageddon reset",
  remants: "Remnant",
  ArmaReset: "Armageddon will start a new Doomed Reality. You will gain $1aX $2aX",
  ArmaFirstReset: "which will produce $1aX Reality Shards/s",
  ArmaNotFirstReset: "which will increase your Reality Shards gain from $1aX/s to $2aX/s",
  doomInfo: `Dooming your Reality will reset everything except Challenge records, Celestial progress and anything under
the General and Reality header on the Statistics tab. You will not gain any rewards from your progress
in your current Reality. Dooming your Reality will also purge most of your unprotected Glyphs and disable certain game mechanics.`,
  areYouSure: "Are you sure you want to do this?",
  aboutToInf: "You are about to Infinity",
  uponInfinity: "Upon Infinity, all Dimensions, Dimension Boosts, and Antimatter Galaxies are reset. $1aX",
  firstInfinityInfo: `In return, you gain an Infinity Point (IP). This allows you to buy multiple upgrades that you can
find in the Infinity tab. You will also gain one Infinity, which is the stat shown in the Statistics tab.`,
  infGainInfo: "You will gain $1aX and $2aX",
  am: "Antimatter",
  db: "Dimension Boost",
  gal: "Galaxy",
  ip: "Infinity Point",
  inf: "Infinity",
  willStartNextInf: "You will start your next Infinity with $1aX.",
  infAnimationModal: `This animation will occur after every manually-triggered Infinity. If
you would like to disable it, there is a setting to do so in the Options tab. This can be done for any
visual animation effect in the game after seeing it for the first time.`,
  dbResetHeader: "You are about to do a Dimension Boost Reset",
  dbWillReset: "reset your Antimatter and Antimatter Dimensions. Are you sure you want to do this?",
  dbWontReset: `not actually reset anything due to an upgrade you have which prevents Antimatter and Antimatter Dimensions
from being reset in this situation. You will still gain the multiplier from the Boost, as usual.`,
  thisWill: "This will $1aX",
  eter: "Eternity",
  real: "Reality",
  celsReality: "$1aX Reality",
  celsRealityMessageBase: "Perform a Reality reset and enter $1aX Reality, in which:",
  teresaNotDone: `You have not unlocked the reward for Teresa's Reality yet.
Unlocking the reward requires purchasing the Reality study and completing the Reality for the first time.`,
  teresaDone: `Your highest Teresa completion was for $1aX antimatter, gaining you a $2aX multiplier to Glyph Sacrifice power.`,
  effarigDone: "Effarig is completed!",
  effarigOnLayer: "You are currently on the $1aX Layer.",
  namelessNotDone: "We... can help... Let us... help...",
  namelessDone: "Have... we... not helped enough...",
  raMessage: `Within Ra's Reality, some resources will generate Memory Chunks for Celestial Memories based on their amounts:`,
  laiNotThisTier: "You have not completed Lai'tela at this tier.",
  laiThisTier: "Your fastest completions on this tier is $1aX",
  gain: "gain $ gains",
  has: "have $ has",
  regainedAllMemories: "$1aX regained all Memories",
  chunksBasedOn: "$1aX Memory Chunks based on $2aX",
  thisFirstDilation: "This is your first Dilation",
  dilEnterHeader: "You are about to enter Dilation",
  dilationInfo: `Dilating time will start a new Eternity, and all Dimension multiplier's exponents and
tickspeed multiplier's exponent will be reduced to $1aX. If you can Eternity while Dilated,
your Tachyon Particles will be increased to a value based on your highest antimatter and any Tachyon Particle
multipliers you have.`,
  maxFeasible: `You already have the maximum feasible amount of Tachyon Particles you can attain due to
    Teresa's Level $1aX reward.`,
  lastDilationAt: `You last completed Dilation at $1aX Eternity Points.`,
  enter: "Enter",
  ep: "Eternity Point",
  completingECheader: "Complete Eternity Challenge",
  eterHeader: "You are about to Eternity",
  firstEterText: `Eternity will reset everything except Achievements, Challenge records, and anything under the General header
on the Statistics tab. You will also gain an Eternity Point and unlock various upgrades.`,
  eterText: "Eternity will reset everything except Achievements, Challenge records, and anything under the General header on the Statistics tab.",
  gainedOnEter: "You will gain $1aX and $2aX on Eternity.",
  startNextEter: "You will start your next Eternity with $1aX.",
  ecXalreadyMaxed: "Eternity Challenge $1aX is already fully completed",
  noBulkECcompletion: "You will gain one completion of Eternity Challenge $1aX.",
  bulkECcompletion: "You will gain $1aX for Eternity Challenge $2aX",
  completion: "completion",
  restart: "Restart",
  exit: "Exit",
  hasHigherLayers: "Other effects coming from higher-layer restrictions will still continue to apply.",
  restartingChall: "You will immediately re-enter $1aX again after confirming this modal.",
  exitingChall: "This will place you back into a regular $1aX without any restrictions.",
  restartLowercase: "restart",
  exitLowercase: "exit",
  aboutTo: "You are about to ",
  noDoomExit: "You cannot exit Dilation while Doomed",
  aboutToExitDilation: "You are about to exit Dilation",
  doomedInfo: "Dilation is permanent. You will $1aX and reset your current eternity.",
  notDoomedInfo: "If you exit Dilation now, you will $1aX.",
  ECandDilation: "You will also exit your current Eternity Challenge as well.",
  areYouSureProceed: "Are you sure you want to proceed",
  noGain: "not gain anything",
  dilGain: "gain $1aX",
  okay: "Okay",
  tp: "Tachyon Particle",
  shrek: "Shrek is love, Shrek is life",
  hardResetHeader: "HARD RESET",
  resetConfirmText: "Please confirm your desire to hard reset this save slot.",
  resetNoSecret: "Deleting your save will not unlock anything secret.",
  resetTypeInB: "Type in \"$1aX\" to confirm.",
  resetWipe: "THIS WILL WIPE YOUR SAVE.",
  resetRemoveNG: "This will also remove any Glyph cosmetics you have unlocked from completing the game!",
  resetLoseSpeedrun: "You will lose the ability to do a Speedrun. To restart your run, use the \"Start Speedrun\" button instead.",
  resetPhraseConfirmed: "Phrase confirmed - continuing will irreversibly delete your save!",
  resetTypeIn: "Type in the correct phrase to hard reset.",
  firstRealityText: `Reality will reset everything except Challenge records and anything under the General header on the
Statistics tab. The first $1aX rows of Achievements are also reset,
but you will automatically get one Achievement back every
$2aX You will also gain Reality Machines based on your Eternity Points, a
Glyph with a level based on your Eternity Points, Replicanti, and Dilated Time, a Perk Point to spend
on quality of life upgrades, and unlock various upgrades.`,
  noSTARTwarning: `You currently only have a single option for new Glyphs every
Reality. You can unlock the ability to choose from multiple Glyphs by canceling out of this modal and
purchasing the START Perk.`,
  noChosenPreFilter: "You must select a Glyph in order to continuue",
  noChosenPostFilter: "If you do not choose a Glyph, one will be automatically selected using your Glyph filter.",
  willGainX: "You will gain $1aX",
  pp: "Perk Point",
  rm: "Reality Machine",
  rs: "Relic Shard",
  levelStat: "You will get a level $1aX Glyph on Reality, which is $1aX your best",
  level: "level",
  higherThanBest: "higher than",
  lowerThanBest: "lower than",
  equalToBest: "equal to",
  realityModalHeader: "You are about to Reality",
  simRealityTextA: "After choosing this Glyph the game will simulate the rest of your Realities,",
  simRealityTextB: "acutomtically choosing another $1aX based on your Glyph filter settings.",
  autoPurgeTextA: "Auto-purge is currently enabled; your selected Glyph",
  autoPurgeTextB: "may not appear in your inventory after it triggers",
  simRealityWarning: `You will be simulating more Realities than you have open inventory space for;
this may result in some Glyphs being Sacrificed`,
  noInvSpace: "You do not have any free inventory space - your selected Glyph will be automatically $1aX!",
  sacrificeDelete: "Sacrificed $ deleted",
  disablingRealityModal: "You can force this modal to appear (even if disabled) by Shift-clicking the Reality button.",
  sacrifice: "Sacrifice",
  glyph: "Glyph",
  rgHeader: "You are about to purchase $1aX",
  rg: "Replicanti Galaxy",
  rgMessage: `A Replicanti Galaxy boosts Tickspeed the same way an Antimatter Galaxy does. However, it does not
increase the cost of Antimatter Galaxies, nor is it affected by multipliers to Antimatter Galaxies specifically.
It will $1aX.`,
  rgDevideRep: "devide your Replicanti by $1aX for each Replicanti Galaxy purchased ($2aX to $3aX)",
  rgResetRep: "reset your Replicanti to $1aX",
  aboutToReset: "You are about to reset your $1aX",
  aboutToResetMessage: "This will reset you to the start of your $1aX giving you no rewards from your progress in your current $1aX.",
  canNormalReal: `You can currently complete a Reality for all its normal rewards, which you will not receive if you
Reset here. To get rewards, use the "Make a new Reality" button.`,
  arma: "Armageddon",
  previewUnavail: "Preview Unavailable",
  editAuto: "Edit Autobuyers",
  noAutos: "You currently have no autobuyters which could be shown here",
  usingModalEditAuto: "Using this modal, you can edit various values inside your autobuyers.",
  reqInfo: "Required Information",
  usePresetTS: "Use a preset Study Tree:",
  currTree: "Current Tree",
  toConsider: "Possible things to consider:",
  otherIssues: "(If something seems wrong with the template inputs, it will show up here)",
  cantGenTemplate: "Cannot generate template (You have $1aX)",
  invIn: "invalid input",
  automatorNTemlate: "$1aX Template",
  reqInfo: "Required Information:",
  usePresetST: "Use a preset Study Tree:",
  currentTree: "Current Tree",
  possibleConsider: "Possible things to consider:",
  ifSomethingWrong: "(If something seems wrong with the template inputs, it will show up here)",
  tempCopied: "Template copied to clipboard",
  yourXactivatedY: "Your $1aX activated $2aX",
  expo: "exponent ", // Space here is important
  xIncreased: "$1aX $2aXincreased from $3aX to $4aX", // Lack of space between $2aX and text is important
  time: "time",
  whileAwayFor: "While you were away for $1aX:",
  whileAwayForAlt: "While you were away for $1aX... Nothing happened.",
  hideNote: "Note: Click an entry to hide it in the future",
  breakInfHeader: "You are breaking infinity",
  breakInfBaseText: `Breaking Infinity will allow you to gain antimatter past $1aX$2aX
Dimensions and Tickspeed Upgrades will scale in cost faster after $1aX antimatter.
You will gain additional Infinity Points on Big Crunch based on antimatter produced over $1aX.$3aX`,
  breakInfExtraA: ".$, and allow you to read numbers past $1aX",
  breakInfExtraB: "\nIt will also unlock Break Infinity Upgrades and max all Normal Challenge Autobuyers.",
  break: "Break",
  changelog: "Changelog",
  xUpd: "\"$1aX\" update",
  changeNameHeader: "Change your Speedrun Player Name",
  changeNameTextA: "This can no longer be changed once the timer starts, and there is a limit of $1aX characters.",
  changeNameTextB: "Your new name will be $1aX",
  changeName: "Change Name",
  delConst: "Deleting Automator Constants",
  delConstTextA: "Are you sure you wish to delete all of your currently-defined automator constants?",
  delConstTextB: "This will irreversibly delete $1aX!",
  constant: "constant",
  delAll: "Delete All",
  ad: "Antimatter Dimensions",
  delScript: "Delete This Script",
  delScriptText: "Please confirm your desire to delete this automator script",
  del: "Delete",
  year: "year",
  namelessCracks: "Cracks in The Nameless Ones' Reality",
  realityResist: "This Reality seems to be resisting your efforts to complete it. So far you have done the following:",
  haveNotFigured: "You have not figured out what this hint means yet.",
  foundCrack: "You have exposed a crack in the reality:",
  canSpendTime: `You can spend some time looking for some more cracks in the Reality, but every hint you spend Stored Time on
will increase the Stored Time needed for the next by a factor of $1aX. This cost bump will
gradually go away over $2aX hours and figuring out what the hint means will immediately
divide the cost by $3aX. The cost can't be reduced below $4aX years.`,
  nextHint: "The next hint will cost $1aX of Stored Time. You currently have $2aX.",
  timeToReach: "You will reach this if you charge your Black Hole for $1aX.",
  getRealityHint: "Get a hint about the Reality itself ($1aX left)",
  getGlyphHint: "Get a hint on what Glyphs to use ($1aX left)",
  noHints: "There are no more hints left!",
  delGlyphSet: "Delete this Glyph Set",
  confirmDelGlyphSet: "Please confirm your desire to delete this Glyph Set:",
  willNotDelGlyphs: "This will not affect your actual Glyphs, only the saved preset.",
  projGlyphLevel: "Projected Glyph Level: $1aX",
  h2p: "How To Play",
  importASD: "Import Automator Script Data",
  newScript: "This will create a new Automator script at the end of your list",
  newScriptExtraData: "This will also import additional data related to the script.",
  scriptName: "Script Name: $1aX",
  lineCount: "Line Count: $1aX",
  studyPresets: "Study Presets:",
  presetSlotX: "Preset slot #$1aX",
  presetSlotXAlt: `"$1aX" (slot $2aX)`,
  overwrittenPresets: "$1aX of your existing presets will be overwritten by imported presets!",
  consts: "Constants:",
  overwrittenConsts: "Some of your existing constants will be overwritten!",
  constLim: "$1aX will not be imported due to the $2aX constant limit.",
  scriptHasErrors: "This script has errors which need to be fixed before it can be run!",
  someErrFix: "Some errors may be fixed with the additional data being imported.",
  invalidADS: "Invalid Automator data string",
  ignorePresets: "Will Ignore Presets",
  ignoreConst: "Will Ignore Constants",
  impPresets: "Will Import Presets",
  impConst: "Will Import Constants",
  import: "import",
  impGFS: "Import Glyph filter settings",
  GFSoverwrite: "Note: Importing Glyph filter options will overwrite settings$in all filter modes, not just the currently-selected one",
  mouseover: "Mouseover each box for more details. ✔ and ✘ symbols denote an effect selected/unselected for Specified Effect mode.",
  selMode: "Selection mode:",
  effCount: `Effect Count ("Number of Effects"):`,
  rejGlyph: "Rejected Glyphs:",
  typeSpec: "Type-specific Settings",
  invalidGFS: "Not a valid Glyph filter string",
  minEff: "Minimum Effects: $1aX",
  score: "Score: $1aX",
  noChanges: "(No changes)",
  rarityFilterTT: "Setting for Rarity Threshold and Specified Effect",
  effectCountFilterTT: "Number of effects in Specified Effect",
  scoreFilterTT: "Threshold for Effect Score",
  saveFromFuture: "This save is from $1aX in the future.",
  saveFromPast: "This save was last opened $1aX ago.",
  opImported: "Using imported save settings",
  opLocal: "Using existing save settings",
  opIgnored: "Will not simulate offline time",
  opErr: "Unrecognised offline progress setting for importing",
  willImpWOoffline: "Save will be imported without offline progress",
  wontApplyOffline: "This setting will not apply any offline progress after importing.",
  noOfflineFuture: "Offline progress cannot be simulated due an inconsistent system clock time.",
  tickCalc: "After importing, will simulate $1aX ticks of duration $2aX each.",
  fileName: "File name: $1aX",
  saveAM: "Antimatter: $1aX",
  saveInf: "Infinities: $1aX",
  saveEter: "Eternities: $1aX",
  saveReal: "Realities: $1aX",
  saveComps: "Full game completions: $1aX",
  willOverride: "(Your current save file will be overwritten!)",
  saveOP: "Offline Progress: $1aX",
  invalidSave: "Not a valid save:",
  willLoseCosmeticsA: "Glyph cosmetic sets form compeleting the game are tied to your save.",
  willLoseCosmeticsB: "Importing this save will cause you to lose some sets.",
  willLoseSpeedrun: "You will lose the ability to do a Speedrun, as this save does not have it unlocked.",
  importAlt: "Import",
  inputSave: "Input your save",
  importTSConstHeader: "Importing Time Study Presets as Constants",
  iTSCtextA: `Confirming this modal will import all of your saved Time Study presets as new Automator constants.
Below are all the valid presets which will be imported, with the beginning and end of their contained
studies shown. Some names may be changed due to restrictions on constant name formatting.`,
  nameAtoB: "Name: $1aX ➜ $2aX",
  willOverwriteExistingConst: "This will overwrite an existing constant!",
  cantImportX: "$1aX in this list cannot be imported due to the limit on constant count",
  impAll: "Import All",
  preset: "preset",
  aboutGame: "About the game",
  infoModalText: `Antimatter Dimensions is an Idle Incremental game created by Finnish developer Hevipelle. Originating as a solo
project in 2016, it was expanded upon by a large team of developers and testers from then on.$The
game has unfolding gameplay and multiple prestige layers. The "How to Play" button contains useful information about
progressing.$The Break Eternity port is a port intended to allow modders to extend the vanilla game beyond e9e15 by using a new
library aswell as other changes, such as better glyph handing. The repository link here has been changed
appropriately.`,
  ghRepo: "GitHub repository",
  adserv: "Antimatter Dimensions Discord Server",
  adgp: "Antimatter Dimensions on Google Play",
  adstm: "Antimatter Dimensions on Steam",
  cred: "Credits",
  changelog: "Game Changelog",
  saveX: "Save #$1aX:",
  selected: "(selected)",
  saveSelect: "Save Selection",
  message: "Message",
  dontShowAgain: "Don't show this message again",
  remaining: "Remaining: $1aX",
  cancel: "Cancel",
  modGRNG: "Modifying Glyph RNG Seed",
  modGRNGTextA: `All Glyph options beyond the first Reality for an entire playthrough are randomly determined from the very
beginning, based on the value of an initial seed number. The role of this seed is that it chooses a single,
particular set of Glyph options for your playthrough. If you or anyone else chooses the same seed
in a different run, you will get the same options for Glyphs.`,
  canSwitch: "You can switch between these three options any point before you generate your first Glyph.",
  currentSetting: "Current Setting: $1aX",
  oPS: "Official Preset seed",
  thisDefault: "This is the default option which chooses the seed $1aX. Anyne who chooses to not modify the seed at all will get these Glyph options.",
  rS: "Randomized Seed",
  rStxt: `This selects a completely randomized seed value, producing Glyph options which are very likely to be different from anyone else's
  playthrough unless they intentionally chose the same value.`,
  cantInputZero: "Input seed cannot be zero!",
  pSS: "Player-selected Seed:",
  pSStxt: "This option sets your seed to the value you type into the text box.",
  replaceInput: "Your current input will be $1aX the number $2aX",
  convUsed: "converted to$used as",
  inputDefualt: "Your current input $1aX 0; the seed will default to Official Preset.",
  convUsedAlt: "converts to$is equal to",
  techReasons: "For technical reasons, the value must be non-zero to be accepted.",
  // Yes this is a modal so it goes here. It sucks. Deal with it.
  pelleNerfList: `
  Anything unlocked through a Pelle upgrade cannot be unlocked normally$
  All pre-Doomed IP and EP multipliers are disabled$
  IP generation based on fastest infinity speed is disabled$
  All pre-Doomed Replicanti speed multipliers are disabled$
  Replicanti slows down more drastically above $1aX$
  Most Eternity Challenges are harder$
  All Galaxies are only $2aX as effective$
  Antimatter Dimension Multiplier is devided by $3aX$
  Achievement multiplier and many achievement rewards are disabled$
  Black Holes are disabled$
  Reality Upgrade "Temporal Transcendence" is disabled$
  All rewards which increase your starting resources except Achievement 21 are disabled$
  All rewards which prevent resources from being reset are disabled$
  Perk rewards which reduce unlock costs have been disabled, excluding the ECR group$
  Automatic Infinity and Eternity Challenges are disabled$
  All Dimension and pre-Infinity Autobuyers are disabled until reacquired through Pelle$
  The Time Theorem Autobuyer is disabled$
  All Automation related to Time Dilation or later is disabled$
  Eternity Upgrade to Time Dimensions based on days played is based on this Armageddon time$
  All pre-Doomed Dilated Time multipliers are disabled except the $4aX buyable$
  All Tachyon Particle multipliers are disabled$
  All pre-Doomed Time Theorem generation effects are disabled except the Dilation upgrade$
  Glyph equipping is disabled until reacquired$
  Glyph levels are lowered and rarity is set to $5aX$
  Effects from Glyph Sacrifice, Alteration, and Alchemy are all disabled$
  You cannot enter any other Celestial Realities$
  Music Glyphs cannot be bought$
  All rewards from Effarig are disabled$
  All features related to storing time are disabled$
  All rewards from V are disabled$
  The Teresa Level $6aX effect from Ra is disabled$
  Infinity Upgrades cannot be charged$
  Triad Studies and Space Theorems are disabled$
  Imaginary Upgrades are disabled excluding those relating to DMD's and Celestial unlocks$
  Continuum and Singularity rewards are disabled`,
  listOfDisabled: "List of disabled and nerfed effects in Doomed",
  realGlyphCreation: "Reality Glyph Creation",
  rgcText: `Create a level $1aX Reality Glyph. Rarity will always be $2aX and
  level scales on your current Reality Resource amount (which is all consumed). All other Alchemy Resources will
  be unaffected. Reality Glyphs have unique effects, some of which are only available with higher level Glyphs.
  Reality Glyphs can also be sacrificed to increase all Memory Chunk gain. Like Effarig Glyphs,
  you cannot equip more than one at the same time.`,
  availableEffects: "Available Effects:",
  noRealDoomed: "You cannot create Reality Glyphs while Doomed",
  makeReal: "Create a Reality Glyph!",
  gtZero: "Reality Glyph Level must be greater than $1aX",
  noInvSpaceB: "No available inventory space; Sacrifice some Glyphs to free up space.",
  reqGlX: "(Requires Glyph level $1aX)",
  aboutToReplace: "You are about to replace a Glyph",
  willRestart: "Replacing a Glyph will restart this $1aX",
  dimSac: "Dimensional Sacrifice",
  hasAchSacrifice: `Dimensional Sacrifice will give you a boost to the 8th Antimatter Dimension based on the amount of
  1st Antimatter Dimensions you had at the time of Sacrificing.`,
  noAchSacrifice: `Dimensional Sacrifice will remove all of your 1st through 7th Antimatter Dimensions
  (with the cost and multiplier unchanged), for a boost to the 8th Antimatter Dimension based on the total
  amount of 1st Antimatter Dimensions sacrificed. It will take time to regain production.`,
  dsMultText: "Multiplier is currently $1aX and will increase to $2aX on Dimensional Sacrifice",
  singMilestoneGroupResource: "Singularity Count$Condense Count$Manual Time$Auto Time",
  singMilestoneGroupSort: "Singularities needed$Current Completions$Progress to full completions$Final Singularities$Most Recent",
  singMilestoneGroupCompleted: "First$Last$Don't move",
  ascDesc: "Ascending$Descending",
  singMile: "Singularity Milestones",
  toggleGlow: "Make button glow when new milestones have been reached",
  toMile: "To Milestone:",
  sortBy: "Sort By:",
  compMile: "Completed Milestones:",
  sortOrder: "Sort Order:",
  enterSpeedrun: "Entering Speedrun Mode",
  speedrunTextA: `This will start a save with additional statistics tracking for when you reach certain points of
  the game. These will be visible in the bottom-right of the screen and on a dedicated subtab of Statistics.`,
  speedrunTextB: `Almost all animations and confirmations are disabled by default, but you can change any of these settings before
  you reach their required progression. When you begin the run, the game remains paused until
  your antimatter changes, allowing you to configure all your settings before starting. In order to avoid having
  to wait for a long time before actually starting an optimized run, a few achievements are given for free.`,
  speedrunTextC: "There is no additional content in Speedrun Mode.",
  speedrunTextD: `You can type in text below to name your speedrun save. This will have no effects on gameplay and only identifies
  this particular save as yours. If no name is given, a random name will be generated instead. This name can be
  changed by clicking your name in the speedrun info box, as long as the timer has not started yet.`,
  speedrunTextE: `Speedrun saves can be imported and exported like regular saves. Importing a speedrun save will mark it as a
  Segmented run, as importing and exporting allows for optimization of individual segments of the game.
  Without importing, saves will remain as Single-segment runs.`,
  speedrunTextF: "You can modify the Glyph RNG seed in the Options tab before starting your run, if desired.",
  speedrunTextG: `Starting a speedrun will reset your save to the beginning of the game. Some things will remain, such as
  full-game completion stats, visual settings, automator scripts, and Glyph cosmetics, but otherwise it
  will be as if you had just finished the entire game and chose to restart at the credits screen. Type
  in "Gotta Go Fast!" below to confirm and (re)start the run.`,
  continue: "Continue",
  startRun: "Start Run!",
  emptyCurrent: "into an empty Tree$with your current Tree",
  notPurchase: "Importing this $1aX will not purchase any new Time Studies.",
  importWill: "Importing $1aX will purchase",
  cost: "(Cost: $1aX)",
  delStudyPreset: "Deleting Study Preset \"$1aX\"",
  invalidImportStr: "Your import string has invalid study IDs: $1aX <br><br>",
  inputTree: "Input your tree",
  editTree: "Editing Study Preset \"$1aX\"",
  save: "Save",
  successEdit: "Study Tree \"$1aX\" successfully edited.",
  presetNamed: "Study preset \"$1aX\"",
  presetUnnamed: "Study preset",
  presetDeleted: "$1aX deleted from slot $2aX",
  presetHas: "Study Preset contains:",
  noLoadStatus: "Status after loading with <b>no studies</b>:",
  loadStatus: "Status after loading with <b>current tree</b>:",
  invalidTree: "Not a valid tree",
  formatPreset: "Format Preset Text",
  formatPresetHover: "This will format the study preset text, for example, changing 'a,b,c|d' to 'a, b, c | d'.",
  cantEterRN: "You are currently unable to eternity, so this will only do a normal load.",
  respecAndEter: "Also respec tree and eternity",
  dimSplit: "Dimension Split: $1aX",
  paceSplit: "Pace Split: $1aX",
  ec: "Eternity Challenge $1aX",
  willStart: "(will start)",
  UImodalEntries: `
  Many more game events now have animations. If these impact your performance or gameplay, they can be disabled in the Visual Options tab.$
  New confirmation windows have replaced the default Javascript alert windows. These can be disabled in the Gameplay Options tab.$
  The game now also has a new sleek layout which was designed with more Modern design practices in mind.`,
  visualChanges: "Visual Changes",
  oldSaveLoad: "We noticed that you've loaded an old save; a few visual changes have been made since older versions of the game:",
  changeAnytine: `You can change between the Classic UI which older versions of the game used and the newer Modern UI in the Visual
  Options tab at any time. Would you like to swap to the Modern UI now?`,
  remain: "Remain",
  swap: "Swap",
  aboutToUndo: "You are about to undo equipping a Glyph",
  lastRemoved: "The last equipped Glyph will be removed. Reality will be reset, but some things will be restored to what they were when it was equipped:",
  undoList: `<br>- Antimatter, Infinity Points, and Eternity Points$
  <br>- Dilation Upgrades, Tachyon Particles, and Dilated Time$
  <br>- Time Theorems and Eternity Challenge completions$
  <br>- Time Dimension and Reality unlocks$
  <br>- Time in current Infinity/Eternity/Reality$
  <br>- Stored game time`,
  invalidStayInvalid: `Note that if you invalidate special requirements for certain things (such as the achievement for completing
  a Reality without producing antimatter), they will remain invalid even after undoing. In those cases, you will
  need to complete the conditions in a single Reality without using undo.`,
  conditionLockHeaader: "$1aX Condition Lock",
  areYouSureCondition: "Are you sure you wish to $1aX? Doing this right now will cause you to$fail the requirement for the $2aX \"$3aX\"",
  selectCancel: `Selecting "Cancel" will close this modal with no effect, while selecting "Disable Lock" will disable the
  requirement check for this upgrade and prevent this message from reappearing unless you turn it back on.`,
  neitherPerform: "Neither of these options will perform the action you just attempted, so you will need to try again",
  disableLock: "Disable Lock",
  iUrU: "Imaginary Upgrade$Reality Upgrade",
  glyphUndoOnly: "Glyph Undo can only undo with a Reality!",
  noChangeSeed: "You cannot modify your seed any more. Glyph RNG has already been used to generate at least one Glyph on this run.",
  tsNoStudies: "This Time Study lists currently contains no Time Studies",
  crash: "$1aX<br>Check the console for more details",
  causedExit: "$1aX, which has caused you to exit it.",
  amAnnihilation: "Your $1aX antimatter was annihilated by $2aX matter.",
  invalidPerks: "Some of your Perks were invalid, but you auto-bought all valid perks.",
  invalidPerksAlt: "Some of your Perks were invalid, so your Perks have been reset and your Perk Points refunded.",
  noInvSpaceC: "No available inventory space; free up space by shift-clicking Glyphs to get rid of them.",
  unlockedSpeedrun: `You have unlocked Speedrun Mode! This allows you to start a new save file with some slight
      changes which can be helpful if you're trying to complete the game as quickly as possible. The option to
      start a Speedrun Save is now available in the Options tab, under Saving. Choosing to start a Speedrun Save
      will provide you with another modal with more in-depth information.`,
  animatedTheme: "This secret theme has animations. If they are giving you performance issues, you can turn them off in the Options/Visual tab to reduce lag",
  tdBeforett: "You need to buy atleast $1aX Time Dimension before you can purchase Time Theorems.",
  subMinuteInf: `Since you performed an Infinity in under a minute, the UI changed on the screen.
    Instead of the Dimensions disappearing, they stay and the Big Crunch button appears on top of them.
    This is purely visual, and is there to prevent flickering.`,
  alrShownCrack: "You have already exposed this crack in the Reality. Time in this Eternity is being multiplied by your Eternity count, up to a maximum of $1aX",
  feelEter: "Time in this Eternity will be multiplied by your Eternity count, up to a maximum of $1aX",
  doomUnequip: "Dooming your Reality will unequip your Glyphs. Some of your Glyphs could not be unequipped due to lack of inventory space.",
  doomSpace: "You must have enough empty unprotected Glyph slots for $1aX additional Glyphs in order to Doom your Reality",
  refresh: "Refresh the page (game will be saved) we've got new stuff: $1aX by $2aX",
  onlyOneXGlyph: "You may only have one $1aX Glyph equipped!",
  cantUEallGlyphs: "$1aX could not be unequipped due to lack of space. Free up some space in your $2aX in order to unequip $3aX",
  opt: "Protected slots$Main Inventory$ or switch where you are equipping to",
  itthem: "it$them",
  noInvSpaceD: "No available inventory space; Sacrifice some Glyphs to free up space.",
  cantUEinv: "Some of your Glyphs could not be unequipped due to lack of inventory space.",
  cantLoadSave: "Could not load the save (format unrecognized or invalid).",
  rmLimited: `Reality Machine gain for your first Reality is reduced above $1aX Eternity Points and capped at $2aX Eternity Points.
  This is due to balance changes made in the Reality update which affect the difficulty of reaching those amounts,
  such as the increased Time Dimension cost scaling above $3aX.`
};