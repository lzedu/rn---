import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  wrapper: {
    height: 170
  },

  containerHorizontal: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 170
  },

  slideImg: {
    height: 170,
    width: '100%'
  },

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  gridText: {
    fontSize: 16,
    margin: 6
  },

  gridImg: {
    width: 60,
    height: 60,
    borderRadius: 5
  },

  siteContainer:{
    backgroundColor:'#3dbcc6',
    width:'100%',
    height:44,
    alignItems:'center',
    flexDirection:'row'
  },

  siteLogoWrap: {
    height:19,
    width:90,
    marginLeft:16
  },

  siteLogoImage: {
    width:90,
    height:19
  },
  NavItem:{
    height:85,
    marginTop:20,
    marginLeft:16,
    marginRight:16,
    marginBottom:20
  },
  navImage:{
    width:50,
    height:50,
    marginBottom:5
  },
  NavItemWrap:{
    justifyContent:'center',
    alignItems:'center',
  },
  hotItemWrap:{
    width:200,
    marginRight:15,
    marginBottom:10,
  },

  hotComContainer:{
    marginTop:10,
    marginLeft:10
  },
  hotTitleWrap:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginBottom:10
  },
  titleWrap:{
    fontSize:20,
    fontWeight:'bold'
  },
  subTitleWrap:{
    fontSize:10,
    color:'#999'
  },
  lookmore:{
    justifyContent:'center',
    marginRight:10
  },
  itemImage:{
    height:150,
    width:200
  },
  namestyle:{
    marginTop:5,
    marginBottom:5
  },
  pricestyle:{
    color:'#FF7966'
  },
  pricecount:{
    color:'#999'
  },
  storyItem:{
    flexDirection:'row',
    paddingTop:10,
    
  },
  storyImage:{
    width:117,
    height:87
  },
  storyRightWrap:{
    marginLeft:10,
    marginRight:10,
    flex:1
  },
  storyRightTitle:{
    fontSize:14,
    fontWeight:'bold',
    marginTop:5,
    marginBottom:5
  },
  storyRightintro:{
    color:'#999'
  }
})