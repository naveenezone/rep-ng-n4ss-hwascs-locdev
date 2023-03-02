# rep-ng-n4ss-hwascs-locdev
# Repository for Hello World application -Front End (Angular)
# This front end application connects to back end Spring boot application rep-ng-n4ss-hwascs-locdev

### Function: run_exit_error
run_exit_error () {
if run_debug ;then echo -e "  @DEBUG:  Running...function:run_exit_error" ; fi| tee -a $MAINLOG
echo -e "" | tee -a $MAINLOG
 exit $RET_CODE
echo -e "" | tee -a $MAINLOG

}.
